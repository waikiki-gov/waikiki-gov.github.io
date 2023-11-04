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

## Colors
### General
* Primary - 0071BC
* Secondary - 0E308E
* Tertiary - 00B0C3
* Error - AD1A24
* Warning - FF9800
* Success - 
* Quote - F4DB38

### Grey
* Dark - 212121
* Mid - 424242
* Light - 888888
* Deep - 555555

### Dark
* Dark azure - 2F4042
* Dark background - 13191E

## Manual edits
### Delete lines with regex:
* Links: <.*"http://widgets-musethemes.businesscatalyst.com.*>
* Comments: <!--(.*?)-->
* Crc: ?crc=[0-9]*

### Format document:
* Cmd + D
* Cmd + Y

### Remove duplicate widget styles and scripts:
* Stats animator
* Donut charts

### Direct include scripts:

<script type="text/javascript">
	$.browser = { webkit: true, version: '605.1.15', safari: true, msie: false, Features: {} };
 </script>
  <script src="scripts/museutils.js"></script>
  <script src="scripts/whatinput.js"></script>
  <script src="scripts/jquery.musemenu.js"></script>
  <script src="scripts/webpro.js"></script>
  <script src="scripts/musewpdisclosure.js"></script>
  <script src="scripts/jquery.watch.js"></script>
  <script src="scripts/musewpslideshow.js"></script>
  <script src="scripts/jquery.museoverlay.js"></script>
  <script src="scripts/touchswipe.js"></script>
  <script src="scripts/jquery.musepolyfill.bgsize.js"></script>
  <script type="text/javascript">
		$(document).ready(function () {
			try {




<img width="1879" alt="Képernyőfotó 2023-01-15 - 18 13 06" src="https://user-images.githubusercontent.com/43353335/212556186-f587fd71-52ca-4572-b83d-de2a70368490.png">
