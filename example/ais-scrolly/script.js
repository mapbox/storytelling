var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.querySelector('#header');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    if (record.classes) {
        record.classes.forEach(class_ => {
            chapter.classList.add(class_)
        })
    }
    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";

    return {
        url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest
});

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });


        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    map.addSource('egmond', {
        "type": "image",
        "url": "images/maps/aismap_egmond_07_0030.png",
        "coordinates": [
            [4.2903, 52.7675],
            [4.8089, 52.7675],
            [4.8089, 52.5163],
            [4.2903, 52.5163]
        ]
    })
    map.addLayer({
        'id': 'egmond',
        'type': 'raster',
        'source': 'egmond'
    })

    map.addSource('baggeren', {
        "type": "video",
        "urls": ["movies/movie_07_v2.webm"],
        "coordinates": [
            [4.2903, 52.7675],
            [4.8089, 52.7675],
            [4.8089, 52.5163],
            [4.2903, 52.5163]
        ]
    })
    map.addLayer({
        'id': 'baggeren',
        'type': 'raster',
        'source': 'baggeren'
    })


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
            map[chapter.mapAnimation || 'flyTo'](chapter.location);

            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.marker) {
                var marker = new mapboxgl.Marker()
                marker.setLngLat(chapter.location.center);
                marker.addTo(map);
                chapter.illustrationMarker = marker

                var illustration = new mapboxgl.Marker()
                illustration.setLngLat(chapter.marker.geometry.coordinates);
                illustration.addTo(map);
                chapter.illustrationImage = illustration

                chapter.leaderLine = new LeaderLine(
                    illustration.getElement(),
                    marker.getElement()
                )
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', function() {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 90, {
                        duration: 24000, easing: function (t) {
                            return t;
                        }
                    });
                });
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
            if (chapter.illustrationMarker) {
                chapter.illustrationMarker.remove()
            }
            if (chapter.illustrationImage) {
                chapter.illustrationImage.remove()
            }
            if (chapter.leaderLine) {
                chapter.leaderLine.remove()
            }
        });
});

// setup resize event
window.addEventListener('resize', scroller.resize);
