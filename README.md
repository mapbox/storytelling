- [Interactive Storytelling](#interactive-storytelling)
  - [Live Demo](#live-demo)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Steps](#steps)
    - [Generate Map Position](#generate-map-position)
    - [Configuration File and Layer Settings](#configuration-file-and-layer-settings)
    - [Configuration Options](#configuration-options)
    - [Mapbox Studio Style Configuration](#mapbox-studio-style-configuration)
    - [Organization](#organization)
  - [Deployment](#deployment)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

![3D mountains in Colorado](assets/co14ersstory.gif)

# Interactive Storytelling
Some stories are best told with a map. Data journalists covering changing conditions in a population's demographics, the environment, an international conflict, or telling a simple travel story frequently provide geographic context in their graphics.

This template is designed to accelerate building out a "storytelling" map story. The primary input is a story broken into sections (`chapters`), each hooked to a particular view of a map.

Optionally, you can input a custom Mapbox Style with layers styled in Studio and toggle the layer's opacity.

The output is an HTML and JavaScript file. These outputs can be hosted on any web-accessible location, with no extra code or infrastructure required. Note that embedding the output as an iFrame in another page will not work as expected. The scroll-driven interface requires the full page.

## Live Demo

You can view a live demo of this storytelling framework at [https://labs.mapbox.com/storytelling/](https://labs.mapbox.com/storytelling/)

## Prerequisites
This template is for data journalists and digital storytellers of any kind. If you are planning to include some custom map layers, you will need some familiarity with [Mapbox Studio](https://studio.mapbox.com).

To configure and publish a story, you will need:
- A Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token). Sign up for a free account at [mapbox.com](https://www.mapbox.com/signup/) to get one.

- A text editor. Visual Studio Code is a fine choice.

- A place to publish your work. Any service that hosts static files that can be accessed with a browser will do. [Github Pages](https://pages.github.com/) is a good free option.

- A story. This is unquestionably the hardest part. The best stories for this template will have sections that benefit from a map.

- Attention to detail. The configuration file does require specific syntax and punctuation. Braces, brackets, commas, and quotes are important. Follow the `config.js.template` for guidance. Some familiarity with [JSON]('https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/') is recommended.

- Optionally, some spatial data in your Mapbox map. The template has options to include layer names to show and hide the data as the story sections transition. You may want to highlight a neighborhood, or show satellite data from two different times.

The template does not rely on any particular CSS framework, fonts, or images. There are some basic styles in the `head` of the HTML file that can be changed, so feel free to adapt and add to these to match your site and story brand.

![example story screen capture](assets/glacierdemo.gif)

## Run the index.html file in a development server.

Clone this repository, and open its directory in Visual Studio Code.

### 1: Install the Live Server Extension
To make it easier to preview changes in real-time, you can install the Live Server extension in Visual Studio Code.  (This will serve the `index.html` from a local webserver, preventing CORS errors and other issues that can arise from opening an HTML file without using a development server):
1. Go to the **Extensions** tab in Visual Studio Code (the square icon on the sidebar).
2. Search for **Live Server** and click **Install**.
3. Once installed, you’ll be able to start a live server to preview the HTML file.

### 2: Run the HTML File in Your Browser
1. With the `index.html` file open, right-click in the editor window and select **Open with Live Server**.
2. Your default browser will open, displaying the storytelling map using the default configuration in `config.js`. Because you have not yet added your Mapbox Access Token, the map will not display. Follow the steps below to update `config.js`.

#### Customize your configuration

Open `config.js` and make the following edits to customize the map to tell your story.

1. **Add a Mapbox access token.** Replace `YOUR_MAPBOX_ACCESS_TOKEN` with an access token from your account at [account.mapbox.com](htps://account.mapbox.com). A good practice is to [create a separate](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#creating-and-managing-access-tokens) token per map to be able to track traffic to your different maps. 

2. **Select the map style** you want to use (the default is Mapbox Standard, but you can find more styles [in our Styles API documentation page](https://docs.mapbox.com/api/maps/styles/#classic-mapbox-styles), or create your own style in [Mapbox Studio](https://studio.mapbox.com)).

3. **Choose whether or not to display a marker** at the center of each map location. If you are displaying markers, you can set the color using the `markerColor` property. The default color is light blue.

4. **Choose a theme for the story text**. There are `light` and `dark` options.

```
{
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
    ...
    ]
{
```

6. **Add as many `chapters` in your template as needed.** You'll need a `,` between each section, but no comma at the end. Here is what a `chapter` looks like:

```
{
    id: 'slug-style-id',
    alignment: 'left',
    hidden: false,
    title: 'Display Title',
    image: './path/to/image/source.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    location: {
        center: [-122.418398, 37.759483],
        zoom: 8.5,
        pitch: 60,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
```

7. **Fill out your sections as needed.**  Give each section a unique name in the section `id` property. This will become the HTML `div` `id`, so avoid spaces in the name. The `title`, `description` properties are optional. The `description` supports HTML tags. If you have an image that goes with that section of the story, add the path to the image in the `image` property.

8. For `location`, you can use the `helper.html` file to help you determine the map's position. This tool prints the location settings of the map on the screen in a format ready for copy/paste into the template. Optionally, you can change the style in this file to your [custom style](https://docs.mapbox.com/mapbox-gl-js/example/custom-style-id/).

9. Repeat until you have the location entered for each of your sections.

10. Open `index.html` in a browser, and scroll. Voila!

11. There are more options available in `config.js`.  Refer to the documentation in this README and experiment with the different values as you craft your story. If you are familiar with HTML, CSS, and JavaScript, you can customize every aspect of the storytelling map, well beyond the options we've provided in this template.  Have fun, and please share your work!

#### Generate Map Position 

Use the [Mapbox Location Helper](https://labs.mapbox.com/location-helper/) to search for locations and get the center, zoom, pitch, and bearing for use in your storytelling map.

![location helper screen capture](assets/location-helper.gif)

#### Configuration File and Layer Settings

Here is a sample configuration:

```
var config = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Glaciers of Glacier National Park',
    subtitle: 'Change in coverage from 1998 to 2015',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'glacier-np',
            alignment: 'full',
            title: 'Glacier National Park Glaciers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age...',
            location: {
                center: [-113.91666, 48.66451],
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            alignment: 'left',
            title: 'Harrison Glacier, 1998',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park...',
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        }
    ]
}
```
#### Configuration Options

| Option                   | Type   | Description                                                                                                                                                                                                        |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `style` (Required)       | String | This is the Mapbox style `url` to use for the app. It can be a standard style, or a custom style from your Mapbox account. Use a custom style if you want to include custom data or layers.                        |
| `accessToken` (Required) | String | Your Mapbox access token.                                                                                                                                                                                          |
| `showMarkers`            | String | Controls whether markers are shown at the centerpoint of each chapter. If `true`, the map will display a default blue, inverted-teardrop icon.                                                                     |
| `markerColor`            | String | Accepts hexadecimal, RGB, and color names [compatible with CSS standards](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Overrides the default light blue marker color if `showMarkers` is `true`. |
| `theme`                  | String | Two basic themes (light and dark) are available.                                                                                                                                                                   |
| `use3dTerrain`           | String | Enables 3D terrain. (Optional)                                                                                                                                                                                     |
| `inset`                  | String | Enables a globe minimap. (Optional)                                                                                                                                                                                |
| `insetOptions`           | Object | [ `GlobeMiniMap` options](https://github.com/chriswhong/mapbox-gl-globe-minimap?tab=readme-ov-file#options)                                                                                                        |
| `insetPosition`          | Srting | A string representing the position of the inset map on the map. Valid options are `top-left`, `top-right`, `bottom-left`, `bottom-right`.                                                                                                      |
| `projection`             | String | Sets the Map object's [projection parameter](https://docs.mapbox.com/mapbox-gl-js/example/projections/) to create a map with a non-Mercator projection. (Optional)                                                 |
| `auto`                   | String | Enables automatic advancement through the chapters. (Optional)                                                                                                                                                     |
| `title`                  | String | The title of the overall story. (Optional)                                                                                                                                                                         |
| `subtitle`               | String | A subtitle for the story. (Optional)                                                                                                                                                                               |
| `byline`                 | String | Credit the author of the story. (Optional)                                                                                                                                                                         |
| `footer`                 | String | Citations, credits, etc., displayed at the bottom of the story.                                                                                                                                                    |
| `chapters` (Required)    | String | Contains all of the story content and map controls for each section of the story. _Array of objects_                                                                                                               |

---

#### Chapters Options

| Option                 | Type   | Description                                                                                                                                                                               |
| ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` (Required)        | String | A slug-style ID for the chapter. Used by the app's JavaScript and assigned as an HTML `id` for the `div` containing the story. Best practice: use kebab-case, e.g., `my-story-chapter-1`. |
| `alignment` (Required) | String | Defines where the story text should appear over the map. Options: `center`, `left`, `right`, `full`. Defaults to `center` for browser windows less than 750 pixels wide.                  |
| `hidden`               | String | Sets the visibility of the chapter to `hidden` when `true`. The chapter will still trigger a map and layer transition.                                                                    |
| `title`                | String | Title of the section, displayed in an `h3` element.                                                                                                                                       |
| `image`                | String | Path to an image to display in this section.                                                                                                                                              |
| `description`          | String | Main story content for the section. Aligned with what the reader sees on the map. Supports HTML for images, links, etc.                                                                   |
| `location` (Required)  | String | Details about the map display and camera view (e.g., center, zoom, pitch, bearing).                                                                                                       |
| `mapAnimation`         | String | Defines the [animation type](https://docs.mapbox.com/mapbox-gl-js/api/#map#jumpto) for transitions. Options: `flyTo`, `easeTo`, `jumpTo`. Defaults to `flyTo`.                            |
| `rotateAnimation`      | String | Starts a slow rotation animation at the end of the map transition when `true`. Rotates 90 degrees over 24 seconds.                                                                        |
| `callback`             | String | Name of a JavaScript function to execute custom code for the chapter, e.g., turning a legend on/off, adding API data, or displaying an interactive graph.                                 |
| `onChapterEnter`       | String | Layers to be displayed/hidden/muted when the section becomes active. _Array of objects_ (e.g., layer name, opacity, duration).                                                            |
| `onChapterExit`        | String | Same as `onChapterEnter`, triggered when the section becomes inactive. _Array of objects_.                                                                                                |

---

#### Location Details

| Option              | Type   | Description                                                                                           |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `center` (Required) | String | Center coordinates of the map, as `longitude, latitude`.                                              |
| `zoom` (Required)   | String | Zoom level of the map.                                                                                |
| `pitch`             | String | Angle of the map view. `0` is straight down, and `60` is highly tilted.                               |
| `bearing`           | String | Degrees of rotation clockwise from North (`0`). Negative values represent counter-clockwise rotation. |
| `speed`             | String | Speed of the flyTo animation.                                                                         |
| `curve`             | String | Curve factor for the flyTo animation.                                                                 |

#### Layer Configuration in your Mapbox Studio Style

Add and style each custom layer in your Studio style. Before the final publish, set any layers's style to be hidden with `0` opacity. **Do not hide the layer**. For example, if you have a `circle` layer, makes sure the `color-opacity` and/or the `stroke-opacity` is set to 0.

This will ensure that the map appears correctly when the story page loads. To adjust the opacity of the layers as the reader scrolls through the story, use the `onChapterEnter` or `onChapterExit` configuration options to set your desired opacity for the layer.

## Deployment

Host the `index.html` and `config.js` files in the same directory in a web-accessible location. If you don't know where to start, look into GitHub Pages or Netlify.

## Built With

- Mapbox GL JS
- Scrollama.js

## Authors

John Branigan on the Mapbox [Solutions Architecture Team](mailto:solutions_architecture@mapbox.com)

## License

BSD 3-Clause License

## Acknowledgments

* Lo Bénichou for the idea, support, and awesome feedback throughout the design and build process
* Paige Moody and Lem Thornton for early testing and feedback
* Chris Toomey for ushering this work through and keeping things on track
* Journalists with stories that help us make sense of what goes around us
* [Digital Democracy](https://www.digital-democracy.org/) and [Rudo Kemper](https://kunukumapping.com/) for [their fork](https://github.com/digidem/mapbox-storytelling-upgraded) that inspired many later features.
* [Paul Franz](https://github.com/pkfranz) for developing customizations and providing feedback.

## Notable Examples

- [Connectivity Disparity Across Schools in Kazakhstan: UNICEF](https://unicef.github.io/mapbox_analysis/story/map)
- [Saving the Nile: Aljazeera](https://interactive.aljazeera.com/aje/2020/saving-the-nile/index.html)
- [49 Mile Map: San Francisco Chronicle](https://projects.sfchronicle.com/total-sf/49-mile-map/)
- [Dark Vessel Detection: ICEYE](https://www.iceye.com/use-cases/security/dark-vessel-detection/interactive-demo)
- [Nuestro Territorio Es Nuestra Vida: Digital Democracy](http://lab.digital-democracy.org/mapa-sinangoe/)
- [The Chinese Economic Footprint In Central And Eastern Europe: CSD](https://chinacapture.csd.bg/)
- [Safe passages: Washington Post](https://www.washingtonpost.com/graphics/2020/climate-solutions/wyoming-wildlife-corridor/)
- [Polar Star Inn and Seipel Hut: Huttrip](https://map.huttrip.com/ )
- [Ten Conflicts to watch in 2022: Crisis Group](https://conflicts2022.crisisgroup.org/ )
- [The Guiana Shield: The Amazon Conservation Team](https://www.amazonteam.org/maps/guiana-shield/)
- [Watchlist 2021: International Rescue Committee](https://theirc.github.io/watchlist2021/)
- [A River Drained: Kontinentalist](https://cdn-images.kontinentalist.com/static-html/food-security-mekong-river-hydropower-dam-climate-change/index.html)
- [Climate Gentrification and its impact on New York City: Judy Huynh](https://www.climategentrification.info/)

[mapbox.com/resources#solutions](https://www.mapbox.com/resources#solutions)
