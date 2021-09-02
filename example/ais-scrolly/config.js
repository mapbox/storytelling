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
            id: '2-plannen',
            alignment: 'right',
            classes: ['box'],
            title: 'Plannen',
            image: '',
            description: 'De Noordzee speelt een belangrijke rol in de energietransitie als potentiele locatie voor diverse plannen. Sommige gebieden op zee zijn al bestemd voor specifieke activiteiten, zoals:',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'turbines-en-ohvs',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
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
            id: '3-energie',
            alignment: 'right',
            classes: ['box'],
            title: 'Energie',
            image: '',
            description: 'Locaties voor winning van windenergie en zonne-energie.',
            location: {
                center: [4.0572, 52.12677],
                zoom: 8,
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
            id: '4-zand',
            alignment: 'right',
            title: 'Zand',
            classes: ['box'],
            image: '',
            description: 'Locaties voor zandwinning',
            location: {
                center: [4.0572, 52.12677],
                zoom: 7,
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
            id: '5-kabels',
            alignment: 'right',
            title: 'Kabels en pijpleidingen',
            classes: ['box'],
            image: '',
            description: 'Routes en locaties van kabels en pijpleidingen op de zeebodem',
            location: {
                center: [4.0572, 52.12677],
                zoom: 8,
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
            id: '6-scheepvaart',
            alignment: 'right',
            title: 'Scheepvaart',
            classes: ['box'],
            image: '',
            description: 'Hoofdvaarroutes van de zeevaart',
            location: {
                center: [4.0572, 52.12677],
                zoom: 8,
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
            id: '7-plek',
            alignment: 'right',
            classes: ['box'],
            title: 'Plek',
            image: '',
            description: 'Plannen met als mogelijke locatie de Noordzee zijn de opslag van CO2 of drijvende eilanden met daarop woningen of een vliegveld. Maar is er wel plek genoeg voor deze plannen?',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '8-nieuwekaart',
            alignment: 'right',
            classes: ['box'],
            title: 'Nieuwe kaart',
            image: '',
            description: 'Onderzoekers van de <a href="https://tudelft.nl">TU Delft</a> en <a href="https://deltares.nl">Deltares</a> maken op een unieke manier de drukte op de Noordzee inzichtelijk. Hiervoor hebben ze een nieuwe gedetailleerde kaart met activiteiten van het scheepvaartverkeer ontwikkeld.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '9-ais',
            alignment: 'right',
            classes: ['box'],
            title: 'Automatisch Identificatie Systeem (AIS)',
            image: '',
            description: 'Voor de kaart wordt een dataset gebruikt met AIS gegevens, die onder andere scheepsposities, koersen en snelheden van schepen bevat. Dit systeem wordt gebruikt door schepen onderling, maar ook door verkeers- en havendiensten om de veiligheid op het water te bevorderen. <a href="https://rijkswaterstaat.nl">Rijkswaterstaat</a> deelt de data met de TU Delft voor onderzoek naar de veiligheid en een vlot verloop van het scheepvaartverkeer.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '10-datapunten',
            alignment: 'right',
            classes: ['box'],
            title: '400 miljoen datapunten',
            image: '',
            description: 'Op de kaart worden 400 miljoen datapunten weergegeven, die over een periode van vier maanden zijn verzameld. Deze enorme hoeveelheid data kon al eerder worden weergegeven, maar de rekencapaciteit beperkte de resolutie waarmee dit kon worden gedaan. Hierdoor kwam een (1) pixel in de kaart overeen met een gebied van enkele honderden meters.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '11-nieuwe-rekencapaciteit',
            alignment: 'right',
            classes: ['box'],
            title: 'Nieuwe rekencapaciteit',
            image: '',
            description: 'Onderzoekers van de TU Delft en Deltares maken nu gebruik van de <a href="https://planetarycomputer.microsoft.com/">Planetary Computer</a> van <a href="https://www.microsoft.com/">Microsoft</a>, die globale datasets en rekencapaciteit bevat om wereldwijde duurzaamheid te bevorderen. Daarmee kan de AIS dataset tot in detail – resolutie van enkele meters per pixel – op de kaart worden gevisualiseerd.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '12-betere-inzichten-1',
            alignment: 'right',
            classes: ['box'],
            title: 'Betere inzichten',
            image: '',
            description: 'Door deze nieuwe visualisatie is op grote schaal te zien welke ruimte al wordt gebruikt…',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '13-betere-inzichten-2',
            alignment: 'right',
            classes: ['box'],
            title: 'Betere inzichten',
            image: '',
            description: '… en kun je door in te zoomen grote mate van detail zien, en daarmee een beeld krijgen van het soort activiteiten dat op zee plaatsvindt.',
            location: {
                center: [4.37805, 52.55132],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '14-ankerplaatsen',
            alignment: 'right',
            classes: ['box'],
            title: 'Ankerplaatsen',
            image: '',
            description: 'Op de ankerplaatsen liggen schepen te wachten tot ze de haven in kunnen.',
            location: {
                center: [3.82969, 51.96148],
                zoom: 9.3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '15-suppleties',
            alignment: 'right',
            classes: ['box'],
            title: 'Suppleties',
            image: '',
            description: 'Een baggerschip is bezig zand te winnen op zee en dit vervolgens bij de kust op te spuiten.',
            location: {
                center: [4.56662, 52.68736],
                zoom: 12.02,
                pitch: 70.00,
                bearing: -77.60
            },
            onChapterEnter: [
                {
                    layer: 'egmond',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'egmond',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '16-windmolenparken',
            alignment: 'right',
            classes: ['box'],
            title: 'Windmolenparken',
            image: '',
            description: 'Bij de bouw en het onderhoud van windmolenparken op zee varen werkschepen heen en weer naar de kust.',
            location: {
                center: [4.40978, 52.54343],
                zoom: 10.4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '17-amsterdam',
            alignment: 'right',
            classes: ['box'],
            title: 'Amsterdam',
            image: '',
            description: 'Zelfs het scheepvaartverkeer op het IJ en de grachten is te herkennen, zoals de veerboten die het IJ oversteken.',
            location: {
                center: [4.90201, 52.37914],
                zoom: 11.46,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '18-veerboot',
            alignment: 'right',
            classes: ['box'],
            title: 'Veerboot IJmuiden-Newcastle',
            image: '',
            description: 'De ferry tussen IJmuiden en Newcastle vaart steevast dezelfde route.',
            location: {
                center: [4.49572, 52.48981],
                zoom: 10.87,
                pitch: 60.00,
                bearing: -50.40
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '19-geulen',
            alignment: 'right',
            classes: ['box'],
            title: 'Geulen',
            image: '',
            description: 'Op de Waddenzee is te zien hoe de schepen de geulen volgen. Ook hier zijn baggerwerkzaamheden te zien tussen Terschelling en Ameland.',
            location: {
                center: [5.48715, 53.24528],
                zoom: 9.13,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '20-sluis-intensiteit',
            alignment: 'right',
            classes: ['box'],
            title: 'Krammersluizen',
            image: '',
            description: 'Bij de sluizen is te zien dat schepen stilliggen in de kolken en bij de wachtplaatsen. Bovenin zijn de (kleinere) jachtensluizen en onderin zijn de sluizen voor de beroepsvaart te herkennen.',
            location: {
                center: [4.16058, 51.65794],
                zoom: 12.16,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '21-sluis-snelheid',
            alignment: 'right',
            classes: ['box'],
            title: 'Krammersluizen',
            image: '',
            description: 'Door naar de scheepssnelheden te kijken is goed te zien hoe de schepen afremmen voor de sluis en als ze uit de sluis komen weer versnellen, en naar de rechterkant van de vaarweg bewegen.',
            location: {
                center: [4.16058, 51.65794],
                zoom: 12.16,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '22-sluis-emissies',
            alignment: 'right',
            classes: ['box'],
            title: 'Krammersluizen',
            image: '',
            description: 'De dataset kan ook gebruikt worden als basis van een berekening om een inschatting te geven van de emissies van de scheepvaart, bijvoorbeeld CO2 uitstoot. ',
            location: {
                center: [4.16058, 51.65794],
                zoom: 12.16,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '23-uitdagingen',
            alignment: 'right',
            classes: ['box'],
            title: 'Uitdagingen',
            image: '',
            description: 'De energietransitie vraagt om nieuwe oplossingen, maar ook ruimte om die te realiseren. De visualisatie biedt inzicht in het ruimtegebruik op zee. Daarnaast wordt deze kennis gebruikt in modellen, zodat er voorspellingen gedaan kunnen worden van wat er verandert als bepaalde plannen worden uitgevoerd.  Op deze manier kunnen we beter antwoord geven op de vraag of er genoeg ruimte is voor toekomstplannen op zee.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.0,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};
