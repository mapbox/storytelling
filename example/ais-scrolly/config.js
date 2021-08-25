var config = {
    style: 'mapbox://styles/siggyf/cksg8lxjj0llh17s3ocdfw6k3',
    accessToken: 'pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA',
    showMarkers: false,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'plannen',
            alignment: 'right',
            classes: ['box'],
            title: 'Plannen',
            image: '',
            description: 'De Noordzee speelt een belangrijke rol in de energietransitie als potentiele locatie voor diverse plannen, zoals:',
            location: {
                center: [4.0572, 52.12677],
                zoom: 6.78,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'turbines-en-ohvs',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'turbines-en-ohvs',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'turbines',
            alignment: 'right',
            classes: ['box'],
            title: 'Wind op zee',
            image: '',
            description: 'Locatie voor windenergie en zonne-energie.',
            location: {
                center: [4.0572, 52.12677],
                zoom: 7.78,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'turbines-en-ohvs',
                    opacity: 0.8
                },
                {
                    layer: 'vergunde-windparken',
                    opacity: 0.8
                },
                {
                    layer: 'aangewezen-windenergie',
                    opacity: 0.4
                }
            ],
            onChapterExit: [
                {
                    layer: 'turbines-en-ohvs',
                    opacity: 0
                },
                {
                    layer: 'vergunde-windparken',
                    opacity: 0
                },
                {
                    layer: 'aangewezen-windenergie',
                    opacity: 0
                }
            ]
        },
        {
            id: 'zand',
            alignment: 'right',
            title: 'Zand',
            classes: ['box'],
            image: '',
            description: 'Locaties voor zandwinning',
            location: {
                center: [4.0572, 52.12677],
                zoom: 6.78,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'zandwingebieden-vergund',
                    opacity: 0.8
                },
                {
                    layer: 'zandwingebieden-mer',
                    opacity: 0.4
                }
            ],
            onChapterExit: [
                {
                    layer: 'zandwingebieden-vergund',
                    opacity: 0
                },
                {
                    layer: 'zandwingebieden-mer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            classes: ['box'],
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [4.0572, 52.12677],
                zoom: 7.78,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'Wissahickon Park Trails',
            classes: ['box'],
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [4.0572, 52.12677],
                zoom: 6.78,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'right',
            title: 'Pennypack Park Trails',
            classes: ['box'],
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [4.0572, 52.12677],
                zoom: 7.78,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
