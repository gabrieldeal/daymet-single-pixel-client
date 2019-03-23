#!/usr/bin/env node

var Daymet = require("daymet-single-pixel-client");

require("es6-promise").polyfill();
require("cross-fetch/polyfill");

// Daymet does not allow cross-origin requests. If your code runs in a
// browser, then you can use this to use a CORS proxy:
// Daymet.Gateway.init({ url: 'https://your-proxy-here.com/single-pixel' });

var options = {
  end: new Date(946904400000), // 2000-01-03
  start: new Date(946731600000), // 2000-01-01
  vars: ["tmin", "tmax", "dayl", "prcp", "swe"]
};
var format = "json";
var lat = 47; // In WGS84 datum.
var lon = -122;

Daymet.Api.getApiData(lat, lon, format, options).then(response => {
  console.log(JSON.stringify(response.data, null, 2));
});
