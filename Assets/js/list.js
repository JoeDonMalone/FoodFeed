var noResultl = $("#NoResult");
var selectedIndex;
var favorites; 

$(document).ready(function() {
   favorites = localStorage.getItem("FavoritePlaces");
 
       if (favorites === null) {
          $("#NoResult").attr("hidden", false);
        } else {
          $("#NoResult").attr("hidden", true);
          favorites = JSON.parse(favorites);
         showFavoriteList(favorites);
       }
       $("#modalWebsite").click(function (e) {
          let website = favorites[selectedIndex].details.restaurant.url;
          window.open(website);
       });
       $("#modalMenu").click(function (e) {
          let menu = result[selectedIndex].restaurant.menu_url;
          window.open(menu);
       });
 });
var categoryEl = $("#category option:selected");
var id;
var favorites; 

var currentLocation = {
   lat: "",
   lon: ""
}


function displayBusiness(){
  var idEl = document.querySelector(".card-section");

  var name = document.createElement("h4");
  var phoneNum = document.createElement("p");
  var address = document.createElement("p");
  var rating = document.createElement("p");

  rating.textContent = `Rating: ${venue.rating}`;
  name.textContent = `${venue.name}`;
  phoneNum.textContent = `Phone Number: ${venue.phone}`;
  address.textContent = `Address: ${venue.location.address}, ${venue.location.city}, ${venue.location.state}`;

  idEl.append(name, rating, phoneNum, address);
}

var favorite;

$(document).ready(function() {
   // getLocation();
   handlePermission();
   favorites = localStorage.getItem("FavoritePlaces");
   favorites = JSON.parse(favorites);
   if (favorites === null) {

   } else {
      showFavoriteList();
   }

   $('.favorites-cell').hover(
      function() {
         $( this ).addClass( "hover" );
         console.log('hover');
      }, function() {
         $( this ).removeClass( "hover" );
      }
      );
});

function handlePermission() {
   navigator.permissions.query({name:'geolocation'}).then(function(result) {
     if (result.state == 'granted') {
       console.log(result.state);
      //  geoBtn.style.display = 'none';
     } else if (result.state == 'prompt') {
      console.log(result.state);
      //  geoBtn.style.display = 'none';
       navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
     } else if (result.state == 'denied') {
      console.log(result.state);
      //  geoBtn.style.display = 'inline';
     }
     result.onchange = function() {
      console.log(result.state);
     }
   });
 }
 
 function report(state) {
   console.log('Permission ' + state);
 }


// function getLocation() {
//    navigator.geolocation.getCurrentPosition(function(position) {
//       let lat = position.coords.latitude;
//       let long = position.coords.longitude;
//       currentLocation.lat = lat;
//       currentLocation.lon = long;
//       // callWeatherInfo(lat, long);
//    });
// }

// function distance(lat1, lon1, lat2, lon2) {
//   if ((lat1 == lat2) && (lon1 == lon2)) {
//      return 0;
//   }
//   else {
//      var radlat1 = Math.PI * lat1/180;
//      var radlat2 = Math.PI * lat2/180;
//      var theta = lon1-lon2;
//      var radtheta = Math.PI * theta/180;
//      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//      if (dist > 1) {
//         dist = 1;
//      }
//      dist = Math.acos(dist);
//      dist = dist * 180/Math.PI;
//      dist = dist * 60 * 1.1515;
//      dist = dist * 0.8684;
//      return dist.toFixed(2);
//   }
// }

function displayMapAt(lat, lon) {
   $("#map")
   .html(
      "<iframe src=\"http://maps.google.com/maps?q=" + lat +  "," + lon + "&z=15&output=embed\"></iframe>");
   }

function distance(lat1, lon1, lat2, lon2) {
   if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
   }
   else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
         dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 0.8684;
      return dist.toFixed(2);
   }
}
function getHighlight(array) {
   let text = "";

   for (var i=0; i<array.length && i < 5 ; i++) {
      text +=  array[i];
      if (i < 4){
         text +=  ", "
      }
   }
   return text;
}
function getThumbImage(source) {
 if (source) {
    return source
 } else {
    "./Assets/images/img.png";
 }


function clickCard(id) {
      
//   console.log("click " + parseInt(id));
  id = parseInt(id);
//   console.log(favorites[id].restaurant.name);
  
  var modal = $("#modalDetail");
  var name = modal.find( "#name");
  var cuisine = modal.find( "#modalCuisine");
  var highlights = modal.find( "#highlights");
  var price = modal.find( "#modalPrice");
  var rating = modal.find( "#modalRatingText");
  var address = modal.find( "#modaladdres"); 
  var phone = modal.find( "#modalphone");
  var timing = modal.find( "#timing");
  var offers = modal.find( "#offers");
  var offers = modal.find( "#modalDelivery");
  var delivery = modal.find( "#modalDelivery");
  var favButton = modal.find( "#modalFavorite");

  cuisine.text(favorites[id].restaurant.cuisines);
  name.text(favorites[id].restaurant.name);
  highlights.text(favorites[id].restaurant.highlights);
  rating.text(favorites[id].restaurant.user_rating.aggregate_rating);
  address.text(favorites[id].restaurant.location.address);
  phone.text(favorites[id].restaurant.phone_numbers);
  timing.text(favorites[id].restaurant.timings);
  offers.text(favorites[id].restaurant.offers);
  
  displayMapAt(favorites[id].restaurant.location.latitude, favorites[id].restaurant.location.longitude);
  let pricetext = "";
  
  for (var i=0; i<parseInt(favorites[id].restaurant.price_range); i++) {
     pricetext += "$";
  }
  price.text(pricetext);
  
  
  let hasdelivery = favorites[id].restaurant.has_online_delivery;
  
  if (hasdelivery == "1") {
     delivery.text(" :YES");
  } else {
     delivery.text(" :NO");
     
  }
  var highlights = favorites[id].restaurant.highlights;
  if (highlights.length > 0 ){
     let text = "";
     for (var i=0 ; i<highlights.length; i++) {
        text += " " + highlights[i];
     }
     $("#Highlights").text(text);
     
  }
  var savedData = localStorage.getItem("FavoritePlaces");

  favButton.find("i").removeClass().addClass("fa fa-thumbs-up");

  if (checkIfItemIsFavorite(savedData, result[id].restaurant.id)) {
     favButton.find("i").removeClass().addClass("fa fa-thumbs-up");
  } else {
     favButton.find("i").removeClass().addClass("fa fa-thumbs-down");

}
function getPriceText(price) {
   let text = "";

   for (var i=0; i<price ; i++) {
      text += "$";
   }
   return text;
}
function clickCard(id) {
   selectedIndex = parseInt(id);
   let result = favorites[selectedIndex].restaurant;
   
   var modal = $("#modalDetail");
   modal.find( "#modal-title").text(result.name);
   modal.find( "#modalCuisine").text(result.cuisines);
   modal.find( "#modalPrice").text(getPriceText(parseInt(result.price_range)));
   modal.find( "#modalRatingText").text(result.user_rating.aggregate_rating);
   modal.find( "#modaladdres").text(result.location.address); 
   modal.find( "#modalphone").text(result.phone_numbers);
   modal.find( "#timing").text(result.timings);
   modal.find( "#offers").text(result.offers);
   modal.find( "#Highlights").text(getHighlight(result.highlights));
   modal.find( "#icon-img").attr("src", getThumbImage(result.thumb));
   result.has_online_delivery == "1" ? modal.find( "#modalDelivery").text("YES").attr("style", "color: green;") :       modal.find( "#modalDelivery").text("NO").attr("style", "color: red;");
   displayMapAt(result.location.latitude, result.location.longitude);
}

function displayMapAt(lat, lon) {
   $("#map")
   .html(
      "<iframe src=\"https://maps.google.com/maps?q=" + lat +  "," + lon + "&z=15&output=embed\"></iframe>");
   }

function showFavoriteList(response) {

   var string = "";
   var name = "";
   var cuisines = "";
   var rating = "";
   var icon = "";
   var favButton = "";
   $('#card').html('');
   
   $.each(response, function (i) {
      response[i] = response[i].details;
      name = response[i].restaurant.name;
      cuisines = response[i].restaurant.cuisines;
      rating = response[i].restaurant.user_rating.aggregate_rating;
      icon = response[i].restaurant.thumb;
      if (icon == "" || icon == null) {
         icon = "./Assets/images/img.png";
      }
      
      if (i%3 == 0) {
         if (i != 0) {
            string += "</div>";

         }
         string += '<div class="grid-x small-up-2 medium-up-3">';
      }
      string += '<div class="cell"> <div class="card card-size" onclick="clickCard(this.id)" data-open="modalDetail" id='+ i + '"> <div class= "text-center">  <img class="card-image" src=' + icon + '> </div> <h6 class="card-title">' + name + " " + rating  +" <i class='fas fa-star'></i> </h6><p>'" + cuisines + '</p> </div> </div>';
   })
   $('#card').append(string);
function showFavoriteList() {      
  var string = "";
  var name = "";
  var cuisines = "";
  var rating = "";
  var icon;
  var favButton = "";
  var location;
  console.log(favorites[0]);

  $.each(favorites, function (i) {
     favorites[i] = favorites[i].restaurant;
     var dist = "";
     var dist = distance(favorites[i].restaurant.location.latitude,favorites[i].restaurant.location.longitude, currentLocation.lat, currentLocation.lon );
     name = favorites[i].restaurant.name;
     cuisines = favorites[i].restaurant.cuisines;
     rating = favorites[i].restaurant.user_rating.aggregate_rating;
     icon = favorites[i].restaurant.thumb;
     if (icon == "" || icon == null) {
      icon = './Assets/images/img.png';
     }
      
      
   //   if (i%3 == 0) {
   //      string += '<div class="grid-x small-up-2 medium-up-3">';
   //   }
      string += 
      `<div class="favorites-cell"> 
         <div class="flex-card" onclick="clickCard(this.id)" data-open="modalDetail" id=${i}"> 
            <div class= "flex-pic-center">  
               <img class="flex-card-image" src=${icon}>
            </div> 
            <div class = "favorites-details-column">
               <h6 class="flex-card-title"><strong>${name}</strong></h6> 
               <p> 
                  <span class="card-cuisine">${cuisines}</span> <br>
                  <span class="card-rating"><strong>Rating: ${rating} </strong></span>
                  <span class="card-dist">${dist} miles </span> 
               </p> 
               <button type="button" class="success button">Remove</button>
            </div>
         </div> 
      </div>`;
  })
  
  $('#card').append(string);
}

