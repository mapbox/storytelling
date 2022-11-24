var config = {
    style: 'mapbox://styles/siggyf/ckt2uvkxa0tof18p70ufxm6cm',
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
            description: 'Het jaar 2022 was droog. Maar waarom was het droog? De droogte begon al in de lente. Er lag weinig sneeuw in de alpen. ',
            location: {
                center: [8, 48],
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
            id: '2-lobith',
            alignment: 'right',
            classes: ['box'],
            title: 'Lobith',
            image: 'https://maps.rijkswaterstaat.nl/ExterneDocumentenBasis/NAP/NAPfotos/000A/000A4058-1.JPG',
            description: 'Doordat er weinig water beschikbaar kwam daalde de afvoer bij Lobith. De afvoer daalde tot xx m3/s',
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
            description: 'Dit is een beeld uit 1929 (src: Regionaal Archief Nijmegen). Toen was de laagste afvoer ooit gemeten. Toen was er ook weinig water, maar niet omdat het verdampte, maar omdat het bevroor.',
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
            id: '5-goederen',
            alignment: 'right',
            title: 'Meer trips, minder lading',
            classes: ['box'],
            image: '',
            description: 'Minder lading per schip',
            location: {
				center: [4.44989, 51.91850],
				zoom: 11.05,
				pitch: 63.50,
				bearing: -57.60
            },
            onChapterEnter: [
                {
                    layer: 'kabels-leidingen',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'kabels-leidingen',
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
                center: [4.5572, 52.72677],
                zoom: 7.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'scheepvaart',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'scheepvaart',
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
                {
                    layer: 'turbines-en-ohvs',
                    opacity: 1
                },
                {
                    layer: 'studiegebieden',
                    opacity: 1
                },
                {
                    layer: 'vergunde-windparken',
                    opacity: 1
                },
                {
                    layer: 'defensie-belangengebieden',
                    opacity: 1
                },
                {
                    layer: 'natura2000-noordzee',
                    opacity: 1
                },
                {
                    layer: 'kabels-leidingen',
                    opacity: 1
                },
                {
                    layer: 'scheepvaart',
                    opacity: 1
                },
                {
                    layer: 'zandwingebieden-mer',
                    opacity: 1
                },
                {
                    layer: 'zandwingebieden-vergund',
                    opacity: 1
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'turbines-en-ohvs',
                    opacity: 0
                },
                {
                    layer: 'studiegebieden',
                    opacity: 0
                },
                {
                    layer: 'vergunde-windparken',
                    opacity: 0
                },
                {
                    layer: 'defensie-belangengebieden',
                    opacity: 0
                },
                {
                    layer: 'natura2000-noordzee',
                    opacity: 0
                },
                {
                    layer: 'kabels-leidingen',
                    opacity: 0
                },
                {
                    layer: 'scheepvaart',
                    opacity: 0
                },
                {
                    layer: 'zandwingebieden-mer',
                    opacity: 0
                },
                {
                    layer: 'zandwingebieden-vergund',
                    opacity: 0
                }
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
                {
                    layer: 'heatmap',
                    opacity: 0.8
                }
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
                {
                    layer: 'heatmap',
                    opacity: 0.8
                },
                {
                    layer: 'nl-grof',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '10-datapunten',
            alignment: 'right',
            classes: ['box'],
            title: '4 miljard datapunten',
            image: '',
            description: 'Op de kaart worden 4 miljard datapunten weergegeven, die over een periode van vier maanden zijn verzameld. Deze enorme hoeveelheid data kon al eerder worden weergegeven, maar de rekencapaciteit beperkte de resolutie waarmee dit kon worden gedaan, zoals op deze kaart te zien is.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'nl-grof',
                    opacity: 0.8
                }
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
            description: 'Om de kaart te maken is nu gebruik gemaakt van de <a href="https://planetarycomputer.microsoft.com/">Planetary Computer</a> van <a href="https://www.microsoft.com/">Microsoft</a>, die globale datasets en rekencapaciteit bevat om wereldwijde duurzaamheid te bevorderen. Daarmee kan de AIS dataset tot in detail – resolutie van enkele meters per pixel – op de kaart worden gevisualiseerd.',
            location: {
                center: [4.38150, 52.42770],
                zoom: 7.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'nl-grof',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 1
                }
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
            description: 'Door deze nieuwe visualisatie is op grote schaal te zien welke ruimte al wordt gebruikt. Door in te zoomen kun je grote mate van detail zien, en daarmee een beeld krijgen van het soort activiteiten dat op zee plaatsvindt.',
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
            id: '14a-anker-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Ankerplaatsen',
            image: '',
            description: '',
            location: {
                center: [3.85150, 51.88770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [4.14969, 51.74148]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Ankeren@2x.png"
                }
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
                zoom: 9.6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '15a-bagger-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Suppleties',
            image: '',
            description: '',
            location: {
                center: [4.55150, 52.38770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [4.84662, 52.49736]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Baggerboot@2x.png"
                }
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
            description: 'Deze animatie toont hoe een baggerschip bezig is om zand te winnen op zee en dit vervolgens bij de kust op te spuiten.',
            location: {
                center: [4.56662, 52.65736],
                zoom: 12.02,
                pitch: 70.00,
                bearing: -77.60
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'baggeren',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 1
                },
                {
                    layer: 'baggeren',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '16a-windmolen-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Windmolenparken',
            image: '',
            description: '',
            location: {
                center: [4.55150, 52.38770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [4.79978, 52.42343]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Windmolenpark@2x.png"
                }
            },
            onChapterEnter: [
            ],
            onChapterExit: [
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
                center: [4.34978, 52.58343],
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
            id: '17a-ams-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Amsterdam',
            image: '',
            description: '',
            location: {
                center: [5.00150, 52.18770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [5.25201, 52.18914]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Amsterdam@2x.png"
                }
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
                center: [4.88201, 52.38914],
                zoom: 12.4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'ams-intensiteit',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.8
                },
                {
                    layer: 'ams-intensiteit',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '18a-veerboot-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Veerboot IJmuiden-Newcastle',
            image: '',
            description: '',
            location: {
                center: [4.10150, 52.38770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [4.65978, 52.42343]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Ferry@2x.png"
                }
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
                center: [4.35792, 52.47214],
                zoom: 10.88,
                pitch: 58.5,
                bearing: -50
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'ferry',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.8
                },
                {
                    layer: 'ferry',
                    opacity: 0
                }
            ]
        },
        {
            id: '18a-loods-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Loodsen Haven van Rotterdam',
            image: '',
            description: '',
            location: {
                center: [3.85150, 52.08770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [4.24969, 51.84148]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Loods@2x.png"
                }
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '18-loods',
            alignment: 'right',
            classes: ['box'],
            title: 'Loodsen Haven van Rotterdam',
            image: '',
            description: 'De loodsen wachten schepen op voor de haveningang.',
            location: {
                center: [4.03046, 51.99781],
                zoom: 11.19,
                pitch: 58.00,
                bearing: -58.32
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'scheepvaart',
                    opacity: 1
                },
                {
                    layer: 'loodsen',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.8
                },
                {
                    layer: 'scheepvaart',
                    opacity: 0
                },
                {
                    layer: 'loodsen',
                    opacity: 0
                }
            ]
        },
        {
            id: '19a-geulen-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Geulen op de Waddenzee',
            image: '',
            description: '',
            location: {
                center: [6.20150, 52.28770],
                zoom: 7.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [5.9500, 53.0]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Geul Ameland@2x.png"
                }
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
            title: 'Geulen op de Waddenzee',
            image: '',
            description: 'Op de Waddenzee is te zien hoe de schepen de geulen volgen. Ook hier zijn baggerwerkzaamheden te zien tussen Terschelling en Ameland.',
            location: {
                center: [5.48715, 53.24528],
                zoom: 9.13,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'wadden',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'wadden',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '20a-sluis-marker',
            alignment: 'right',
            classes: ['box'],
            title: 'Krammersluizen',
            image: '',
            description: '',
            location: {
                center: [3.85150, 51.78770],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            marker: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [4.51969, 51.47425]
                },
                properties: {
                    iconSize: [400, 332],
                    image: "images/icons/PNG_v2/Krammersluis@2x.png"
                }
            },
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.8
                }
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
                center: [4.17058, 51.65794],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'sluis-intensiteit',
                    opacity: 0.8
                },
                {
                    layer: 'heatmap',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'sluis-intensiteit',
                    opacity: 0.0
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ]
        },
        {
            id: '21-sluis-snelheid',
            alignment: 'right',
            classes: ['box'],
            title: 'Krammersluizen',
            image: '',
            description: 'Door naar de scheepssnelheden te kijken is goed te zien hoe de schepen vaart minderen voor de sluis en als ze uit de sluis komen weer versnellen, en naar de rechterkant van de vaarweg bewegen.',
            location: {
                center: [4.17058, 51.65794],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'sluis-snelheid',
                    opacity: 0.8
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'sluis-snelheid',
                    opacity: 0.0
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ]
        },
        {
            id: '22-sluis-emissies',
            alignment: 'right',
            classes: ['box'],
            title: 'Krammersluizen',
            image: '',
            description: 'De dataset kan ook gebruikt worden als basis van een berekening om een inschatting te geven van de emissies van de scheepvaart, bijvoorbeeld CO2 uitstoot zoals in deze kaart. ',
            location: {
                center: [4.17058, 51.65794],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'sluis-emissies',
                    opacity: 0.8
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'sluis-emissies',
                    opacity: 0.0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.8
                }
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
                zoom: 7.5,
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
