# Waikiki website
Exported HTML, CSS and JS files for the minimized webpage of Waikiki.

## Export Muse
* Publish Muse files.
* Copy assets folder and service-worker.js to root.
* Replace webpro.js file in scripts folder.
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
* Coda - Droid Sans
* Lucida Sans - Arial
* Nova Mono - Varela
* Pt Sans - Droid Sans Bold

### Delete lines with regex:
<.*"http://widgets-musethemes.businesscatalyst.com.*>
<!--(.*?)-->
<img width="1879" alt="Képernyőfotó 2023-01-15 - 18 13 06" src="https://user-images.githubusercontent.com/43353335/212556186-f587fd71-52ca-4572-b83d-de2a70368490.png">
