var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add('lefty');
features.setAttribute('id', 'features');

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    
    var chapter = document.createElement('div');
    chapter.classList.add(config.theme);
    chapter.innerHTML = record.content;
    
    container.appendChild(chapter);
    features.appendChild(container);
});

story.appendChild(features);

mapboxgl.accessToken = config.accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
});

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        
        if ('bbox' in chapter){
            map.fitBounds(chapter.bbox, {
                padding: {top: 0, bottom:0, left: document.documentElement.clientWidth*0.5, right: 0}
            });
        } else{
            map.flyTo(chapter.location);
        }
        
        
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
});

// setup resize event
window.addEventListener('resize', scroller.resize);





















/* PERO */
//jQuery('.li-hover').forEach()
//let liHover = document.getElementById("ul-depth");

document.querySelectorAll('.ul-legend').forEach(item => {
    item.addEventListener("mouseover", function( e ) {   
        [ ...item.children ].forEach(function(li){
            setLayerOpacity({
                layer:  li.getAttribute('value'),
                opacity: 0.3
            })
        })
        setLayerOpacity({
            layer: e.target.getAttribute('value'),
            opacity: 1
        })
    }, false)
    
    item.addEventListener("mouseout", function( e ) {   
        [ ...item.children ].forEach(function(li){
            setLayerOpacity({
                layer:  li.getAttribute('value'),
                opacity: 0.8
            })
        })
    }, false);
    
})

let layers = ['coral','intertidal-seagrass','subtidal-seagrass']
layers.forEach(function(l){
    map.on('mousemove', l, function(e) {
        map.getCanvas().style.cursor = 'pointer';
        document.querySelectorAll('li[value='+l+']').forEach(function(i){
            i.classList.add('li-hover-hover')
        })
        layers.forEach(function(li){
            setLayerOpacity({
                layer:  li,
                opacity: 0.3
            })
        })
        setLayerOpacity({
            layer: l,
            opacity: 1
        })
    });
    map.on('mouseleave', l, function(e) {
        document.querySelectorAll('li[value='+l+']').forEach(function(i){
            i.classList.remove('li-hover-hover')
        })
        layers.forEach(function(li){
            setLayerOpacity({
                layer:  li,
                opacity: 0.8
            })
        })
        map.getCanvas().style.cursor = '';
    });
})
