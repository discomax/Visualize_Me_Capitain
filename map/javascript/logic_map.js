var restaurants = [
    {
       id:"yrUDeng1LrDvgyyjI5GiHA",
       name:"Pho Quynh",
       type:"Vietnamese",
       rating:4.5,
       lat:35.211296081543,
       long:-80.7613372802734,
       price:"$$",
       address:"4900 Central Ave",
       city:"Charlotte",
       zip:28205
    },
    {
       id:"PqcOSnCsJTT9Yd2xWKIMWw",
       name:"La Shish Kabob",
       type:"Middle Eastern",
       rating:4.5,
       lat:35.2032998,
       long:-80.7604348,
       price:"$",
       address:"3117-A N Sharon Amity",
       city:"Charlotte",
       zip:28205
    },
    {
       id:"LdhprCGxa0inFo5P812EIg",
       name:"Loft & Cellar",
       type:"Cocktail Bars",
       rating:3.5,
       lat:35.2282036722545,
       long:-80.8464987203479,
       price:"$$",
       address:"305 W 4th St",
       city:"Charlotte",
       zip:28202
    },
    {
       id:"VH3WA7a-OVzFj2K_SP4BIw",
       name:"The King's Kitchen",
       type:"American (Traditional)",
       rating:4,
       lat:35.2280098136565,
       long:-80.8442559630758,
       price:"$$",
       address:"129 W Trade St",
       city:"Charlotte",
       zip:28202
    },
    {
       id:"trAd97ig2agtkZl2cimOMQ",
       name:"Something Classic Cafe",
       type:"American (New)",
       rating:4,
       lat:35.22822,
       long:-80.84099,
       price:"$",
       address:"220 N Tryon St",
       city:"Charlotte",
       zip:28263
    },
    {
       id:"QFqtVX-lyZQgVHQrG-dhlg",
       name:"Diamond Restaurant",
       type:"Southern",
       rating:3.5,
       lat:35.21909,
       long:-80.81317,
       price:"$",
       address:"1901 Commonwealth Ave",
       city:"Charlotte",
       zip:28205
    },
    {
       id:"l9tFVg7r7QXuLnCywMQl7Q",
       name:"The Daily Tavern",
       type:"American (New)",
       rating:4.5,
       lat:35.2294337656203,
       long:-80.8419475618761,
       price:"$$",
       address:"214 N Church St",
       city:"Charlotte",
       zip:28202
    },
    {
       id:"Cbr_THdFrhePgJoqQ9X6gQ",
       name:"Pho Hoa Noodle Soup",
       type:"Vietnamese",
       rating:4.5,
       lat:35.217429,
       long:-80.794365,
       price:"$",
       address:"3000 Central Ave",
       city:"Charlotte",
       zip:28205
    },
    {
       id:"SHFlELFcEcAOJv_fTAKChQ",
       name:"Dandelion Market",
       type:"Bars",
       rating:4,
       lat:35.2286689,
       long:-80.84241,
       price:"$$",
       address:"118 W 5th St",
       city:"Charlotte",
       zip:28202
    },
    {
       id:"K3iw26MkmSBPAM7BzHkIYQ",
       name:"Yama Asian Fusion",
       type:"Japanese",
       rating:4,
       lat:35.157295,
       long:-80.824004,
       price:"$$",
       address:"720 Governor Morrison St",
       city:"Charlotte",
       zip:28211
    },
    {
       id:"bgvm73MMjC2f5qo_RgXOXg",
       name:"Halcyon",
       type:"Cocktail Bars",
       rating:4,
       lat:35.224421,
       long:-80.848247,
       price:"$$$",
       address:"500 S Tryon St",
       city:"Charlotte",
       zip:28202
    }
];


const MAP_KEY = "pk.eyJ1IjoiZGlzY29tYXgiLCJhIjoiY2p0bGtwdjdvMGN0ZzRhcGVoaHBrdGRvNiJ9.1FRcT1k-Vdo3ZLHVSp28Fg";

// An array which will be used to store created restMarkers
var restMarkers = [];

// loop through the cities array, create a new marker for each city. 
for (var i = 0; i < restaurants.length; i++) {
    
    // Make a variable to hold the latitude and longitude of each restaurant
    var loc = [restaurants[i].lat, restaurants[i].long];
    
    // Create the restaurant's marker using the coordinates using loc,
    // bind a pop-up with restaurant info & push it to the cityMarkers array.
    restMarkers.push(
       L.marker(loc).bindPopup("<h2>" + restaurants[i].name + "</h2> \
        <p><font size='3'> \
        Category: " + restaurants[i].type + "<br> \
        Prince: " + restaurants[i].price + "<br> \
        Rating: " + restaurants[i].rating + "<br> \
        Address: <br> \
            " + restaurants[i].address + "<br>" + restaurants[i].city + " " + restaurants[i].zip + "\
            </font></p>"
        )
    );
  }

// Add all the restaurant markers to the a new layerGroup.
var restLayer = L.layerGroup(restMarkers);

// Adding tile layer
var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: MAP_KEY
  });

// Creating map object
var mapLat, mapLong;
mapLat = 35.227085;
mapLong = -80.843124;

var streetMap = L.map("map", {
    center: [mapLat, mapLong],
    zoom: 11,
    layers: [streetMap, restLayer]
  });
  
