---
title: Lerry William - Remote sensing, gis, cartography and other stuff!
author: Lerry William
weight: 1
permalink: /
layout: index
image: "/images/misc/viz1.png"
description: Lerry William's portfolio. Tips for geospatial stuff such as Geoinformation, Remote Sensing, Geomatics,
  and a bit of spatial programming (mostly python and R).
keywords: Lerry William, Remote Sensing, Geospatial, Geoinformation, Analysis, Geomatics, Cartography, Sarawak, GIS, Python, R, Geostatistics
---
{% include menu.html %}

<!-- ![img_grn1.png](/images/misc/img_grn1.png) -->

<div class="row">
	<div class="nine columns">
		<div class="row">
  		<h3>Hi, I'm Lerry</h3>
      <p style="text-align:center;"><img src="/images/misc/terrain_3d.gif" width="150" height="auto" style="text-align:center" /></p>
      <p>
  		I'm working with rasters and vectors to produce maps 🗺️ ! Trying my best to map the world around me and solve some mysteries behind it.
      </p>
  		<p>🌏 Based in Sarawak, Malaysia 🇲🇾.</p>
		</div>

		<div class="row">
		  <h3>I Do..</h3>
			<ul>
				<li>👨‍💻 Geoinformation System (GIS)</li>
				<li>🛰️ Remote Sensing processing and analysis</li>
				<li>🌐 Web mapping</li>
				<li>🗺️ Cartography</li>
			</ul>
		</div>
	</div>

	<div class="three columns">
		<div class="row">
			<h3>Contact</h3>
			<a href="mailto:wslerry2@hotmail.com"><i class="fa fa-envelope"></i></a>
			<a href="https://github.com/wslerry"><i class="fab fa-github"></i><a href="https://github.com/wslerry"></a>
			<a href="https://twitter.com/Lerry_WS"><i class="fab fa-twitter"></i></a>
			<a href="https://www.linkedin.com/in/lerrywilliamseling/"><i class="fab fa-linkedin"></i></a>


		<div class="row">
			<h3>Category</h3>
			{% for category in site.categories %}
			  {% capture category_slug %}{{ category | first }}{% endcapture %}
			  {% for c_slug in category_slug %}
				{% if c_slug == page.categories %}
				  {{ c_slug }}
				{% else %}
				  <a href="/category/{{ c_slug }}" class="active">▪️{{ c_slug }}  </a>
				{% endif %}
			  {% endfor %}
			{% endfor %}
		</div>
