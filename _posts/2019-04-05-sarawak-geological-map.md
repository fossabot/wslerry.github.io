---
layout: post
title: Sarawak geological map XYZ Tiles
description: XYZ Tiles and WMTS service for geological map tiles of Sarawak.
categories:
- cartography
- gis
- leaflet
image: "/images/post_images/2019-04-05_20-13-58.png"
---


Copy URL below into your GIS software to use the service.
```
https://tiles.lerryws.xyz/sarawak_geological_map/{z}/{x}/{y}.png
```

Or, as a WMTS service
```
https://tiles.lerryws.xyz/sarawak_geological_map/capabilities/lerryws.xml
```

If you are interested to use customized web mapping base map you can contact me through my [email](mailto:wslerry2@hotmail.com) or [twitter](https://twitter.com/Lerry_WS).

<div id='map' style="width: 100%; height: 600px;"></div>

<link rel="stylesheet" href="/css/leaflet.css">
<script type="text/javascript" src="../js/leaflet.js"></script>

<script>
  var map = new L.Map('map', {center: [2.85124161, 113.25167843],zoom:8});
	L.tileLayer('https://tiles.lerryws.xyz/sarawak_geological_map/{z}/{x}/{y}.png',
  {
      attribution: 'Tiles by <a href="http://lerryws.xyz">Lerry William</a>',
      maxZoom: 12,
      minZoom: 8
    }).addTo(map);
</script>
