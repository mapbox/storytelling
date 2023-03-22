var config = {
    style: 'mapbox://styles/elijah-messmer/clfh50gc3008e01t504qj16d7',
    accessToken: 'pk.eyJ1IjoiZWxpamFoLW1lc3NtZXIiLCJhIjoiY2xmYWNkMnFnMDRiZTNwcGJsM2J0ZjRpeCJ9.srDYVTRF4yqQ9QIz5b3EvA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'buffer',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rj-legislation',
                    opacity: 0,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            description: 'Restorative justice laws and organizations have expanded significantly over the last 10 years, but access is far from equal.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rj-legislation',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation',
                    opacity: 0.0,
                    duration: 2000
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            description: "Just eight states have passed over <b>half</b> of the country's restorative justice laws. The bottom half of states have three or less of these laws.",
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rj-legislation-top8',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation-top8',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: 'Such laws are aimed heavily at minors, with relatively fewer restorative justice laws being passed for adult offenders throughout much of the country.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rj-organizations',
                    opacity: 0.0,
                    duration: 2000
                },
                {
                    layer: 'rj-legislation-adult',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation-adult',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Alongside legislation, dozens of private and public organizations across the country are practicing restorative justice. From official court programs to informal community groups, these organizations can vary significantly in their exact approach to restorative justice.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'tooltips',
            onChapterEnter: [
                {
                    layer: 'rj-organizations',
                    opacity: .7,
                    duration: 2000
                },
                {
                    layer: 'rj-legislation',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Vermont has one of the most comprehensive restorative justice systems in the country. The state has passed 19 restorative justice laws and created a robust network of Community Justice Centers throughout the state.',
            location: {
                center: [-72.52382, 43.73300],
                zoom: 8.36,
                pitch: 45.00,
                bearing: -31.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Researchers studying the state&#39;s restorative <a href="https://doc.vermont.gov/sites/correct/files/documents/Restorative_Justice/CJC/CoSA%20in%20Vermont.pdf">CoSA program</a>, Circles of Support and Accountability, found that reconviction rates were <b>11%</b> lower among CoSA participants compared to non-CoSA offenders. The impact was greater for more serious crimes, with felony reconviction rates <b>17%</b> lower for CoSA participants.',
            location: {
                center: [-72.52382, 43.73300],
                zoom: 8.36,
                pitch: 45.00,
                bearing: -31.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'But even in a state like Colorado, which has passed more restorative justice laws than any other state in the country, the reality of implementing a new system is far from perfect.',
            location: {
                center: [-105.54100, 38.64783],
                zoom: 7.03,
                pitch: 45.00,
                bearing: -18.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            // image: './path/to/image/source.png',
            description: '“Colorado state law allows for police officers to make an ad hoc decision in the field essentially as [whether] to refer youth to restorative justice,” González said. “That&#39;s problematic because you can think about coercion, you can think about bias, right. All of the things that exist. And [restorative justice] becomes a co-optation within a state framework that really perpetuates structural discrimination, but with a nicer label to it.”',
            location: {
                center: [-105.54100, 38.64783],
                zoom: 7.03,
                pitch: 45.00,
                bearing: -18.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

// /* 
// Add an event listener that runs
//   when a user clicks on the map element.
// */
// function tooltips() {
//     map.on('mouseOver', (event) => {
//     // If the user clicked on one of your markers, get its information.
//     const features = map.queryRenderedFeatures(event.point, {
//       layers: ['rj-organizations'] // replace with your layer name
//     });
//     if (!features.length) {
//       return;
//     }
//     const feature = features[0];
  
//     const popup = new mapboxgl.Popup({ offset: [0, -15] })
//     .setLngLat(feature.geometry.coordinates)
//     .setHTML(`<h3>${feature.properties.name}</h3><p>${feature.properties.description}</p>`
//   )
//   .addTo(map);
//   })};