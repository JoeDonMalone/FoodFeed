



var clientID = "2SCGL344NNRYIHGXIFUBEUL3L0YWO0OPGLYYHTMDDIFZSQGH";
var secretID= "LMDVNIUMOK4AA2MODOR1MQNRK2WCOII4IWHSIBVPR3RWOVSE";
var apiKey = "662057d093b416978d68fd9b93c95087";

var pic1 = 
  {
    "meta": {
      "code": 200,
      "requestId": "601dfa1a2a22065e8ce6492b"
    },
    "response": {
      "photos": {
        "count": 1,
        "items": [
          {
            "id": "51900680498e9c8954cee8f7",
            "createdAt": 1368393344,
            "source": {
              "name": "Foursquare for Android",
              "url": "https://foursquare.com/download/#/android"
            },
            "prefix": "https://fastly.4sqi.net/img/general/",
            "suffix": "/15450296_fJ-65-iN9dl5nTl39wNUNTKsK4CkRChrl0nPt6PeoyQ.jpg",
            "width": 720,
            "height": 960,
            "checkin": {
              "id": "5190067b498e62e04f526182",
              "createdAt": 1368393339,
              "type": "checkin",
              "timeZoneOffset": -420
            },
            "visibility": "public"
          }
        ],
        "dupesRemoved": 0
      }
    }
}
var pic2 = {
  "meta": {
    "code": 200,
    "requestId": "599c8bf69fb6b72fcfa0779e"
  },
  "response": {
    "photo": {
      "id": "51e4151c498e60b5d17bc721",
      "createdAt": 1373902108,
      "source": {
        "name": "Instagram",
        "url": "http://instagram.com"
      },
      "prefix": "https://igx.4sqi.net/img/general/",
      "suffix": "/1022386_wEd7VXnWzp5lajvRLtAPunoiufDSIq8PMEtEuIH2Tzg.jpg",
      "width": 612,
      "height": 612,
      "user": {
        "firstName": "John",
        "lastName": "D",
        "countryCode": "US"
      },
      "visibility": "public",
      "venue": {
        "id": "427c0500f964a52097211fe3",
        "name": "The Metropolitan Museum of Art (Metropolitan Museum of Art)",
        "contact": {},
        "location": {
          "address": "1000 5th Ave",
          "crossStreet": "btwn E 80th & E 84th St",
          "lat": 40.779150129460504,
          "lng": -73.9627398125614,
          "postalCode": "10028",
          "cc": "US",
          "city": "New York",
          "state": "NY",
          "country": "United States",
          "formattedAddress": [
            "1000 5th Ave (btwn E 80th & E 84th St)",
            "New York, NY 10028",
            "United States"
          ]
        },
        "categories": [
          {
            "id": "4bf58dd8d48988d18f941735",
            "name": "Art Museum",
            "pluralName": "Art Museums",
            "shortName": "Art Museum",
            "icon": {
              "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/museum_art_",
              "suffix": ".png"
            },
            "primary": true
          }
        ]
      }
    }
  }
}
// 20210206103330
// https://api.foursquare.com/v2/venues/search?client_secret=LMDVNIUMOK4AA2MODOR1MQNRK2WCOII4IWHSIBVPR3RWOVSE&client_id=2SCGL344NNRYIHGXIFUBEUL3L0YWO0OPGLYYHTMDDIFZSQGH&radius=20&limit=50&near=Los%20Angeles&query=burrito&v=20161101


var response = 
{
  "meta": {
    "code": 200,
    "requestId": "601ee11d5964966eb9ba4982"
  },
  "response": {
    "venues": [
    ],
    "geocode": {
      "what": "",
      "where": "los angeles",
      "feature": {
        "cc": "US",
        "name": "Los Angeles",
        "displayName": "Los Angeles, CA, United States",
        "matchedName": "Los Angeles, CA, United States",
        "highlightedName": "<b>Los Angeles</b>, CA, United States",
        "woeType": 7,
        "slug": "los-angeles-california",
        "id": "geonameid:5368361",
        "longId": "72057594043296297",
        "geometry": {
          "center": {
            "lat": 34.05223,
            "lng": -118.24368
          },
          "bounds": {
            "ne": {
              "lat": 34.337306,
              "lng": -118.155289
            },
            "sw": {
              "lat": 33.703652,
              "lng": -118.668176
            }
          }
        }
      },
      "parents": [
        
      ]
    }
  }
}
var searchEl = $("#search-text");
var categoryEl = $("#category option:selected");
var locationEl = $("#location");

/*================Page load method  ================*/
$(document).ready(function() {
  initializeSearchHistory();
  // callSearchAPI();
  // callDetailAPI();
  // callPhotosAPI();
  // callReviews();
  console.log(searchEl.val());
  console.log(categoryEl.text());
  console.log(locationEl.val());
=======
var categoryEl = $("#category");
var businessDetailContainerEl = $("#business-detail");
var business = {
  id: "",
  name: "",
  summary: "",
  address: "",
  postalCode: "",
  state: "",
  phoneNo: "",
  lat: "",
  lon: "",
  tipCount:""
}
var result = [];
/*================Page load method  ================*/

$(document).ready(function() { 
  
  getLocation();
    callSearchAPI();
    // callDetailAPI();
    // callPhotosAPI();
    // callReviews();
  historyAssign();
  callSearchAPI();
  callDetailAPI();
  callPhotosAPI();
  callReviews();
  // callCategories(); -JDM


  ///=====   Button click events  ===== ////
  $( "#submit" ).click(function() {
    addToSearchHistory();
    console.log("submit button clicked" + " AND searchtext: " + searchEl.val() +  " ANd category: "+ categoryEl.val());
  })
});
// https://itunes.apple.com/search?term=jack+johnson
function getLocation() {
  let latText = document.getElementById("latitude");
  let longText = document.getElementById("longitude");


  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
     let long = position.coords.longitude;

  //  latText.innerText = lat.toFixed(2);
  //  longText.innerText = long.toFixed(2);
    callWeatherInfo(lat, long);

  });
}
function callWeatherInfo( latitude, longitude ) {
  var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude+ "&lon=" + longitude +"&units=imperial&appid=" + apiKey;
  console.log(url);
  
  fetch(url)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    //
    console.log(data);
    console.log(data.current.temp);

    let temp = document.getElementById("temp");
    temp.innerText = "Your Temp is: " +  data.current.temp;
    let icon = document.getElementById("weathericon");
    let details = document.getElementById("weather");

    var todayiconurl = "http://openweathermap.org/img/wn/" +  data.current.weather[0].icon + "@2x.png";
    console.log(todayiconurl);
    icon.setAttribute("src", todayiconurl);
    console.log(data.current.weather[0].description);

    details.innerText = data.current.weather[0].description;

    //let icon = position.coords.longitude;
   //getWeather(data); 
   // toggleFrontside(false);
  })
  .catch(function() {
    // catch any errors
  });
}
function itunes() {
  var location = "Los Angeles";
  var query = "burrito";
  var radius = 20;

  var url = "https://api.foursquare.com/v2/venues/search?near=seattle,wa&query=coffee&v=20150214&m=foursquare&client_secret=" + secretID +" &client_id=" + clientID  
  
  console.log(url);
  
  fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    console.lon(myJson);

    //getseachList(myJson);
  });
}


function callSearchAPI() {
  var location = "Los Angeles";
  var query = "burrito";
  var radius = 20;
  var url = "https://api.foursquare.com/v2/venues/search?client_secret=" + secretID +"&client_id=" + clientID  + "&radius=" + radius +"&limit=50&near=" + location +"&query=" + query + "&v=20161101" ;
  
  console.log(url);
  
  fetch(url)
  .then(function(response) {
    console.log(response);

    return response.json()
  })
  .then(function(myJson) {
    getseachList(myJson);
  });
}

function callDetailAPI() {
  var venueID = "45f29bb2f964a520e0431fe3";
  var url = "https://api.foursquare.com/v2/venues/" + venueID+ "?client_secret=" + secretID + "&client_id=" + clientID + "&v=20161101";
  
  console.log(url);
  
  fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

function callPhotosAPI() {
  var prefix = "https://fastly.4sqi.net/img/general/";
  var size = "300x500";
  var suffix = "/yAzQ76qVZVdlkLyV5hi7wOEwZ4_kMzXBtl013qwcU28.jpg";
  // https://igx.4sqi.net/img/general/300x500/5163668_xXFcZo7sU8aa1ZMhiQ2kIP7NllD48m7qsSwr1mJnFj4.jpg
  var url = prefix + size + suffix;
  console.log(url);
}




function callReviews() {
  var venueID = "45f29bb2f964a520e0431fe3";
  
  var url = "https://api.foursquare.com/v2/venues/" + venueID +"/tips?client_secret=" + secretID + "&client_id=" + clientID + "&v=20161101";
  console.log(url);
  
  fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    console.log(myJson);
  });
  
}
function initializeSearchHistory() {

function getseachList(data) {

  console.log(data.response.groups[0].items);
  var itemList = data.response.groups[0].items;

    for (var i=0; i<itemList.length; i++ ){
      var businessModel = Object.create(business);
      businessModel.id = itemList[i].venue.id;
      businessModel.name = itemList[i].venue.name;
      businessModel.postalCode = itemList[i].venue.location.postalCode;
      businessModel.state = itemList[i].venue.location.state;
      businessModel.lat = itemList[i].venue.location.lat;
      businessModel.location = itemList[i].venue.location.lon;
      businessModel.tipCount = itemList[i].venue.id;

      let address = itemList[i].venue.location.formattedAddress;

      for (var j=0; j<address.length; j++) {
        businessModel.address += address[j];
      }
      result.push(businessModel);
  }

  showList();
  console.log(result);
}

function showList() {
  for (var i=0; i<result.length; i++) {
      var divEl = $('<div></div>');
      divEl.addClass("grid-x grid-margin-x small-up-2 medium-up-3");

      var divCellEl = $('<div></div>');
      divCellEl.addClass("cell");

      var divCardEl = $('<div></div>');
      divCardEl.addClass('card');

      var imgEl = $('<img></img>');
      imgEl.attr('src',"https://d19m59y37dris4.cloudfront.net/places/1-1-3/img/photo-top-1.jpg");
      //const venuePhotoSrc = getVenuePhotos(result.id);
    //console.log(venuePhotoSrc);

      var divSection = $('<div></div>');
      var h4El = $('<h4></h4>');
      h4El.text(result[i].name);
      var pEl = $('<p></p>');
      pEl.text(result[i].address);

      divSection.append(imgEl);
      divSection.append(h4El);
      divSection.append(pEl);
      divCardEl.append(divSection);
      divCellEl.append(divCardEl);
      
      businessDetailContainerEl.append(divCellEl);

      callVenueIconAPI(result[i].id);

  }
}

const getVenuePhotos = async (venueId) => {
  const photoUrlToFetch =  photoUrl + venueId / '/photos?limit=1&client_id=' +  clientID + '&client_secret='  + secretID + '&v=20190903';
  try {
    const response = await fetch(photoUrlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const photo = jsonResponse.response.photos.items[0];
      const photoUrl = `${photo.prefix}100x100${photo.suffix}`;
      console.log(photoUrl);
      return photoUrl;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

function historyAssign() {
  let recentSearches = JSON.parse(localStorage.getItem('Recent Places Searches'));
  if (!recentSearches) {
      let recentSearches = [ {
        'searchString': '',
        'location':'',
        'categories':[] 
            // 'results': {
            //   ''
            // }
          }
      ]
      localStorage.setItem('Recent Places Searches', JSON.stringify(recentSearches));
  } 
};

function addToSearchHistory() {
  let recentSearches = [ {
    'searchString':searchEl.val(),
    'location': locationEl.val(),
    'categories':categoryEl.text()    
        // 'results': {
        //   ''
        // }
      }
  ]
  localStorage.setItem('Recent Places Searches', JSON.stringify(recentSearches));
};