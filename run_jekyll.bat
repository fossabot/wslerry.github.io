@echo off
SET PATH="path\to\ruby\bin";%PATH%
START /WAIT "10" http://127.0.0.1:4000
jekyll serve
