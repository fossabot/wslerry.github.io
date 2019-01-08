---
title: Lerry William - Remote sensing, gis, cartography and other stuff!
author: Lerry William
weight: 1
permalink: /
layout: index
image: "/images/misc/viz1.png"
description: Lerry William's portfolio. Tips for geospatial stuff such as Geoinformation, Remote Sensing, Geomatics,
  and a bit of spatial programming (mostly python and R).
keywords:
---
{% include menu.html %}

<!-- ![img_grn1.png](/images/misc/img_grn1.png) -->

<div class="row">
  <div class="ten columns">
    <div class="row">
      <h3>Hi, I'm Lerry</h3>
      <p>
        I'm working with rasters and vectors! Trying to map the world around me and solve some mysteries behind it.
        Interested with remote sensing, GIS, geospatial analysis, visualization and geomatics. Sometime, I code... but most of the time I do mapping.
        Based in Sarawak, Malaysia.
      </p>
      Check out my <a href="/projects">project</a>!
    </div>
    <!-- <div class="row">
      <h3>Services</h3>
        <ul>
            <li>Geoinformation System (GIS)</li>
            <li>Remote Sensing processing and analysis</li>
            <li>Web mapping</li>
            <li>Cartography</li>
        </ul>
    </div> -->
    <div class="row">If you're interested with mapping projects or anything related, please free to contact me.</div>

  </div>

  <div class="two columns">
    <h3>Category</h3>
    <hr>
    {% for category in site.categories %}
      {% capture category_slug %}{{ category | first }}{% endcapture %}
      {% for c_slug in category_slug %}
        {% if c_slug == page.categories %}
          {{ c_slug }}
        {% else %}
          <a href="/category/{{ c_slug }}" class="active">  {{ c_slug }}  </a>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>
</div>
