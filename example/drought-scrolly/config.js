var config = {
    style: 'mapbox://styles/siggyf/cld8o2gqx002r01qovvuc72q2',
    accessToken: 'pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA',
    showMarkers: false,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '1-lente',
            alignment: 'right',
            classes: ['box'],
            title: 'Lente',
            image: '',
            description: 'Het jaar 2022 was droog. Maar waarom was het droog? De droogte begon al in de lente. Er lag weinig sneeuw in de alpen. In het rode gebied lag tot 40cm minder sneeuw dan gemiddeld in de voorgaande 30 jaar.',
            location: {
                center: [8, 48],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2-lobith',
            alignment: 'right',
            classes: ['box'],
            title: 'Lobith',
            image: 'images/figures/lobith.png',
            description: 'Doordat er weinig water beschikbaar kwam daalde de afvoer bij Lobith. De afvoer daalde in 2022 tot 679 m3/s, de laagste stand in de 21e eeuw.',
            location: {
                center: [6.087122, 51.8514114],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2a-lobith',
            alignment: 'right',
            classes: ['box'],
            title: 'Afvoermetingen',
            image: 'https://maps.rijkswaterstaat.nl/ExterneDocumentenBasis/NAP/NAPfotos/000A/000A4058-1.JPG',
            description: 'De afvoer wordt gemeten in het peilstation bij Lobith. In dit centrale referentiestation worden afvoer (m3/s) en waterstanden (m t.o.v. NAP) gemeten.',
            location: {
                center: [6.087122, 51.8514114],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4-nijmegen',
            alignment: 'right',
            title: 'Laagste afvoer',
            classes: ['box'],
            image: 'images/droogte.jpg',
            description: 'De laagste afvoer ooit gemeten bij Lobith was in 1929 (575m3/s).  Dit is een beeld uit van de situatie toen (src: Regionaal Archief Nijmegen). Toen was er ook weinig water, maar niet omdat het verdampte, maar omdat het bevroor.',
            location: {
                center: [5.87332, 51.85232],
                zoom: 14.7,
                pitch: 40.00,
                bearing: -109
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: '5-ivs',
            alignment: 'right',
            classes: ['box'],
            title: 'Goederen',
            image: 'images/figures/ivs-trends2.png',
            description: 'Doordat er beperkte waterdiepte beschikbaar was op de route naar Duitsland, konden schepen minder vracht meenemen. Daardoor waren er ruim 2x meer trips per week nodig om dezelfde hoeveelheid lading van Rotterdam naar Duitsland te vervoeren.',
            location: {
                center: [5.32039, 51.57223],
                zoom: 7.83,
                pitch: 67.38,
                bearing: 129.05
            },
            onChapterEnter: [
                {
                    layer: 'ivs',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'ivs',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '5a-ivs',
            alignment: 'right',
            classes: ['box'],
            title: 'Twente wordt vermeden',
            image: 'images/figures/lochem.png',
            description: 'De IJssel was maar via één richting bevaarbaar. Er dreigde een sluiting van het Twentekanaal. Daarom stokte de aanvoer van goederen naar Twente.',
            location: {
                center: [6.19130, 52.16698],
                zoom: 12.17,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ivs',
                    opacity: 0.8
                },
                {
                    layer: 'twentekanaal',
                    opacity: 0.8
                }

            ],
            onChapterExit: [
                {
                    layer: 'ivs',
                    opacity: 0.0
                },
                {
                    layer: 'twentekanaal',
                    opacity: 0.0
                }
            ]
        },

        {
            id: '6a-ais',
            alignment: 'right',
            title: 'Krapte op de Rijn',
            classes: ['box'],
            image: '',
            description: 'Doordat de waterstand daalde werd de rivier smaller. Tegelijk was er meer verkeer. Vooral bij de bocht bij Nijmegen was het krap. Dit is de normale situatie.',
            location: {
                center: [5.86498, 51.85151],
                zoom: 15.39,
                pitch: 72.37,
                bearing: -69.59
            },
            onChapterEnter: [
                {
                    layer: 'nijmegen-2022-w18',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'nijmegen-2022-w18',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '6b-ais',
            alignment: 'right',
            title: 'Krapte op de Rijn',
            classes: ['box'],
            image: '',
            description: 'Dit is de situatie tijdens de droogte. De vaarweg is smaller en de schepen varen langzamer door de bocht bij Nijmegen.',
            location: {
                center: [5.86498, 51.85151],
                zoom: 15.39,
                pitch: 72.37,
                bearing: -69.59
            },
            onChapterEnter: [
                {
                    layer: 'nijmegen-2022-w34',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'nijmegen-2022-w34',
                    opacity: 0
                }
            ]
        },
        {
            id: '7-wachtrij',
            alignment: 'right',
            title: 'Wachtrij bij Grave',
            classes: ['box'],
            image: '',
            description: 'De sluis bij Weurt was gestremd. Schepen konden omvaren via de Maas. Daardoor was er grote drukte bij de sluis bij Grave.',
            location: {
                center: [5.73522, 51.76946],
                zoom: 14.73,
                pitch: 54.41,
                bearing: 59.13
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '8-zout',
            alignment: 'right',
            title: 'Zout bij IJmuiden',
            classes: ['box'],
            image: 'images/figures/salt.png',
            description: 'De nieuwe sluis bij IJmuiden werd beperkt geschut. Hierdoor werd 180kg per seconde aan zout tegengehouden.',
            location: {
                center: [4.58820, 52.46752],
                zoom: 12.88,
                pitch: 66.50,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
    ]
};
