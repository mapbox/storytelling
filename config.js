var config = {
    style: 'mapbox://styles/rafnuss/ck8ontev900sv1ime4eomy68t',
    accessToken: 'pk.eyJ1IjoicmFmbnVzcyIsImEiOiIzMVE1dnc0In0.3FNMKIlQ_afYktqki-6m0g',
    /*showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'A STORY OF SEA GRASS',
    subtitle: 'Seagrass has long been overlooked in marine ecology. But it’s an essential element of the marine world. 
    Let’s dive in to Watamu Marine Park, off the Coast of Kenya, to take a closer look.',
    byline: 'By a A Rocha Kenya',
    footer: 'Source: source citations, etc.',*/
    chapters: [
        {
            id: 'intro-empty',
            content: '',
            location: {
                center: [0,0],
                zoom: 1,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chap1',
            content: '<h3>Welcome to Kenya!</h3>\
            <p>About 8% of the Kenya’s land mass is protected for wildlife conservation. Out of the 61 parks and reserves in the country, 10 are marine. </p>\
            <p>Established 52 years ago, Watamu Marine Park and Reserve is one of Kenya’s first marine parks.</p>\
           <img class="image-wrapper" src="https://raphaelnussbaumer.com/storytelling/assets/Intro/aerial%20view.jpg"/>\
           ',
           bbox : [[38.01216, -0.52813],[ 41.63761, -5.65162 ]],
            onChapterEnter: [{
                layer: 'landuse-overlay',
                opacity: .7
            },{
                layer: 'poi-label',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'landuse-overlay',
                opacity: 0
            },{
                layer: 'poi-label',
                opacity: 0
            }]
        },
        /*{
            id: 'full-reserve',
            content: '<h4>What\'s the difference between park and reserve?</h4>\
            <p>In parks, there is complete protection of natural resources and the only activities allowed are tourism and research.</p>\
            <p>In reserves, human activities, such as fishing, are allowed under specific conditions. </p>\
            <p>The Watamu Marine Reserve stretches over 170km<sup>2</sup>. </p>\
           ',
            location: {
                center: [39.99527, -3.32961],
                zoom: 10,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },*/
        {
            id: 'full-park',
            content: '\
            <h4>Watamu Marine Park </h4>\
            <p>In just 10km<sup>2</sup>, the park is home to over 600 species of fish, over 150 species of soft and hard corals, 9 species of marine mammals, sharks, rays, and countless nudibranches and invertebrates.</p>\ </p> \
            <img class="image-wrapper" src="https://raphaelnussbaumer.com/storytelling/assets/Section1/dolphins.jpg"/>\
            ',
            bbox:[[39.89901, -3.25715],[40.22991, -3.41009]],
            onChapterEnter: [],
            onChapterExit: []
        },
        /*{
            id: 'full-park-2',
            content: '\
            <p> It covers an area of 10square kms, going down to 10m deep. </p>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 13,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },*/
        {
            id: 'coral',
            content: '\
            <h4>More than a coral reef</h4>\
            <p>A marine park conjures up images of coral reefs. And there is one in Watamu! </p>\
            <p>But the reef represents only 1% of the park...</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="coral"><span class="fa-li" style="color:#c500ff;"><i class="fas fa-square"></i></span>Coral</li>\
            </ul>\
            <img class="image-wrapper" src="./assets/Intro/Toby%20Hudson%20%28CC-BY-SA-3.0%29.jpg"/>\
            ',
            bbox:[[39.95001, -3.34862],[ 40.02934, -3.40282]],
            onChapterEnter: [{
                layer: 'coral',
                opacity: .9
            }],
            onChapterExit: [{
                layer: 'coral',
                opacity: .90
            }]
        },
        /*{
            id: 'coral-layer',
            content: '\
            <p>But actually, this reef only represents X% of the park.</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" id="coral"><span class="fa-li" style="color:#c500ff;"><i class="fas fa-square"></i></span>Coral</li>\
            </ul>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 13,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [{
                layer: 'coral',
                opacity: .9
            }],
            onChapterExit: [{
                layer: 'coral',
                opacity: 0
            }]
        },*/
        {
            id: 'seagrass',
            content: '\
            <h4>Seagrass - the hidden star of the park</h4>\
            <p>Most of the park is covered in seagrass. Sounds boring? Watamu Marine Park features 11 of the 12 species of seagrass found in Kenya, and they’re absolutely essential to the parc life!</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="coral"><span class="fa-li" style="color:#c500ff;"><i class="fas fa-square"></i></span>Coral</li>\
                <li class="li-hover" value="intertidal-seagrass"><span class="fa-li" style="color:#cdf57a;"><i class="fas fa-square"></i></span>Intertidal Seagrass</li>\
                <li class="li-hover" value="subtidal-seagrass"><span class="fa-li" style="color:#73b273;"><i class="fas fa-square"></i></span>Subtidal Seagrass</li>\
            </ul>\
            <img class="image-wrapper" src="https://raphaelnussbaumer.com/storytelling/assets/Intro/48287795096_23a98192c4_5k.jpg"/>\
            <p>Most of the park species need seagrass for their survival, from the smallest to the biggest. Let’s take a look! </p>\
            ',
            bbox:[[39.95001, -3.34862],[ 40.02934, -3.40282]],
            onChapterEnter: [{
                layer: 'subtidal-seagrass',
                opacity: .8
            },
            {
                layer: 'intertidal-seagrass',
                opacity: .8
            },
            {
                layer: 'coral',
                opacity: .8
            }],
            onChapterExit: [{
                layer: 'subtidal-seagrass',
                opacity: 0
            },
            {
                layer: 'intertidal-seagrass',
                opacity: 0
            },
            {
                layer: 'coral',
                opacity: 0
            }]
        },
        /*{
            id: 'depth',
            content: '\
            <h4>Depth of water</h4>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="littoral"><span class="fa-li" style="color:#734c00;"><i class="fas fa-square"></i></span>Littoral</li>\
                <li class="li-hover" value="beach"><span class="fa-li" style="color:#ffffbe;"><i class="fas fa-square"></i></span>Beach</li>\
                <li class="li-hover" value="intertidal"><span class="fa-li" style="color:#cdf57a;"><i class="fas fa-square"></i></span>Intertidal</li>\
                <li class="li-hover" value="0-2m"><span class="fa-li" style="color:#26b4ff;"><i class="fas fa-square"></i></span>0-2m</li>\
                <li class="li-hover" value="2-5m"><span class="fa-li" style="color:#0b19cd;"><i class="fas fa-square"></i></span>2-5m</li>\
                <li class="li-hover" value="5-10m"><span class="fa-li" style="color:#1c0189;"><i class="fas fa-square"></i></span>5-10m</li>\
            </ul>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 13,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [{
                    layer: '0-2m',
                    opacity: .9
                },{
                    layer: '2-5m',
                    opacity: .9
                },{
                    layer: '5-10m',
                    opacity: .9
                },{
                    layer: 'beach',
                    opacity: .9
                },{
                    layer: 'intertidal',
                    opacity: .9
                },{
                    layer: 'littoral',
                    opacity: .9
                }],
            onChapterExit: [{
                layer: '0-2m',
                opacity: 0
            },{
                layer: '2-5m',
                opacity: 0
            },{
                layer: '5-10m',
                opacity: 0
            },{
                layer: 'beach',
                opacity: 0
            },{
                layer: 'intertidal',
                opacity: 0
            },{
                layer: 'littoral',
                opacity: 0
            }]
        },*/
        {
            id: 'reserve',
            content: '\
            <h3>This is a nudibranch</h3>\
            <p>The smallest inverterbrates depend on seagrass to find shelter and food. </p>\
            <img class="image-wrapper" src="https://raphaelnussbaumer.com/storytelling/assets/Section1/nudi2.jpg"/>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 12,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            content: '<h4>The bigger species need seagrass too!</h4>\
            <p>Green turtles use seagrass to... </p>\
            <video class="image-wrapper" src="https://live.staticflickr.com/video/33547686808/59010b91d6/1080p.mp4?s=eyJpIjozMzU0NzY4NjgwOCwiZSI6MTU4NjA4MTQ0NywicyI6IjcwNDVmYzJlZjJiOWZkOTQ4YzE4OTgwMGVkMDYzMjVhYWIwN2Y3MTMiLCJ2IjoxfQ" autoplay="" loop="" muted="" playsinline=""></video>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 12.75,
                pitch: 60,
                bearing:  -32.81
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id',
            content: '<h4>All the way to the threatened guitarfish</h4>\
            <p>The critically endangered Halavi Guitarfish uses seagrass as nursery grounds. This habitat is critical for the survival of this species. We need to understand it better to protect this species.</p>\
            <img class="image-wrapper" src="https://raphaelnussbaumer.com/storytelling/assets/Section1/Halaviguitar.jpg"/>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 12.75,
                pitch: 60,
                bearing:  -32.81
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
}
