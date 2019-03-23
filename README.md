# daymet-single-pixel-client

Client API to DAYMET's Single Pixel Extraction Tool web service

https://daymet.ornl.gov/single-pixel-tool-guide

# Installation

`$ npm install daymet-single-pixel-client --save`

# Example usage

```Javascript
var Daymet = require("daymet-single-pixel-client");

// Depending on your environment:
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
```

# Example output

Output from the demo code above:

```json
{
  "loc": [
    47,
    -122
  ],
  "Elevation": "476 m",
  "citation": "Thornton; P.E.; M.M. Thornton; B.W. Mayer; Y. Wei; R. Devarakonda; R.S. Vose; and R.B. Cook. 2016. Daymet: Daily Surface Weather Data on a 1-km Grid for North America; Version 3. ORNL DAAC; Oak Ridge; Tennessee; USA. http://dx.doi.org/10.3334/ORNLDAAC/1328",
  "LCC": [
    -1580107.11,
    686640.75
  ],
  "Tile": "12269",
  "data": {
    "tmin (deg c)": [
      0,
      -0.5,
      -1.5
    ],
    "prcp (mm/day)": [
      11,
      4,
      11
    ],
    "dayl (s)": [
      30067.19921875,
      30412.80078125,
      30412.80078125
    ],
    "tmax (deg c)": [
      4,
      3,
      3.5
    ],
    "year": [
      2000,
      2000,
      2000
    ],
    "yday": [
      1,
      2,
      3
    ],
    "swe (kg/m^2)": [
      0,
      0,
      0
    ]
  }
}
```
