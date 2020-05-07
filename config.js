var config = {
    style: 'mapbox://styles/rafnuss/ck95nlk5v4c3f1js9cy015v0u',
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
            <p>About 8% of the Kenya’s land mass is protected for wildlife conservation. For many of us, Kenya is the land of safaris, lions, giraffes and elephants. Few of us think oOut of the 61 parks and reserves in the country: 10 are marine <img class="svg-txt" data-src="https://raphaelnussbaumer.com/storytelling/assets/aquarium-15_blue.svg"> while 51 are terrestrial <img class="svg-txt" data-src="https://raphaelnussbaumer.com/storytelling/assets/park-15.svg">. </p>\
            <p>Established 52 years ago, <b>Watamu Marine Park and Reserve</b> is one of Kenya’s first marine parks.</p>\
           <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/intro/18931295584_77ad5acf0e_k.jpg"/>\
           <p class="caption">Jaap Gijsbersten</p>\
           ',
           bbox : [[38.01216, -0.52813],[ 41.63761, -5.65162 ]],
            onChapterEnter: [{
                layer: 'landuse-overlay',
                opacity: .7
            },{
                layer: 'poi-label',
                opacity: 1
            },{
                layer: 'marineplace',
                opacity: 1
            },{
                layer: 'reserve-boundary',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'landuse-overlay',
                opacity: 0
            },{
                layer: 'poi-label',
                opacity: 0
            },{
                layer: 'marineplace',
                opacity: 0
            },{
                layer: 'reserve-boundary',
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
            <h4>Watamu Marine Park: a biodiversity hotspot</h4>\
            <p>The Malindi-Watamu Reserve includes two no-take national parks: one in Malindi, and the other in Watamu.</p>\
            <p>In just 10km<sup>2</sup>, the Watamu Marine Park is home to over 600 species of fish, over 150 species of soft and hard corals, 9 species of marine mammals, sharks, rays, and countless nudibranches and invertebrates. \
            In total, 18 species are of conservation concern according to the IUCN Red List.</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/section1/dolphins.jpg"/>\
            ',
            bbox:[[39.89901, -3.25715],[40.22991, -3.41009]],
            onChapterEnter: [{
                layer: 'park-boundary',
                opacity: 1
            },{
                layer: 'reserve-boundary',
                opacity: 0.2
            }],
            onChapterExit: [{
                layer: 'park-boundary',
                opacity: 0
            },{
                layer: 'reserve-boundary',
                opacity: 0
            }]
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
            <p>A marine park conjures up images of coral reefs. And there is one in Watamu!</p>\
            <p>The reef provides important habitat and nutrients for a high number of species.</p>\
            <p>But it represents only a very small portion of the park.</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="coral"><span class="fa-li" style="color:#c500ff;"><i class="fas fa-square"></i></span>Coral</li>\
            </ul>\
            <img class="image-wrapper" data-src="./assets/intro/Toby_Hudson.jpg"/>\
            <p class="caption">Toby Hudson, Flynn Reef</p>\
            ',
            bbox:[[39.95001, -3.34862],[ 40.02934, -3.40282]],
            onChapterEnter: [{
                layer: 'coral',
                opacity: .9
            }],
            onChapterExit: [{
                layer: 'coral',
                opacity: 0
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
                <p>40% of the park is covered in seagrass. Sounds boring? Watamu Marine Park features 11 of the 12 species of seagrass found in Kenya, one of which is listed as Vulnerable by the IUCN Red List.</p>\
                <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/Seagrass%20Dimitris%20Poursanidis/48287898577_0b61f7f3ce_k.jpg"/>\
            <p class="caption">Dimitris Poursanidis/GRID-Arendal</p>\
                <p>Seagrass provide many ecological services to the Park fauna and flora: carbon storage, feeding grounds, habitat and nursery areas for many species.</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="coral"><span class="fa-li" style="color:#c500ff;"><i class="fas fa-square"></i></span>Coral</li>\
                <li class="li-hover" value="intertidal-seagrass"><span class="fa-li" style="color:#cdf57a;"><i class="fas fa-square"></i></span>Intertidal Seagrass</li>\
                <li class="li-hover" value="subtidal-seagrass"><span class="fa-li" style="color:#73b273;"><i class="fas fa-square"></i></span>Subtidal Seagrass</li>\
            </ul>\
            <p>Most species in the Park rely on seagrass for their survival, from the smallest to the biggest. Let’s take a look! </p>\
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
            <h3>Echinoderms rely on seagrass to hide and feed</h3>\
            <p>Echinoderms group all the invertebrate marine organisms (sea urchins, starfish, cucumbers, etc.).</p>\
            <p>They form almost 90% of marine wildlife, and play a key ecological role in ecosystems: they regulate populations, clean the sand and ocean, and provide oxygen to the environment. </p>\
            <p>Seagrass is one of their main habitats, where they like to hide and feed. </p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/section1/Protoreaster-lincki-Bobby-Sluka_small.png"/>\
            <p class="caption">Red-knobbed Starfish, Bob Sluka</p>\
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
            content: '<h4>Turtles graze and breed in seagrass</h4>\
            <p>Seagrass and sea turtles are highly interdependent.</p>\
            <p>While turtles graze the seagrass for feeding, they regulate their overgrowth and increase the productivity and nutrient content of seagrass blades.</p>\
            <video class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/Seagrass%20Dimitris%20Poursanidis/1080p.mp4" autoplay="" loop="" muted="" playsinline=""></video>\
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
            <p>The critically endangered Halavi Guitarfish uses seagrass as nursery grounds. This habitat is absolutely critical for the survival of this species, and others in this family.</p>\
            <p>We need to understand seagrass better to protect this species more effectively.</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/section1/Guitarfish_small.png"/>\
            <p class="caption">Halavi Guitarfish, A Rocha International</p>\
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
        },       {
            id: 'slug-style-id',
            content: '<h4>This seagrass is under threat</h4>\
            <p>Seagrasses have been disappearing at a rate of 110 km2/yr since 1980 (Waycott et al, 2009). Close to a third of the known areal extent has disappeared since seagrass areas were initially recorded in 1879. Even more alarmingly, the rates of decline have accelerated since 1990.</p>\
            <p>Seagrass loss rates are now comparable to those reported for mangroves, coral reefs, and tropical rainforests and place seagrass meadows among the most threatened ecosystems on earth.</p>\
            <p>But what could possibly threaten grass, you may ask?</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/Seagrass%20Dimitris%20Poursanidis/48287799826_937e033e43_c.jpg"/>\
            <p class="caption">Dimitris Poursanidis/GRID-Arendal</p>\
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
        }, {
            id: 'slug-style-id',
            content: '<h4>Danger#1: human constructions</h4>\
            <p>Since the first hotel built in 1951, the coast of Watamu has gradually been built up, and is now a top-ranked beach destination in Africa.</p>\
            <p>This coastal development has adverse effects on shallow seagrasses.</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/intro/Close_up_seagrass.jpg"/>\
            <p class="caption">Find photo of coastline</p>\
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
        },{
            id: 'slug-style-id',
            content: '<h4>Danger#2: Sedimentation in Sabaki</h4>\
            <p>30km north of Watamu Marine Park is Sabaki River Mouth, where illegal sand mining is common practice. </p>\
            <p>The ensuing sediment washed into the water damages seagrass beds by both smothering the seagrass and blocking sunlight.</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/section2/sand-mining.png"/>\
            <p class="caption">Sand mining</p>\
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
        },{
            id: 'slug-style-id',
            content: '<h4>Danger#3: Climate change</h4>\
            <p>About 80% of the excessive heat from climate change is absorbed by the ocean (Duarte et al. 2018). As a result, the ocean is the warmest it has ever been. Not only this, but climate change also comes with ocean acidification and more frequent weather events. </p>\
            <p>This adversely impacts seagrass seedling mortality and may alter seagrass feeding dynamics, offsetting the fine ecological balance of this ecosystem.</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/section2/annual_global_sea_surface_temperature_anomalies_from_1880_to_2015_0.png"/>\
            <p class="caption">Rise in Ocean Temperature, IUCN</p>\
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
        },{
            id: 'slug-style-id',
            content: '<h4>What can we do?</h4>\
            <p>At A Rocha Kenya, we monitor seagrass presence in the park, to better understand this habitat. </p>\
            <p>We regularly survey what seagrass is present along transects in various places of the park and have developed a seagrass identification guide, to help partners, citizen scientists and researchers join in the process.</p>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/Seagrass%20Dimitris%20Poursanidis/Seagrass_3_Photo_by_Dimitris_Poursanidis_GRID-Arendal.jpg_resized.jpg"/>\
            <p class="caption">Dimitris Poursanidis/GRID-Arendal</p>\
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
        },{
            id: 'slug-style-id',
            content: '<h4>How about you?</h4>\
            <img class="image-wrapper" data-src="https://raphaelnussbaumer.com/storytelling/assets/Seagrass%20Dimitris%20Poursanidis/48287804936_762e651a69_c.jpg"/>\
            <p class="caption">Dimitris Poursanidis/GRID-Arendal</p>\
            <p>How can you help save the seagrass?</p>\
            <p>Be a responsible tourist</p>\
            <p>Limit your carbon impact</p>\
            <p>Come volunteer with us!</p>\
            <p>Share this story, tell your friends! </p>\
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
