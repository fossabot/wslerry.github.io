---
layout: post
title: Geospatial python environment in Anaconda
description: Tips and tutorial on how to setup Geospatial python environment in python. GIS, Remote Sensing, Geomatics, Earth Observation, python.
categories:
- python
- gis
- remote sensing
- cartography
image:
---

# Geospatial + Python (Anaconda) ? ｢(ﾟﾍﾟ)

How to setup python environment specializing in geospatial (GIS, Remote Sensing, Geostatistics, etc.) ?
We need python geospatial libraries in order to do analysis and visualization of geospatial data. I will guide you step by step on how to setup your pyhton geospatial environment within Anaconda.

1. Download Anaconda
- You can download anaconda from Anaconda [website](https://www.anaconda.com/distribution/) based on your OS.
- Anaconda comes with Jupyter Notebook and Spyder.
- Make sure you select and download Anaconda with Python version 3.0 ~ 3.7. Why? because python 2.7 will be [no longer maintained](https://pythonclock.org/) in 2020.

2. Setup environment in Anaconda
- Run Anaconda Prompt (type and search `Anaconda Prompt` in Windows startup search box)
- copy this command to update your Anaconda
```
conda update -n base conda
```
```
conda config --add channels conda-forge
```
```
conda update --all
```
- Now, in case you manage multiple type of python project, it is advisable to create virtual environment. Let say we wanted to called our new environment as "geopy", you can pick any name as you like though. Create a new environment by typing this command into your terminal:
```
conda create --name geopy
```
Or... you need to install it based on your favorite python version:
```
conda create --name geopy python=3.6
```
- Now we already created our environment, lets activate it:
```
conda activate geopy
```
you can deactivate it by using this command(but please do not deactivate it yet, since we still need to install our packages/module):
```
conda deactivate geopy
```
- After activated your python environment, lets download our packages/module.
```
conda install -c conda-forge gdal shapely opencv rasterstats geopandas folium cartopy xarray pynio pseudonetcdf
```
```
conda install -c anaconda scikit-learn scikit-image scipy rasterio psycopg2 netcdf4 seaborn pandas statsmodels bokeh colorcet
```

OK guys, thats all for this tutorial. Good luck and happy mapping!
