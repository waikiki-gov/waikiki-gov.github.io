# Waikiki website
Exported HTML, CSS and JS files for the minimized webpage of Waikiki.

## Export Muse
* Publish Muse files.
* Copy assets folder and manifest.json to root.
* Replace webpro.js files in scripts folder.
* Add service-worker.js to the root folder.
* Remove regexp.
* Format: CMD+D és CMD+Y.

## Fonts
### Commonly used:
* Arial
* Varela (self-hosted)
* Dosis (self-hosted)
* Raleway (self-hosted)
* Droid Sans (self-hosted)

### Replacements:
* Helvetica - Arial
* Georgia - Arial
* MyRiad - Arial
* Verdana - Arial
* Abel - Arial
* Palatino - Dosis
* Comic Sans - Dosis Bold
* Asap Bold - Dosis Bold
* Maven Pro - Droid Sans
* Times New Roman - Droid Sans
* Krona One - Droid Sans

### Delete lines with regex:
<.*"http://widgets-musethemes.businesscatalyst.com.*>
<!--(.*?)-->