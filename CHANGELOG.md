## 0.2 (December 2020)

#### Breaking

- Removed the React template to improve maintainability. The v 0.1 template is still available in the `v0.1` branch

#### Improvements

- Upgraded to GL JS v 2.0.0
- Added a story option to enable 3D terrain
- Added a chapter option to specify which map transition to use (`flyTo`, `easeTo`, and `jumpTo`)
- Added a story option to control the marker color
- Added a chapter option to set a chapter as `hidden`. This chapter will trigger a map update, but the `div` is hidden
- Added a chapter option to start a map rotation animation at the end of a transition
- Added a chapter option to call a custom JavaScript function after a transition
- Added a layer option to specify the duration of a layer opacity transition
- Added a chapter option for alignments (moved from a story option). Includes left, right, center, and full-width

#### Bugfixes

- Fixed CSS class interfering with touch map events
- Fixed support for heatmap layer types
- Fixed z-index blocking attribution clicks


## 0.1 (November 2019)

- First public release.