---
layout: post
title: Sarawak geological map XYZ Tiles
description: Sarawak geological map XYZ Tiles @ maptiles
categories:
- cartography
- gis
- leaflet
image:
---

You can use this low resolution XYZ tiles for your own purpose.
Copy URL below in your GIS software to use the service.

```
https://tiles.lerryws.xyz/sarawak_geological_map/{z}/{x}/{y}.png
```

<style>
a {
	text-decoration: none;
  font-size: 10px;
}
</style>

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
