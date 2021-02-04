
var clientID = "2SCGL344NNRYIHGXIFUBEUL3L0YWO0OPGLYYHTMDDIFZSQGH";
var secretID= "HB5KHXH5XHJ3HYVAW3OBW5PBUB0BTIK3U4GNPSHB0DWSY013";
var baseURl = "https://api.foursquare.com/v2/venues/45f29bb2f964a520e0431fe3?client_secret=HB5KHXH5XHJ3HYVAW3OBW5PBUB0BTIK3U4GNPSHB0DWSY013&client_id=2SCGL344NNRYIHGXIFUBEUL3L0YWO0OPGLYYHTMDDIFZSQGH&v=20161101"
var searchEl = $("#search-text");
var categoryEl = $("#category");

/*================Page load method  ================*/
$(document).ready(function() { 
  
  callSearchAPI();
  callDetailAPI();
  callPhotosAPI();
  callReviews();
  
  ///=====   Button click events  ===== ////
  $( "#submit" ).click(function() {
    alert("submit button clicked" + " AND searchtext: " + searchEl.val() +  " ANd category: "+ categoryEl.val());
  })
});

function callSearchAPI() {
  var location = "Austin";
  var query = "burrito";
  var radius = 20;
  var url = "https://api.foursquare.com/v2/venues/explore?client_secret=" + secretID +"&client_id=" + clientID  + "&radius=" + radius +"&limit=50&near=" + location +"&query=" + query + "&v=20161101" ;
  
  console.log(url);
  
  fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    console.log(myJson);
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
