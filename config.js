var config = {
    style: 'mapbox://styles/rafnuss/ck8nane0n0zb51imkm23wo4sg',
    accessToken: 'pk.eyJ1IjoicmFmbnVzcyIsImEiOiIzMVE1dnc0In0.3FNMKIlQ_afYktqki-6m0g',
    /*showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'A STORY OF SEA GRASS',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a A Rocha Kenya',
    footer: 'Source: source citations, etc.',*/
    chapters: [
        {
            id: 'intro-empty',
            content: '',
            location: {
                center: [39.98451, -3.37994],
                zoom: 1,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chap1',
            content: '<h3>Chapter 1: Intro</h3>\
            <p>This is jkdl sdéi ewfjio dnfjsja nrgudnas dghjdg.</p>\
            <p>nsdjgjlkls dfsnguiodf k,.</p>',
            location: {
                center: [39.98451, -3.37994],
                zoom: 5,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'full-reserve',
            content: '<h4>Watamu Marine Reserve </h4>',
            location: {
                center: [39.99527, -3.32961],
                zoom: 10,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'full-park',
            content: '\
            <h4>Watamu Marine Park </h4>\
            <p>Established 52 years ago, WMP is one of Kenya’s first marine parks, and is home to over 600 species of fish, </p> \
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 13,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
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
        },
        {
            id: 'coral',
            content: '\
            <h4>Coral Reef</h4>\
            <p>When we think of a marine park, we tend to think of a coral reef... And there is one! That’s where most people tend to go snorkeling. </p>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 15,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
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
        },
        {
            id: 'seagrass',
            content: '\
            <p>Most of it is covered with seagrass. Sounds boring? </p>\
            <p>Seagrass is actually a rich part of the parc, and WMP includes 11 of the 12 species of seagrass found in Kenya!</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" id="coral"><span class="fa-li" style="color:#c500ff;"><i class="fas fa-square"></i></span>Coral</li>\
                <li class="li-hover" id="intertidal-seagrass"><span class="fa-li" style="color:#cdf57a;"><i class="fas fa-square"></i></span>Intertidal Seagrass</li>\
                <li class="li-hover" id="subtidal-seagrass"><span class="fa-li" style="color:#73b273;"><i class="fas fa-square"></i></span>Subtidal Seagrass</li>\
            </ul>\
            <p>Let’s take a closer look. </p>\
            ',
            location: {
                center: [39.98451, -3.37994],
                zoom: 12,
                pitch: 0,
                bearing:  0
            },
            onChapterEnter: [{
                layer: 'subtidal-seagrass',
                opacity: .9
            },
            {
                layer: 'intertidal-seagrass',
                opacity: .9
            },
            {
                layer: 'coral',
                opacity: .9
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
        {
            id: 'depth',
            content: '\
            <h4>Depth of water</h4>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" id="littoral"><span class="fa-li" style="color:#734c00;"><i class="fas fa-square"></i></span>Littoral</li>\
                <li class="li-hover" id="beach"><span class="fa-li" style="color:#ffffbe;"><i class="fas fa-square"></i></span>Beach</li>\
                <li class="li-hover" id="intertidal"><span class="fa-li" style="color:#cdf57a;"><i class="fas fa-square"></i></span>Intertidal</li>\
                <li class="li-hover" id="0-2m"><span class="fa-li" style="color:#26b4ff;"><i class="fas fa-square"></i></span>0-2m</li>\
                <li class="li-hover" id="2-5m"><span class="fa-li" style="color:#0b19cd;"><i class="fas fa-square"></i></span>2-5m</li>\
                <li class="li-hover" id="5-10m"><span class="fa-li" style="color:#1c0189;"><i class="fas fa-square"></i></span>5-10m</li>\
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
        },
        {
            id: 'reserve',
            content: '\
            <h4>UNE DKEL SJOIFL</h4>\
            <video class="image-wrapper" src="https://live.staticflickr.com/video/33547686808/59010b91d6/1080p.mp4?s=eyJpIjozMzU0NzY4NjgwOCwiZSI6MTU4NjA4MTQ0NywicyI6IjcwNDVmYzJlZjJiOWZkOTQ4YzE4OTgwMGVkMDYzMjVhYWIwN2Y3MTMiLCJ2IjoxfQ" autoplay="" loop="" muted="" playsinline=""></video>\
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
            content: '<h4>UNE DKEL SJOIFL</h4>',
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
};
