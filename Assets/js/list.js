
var categoryEl = $("#category option:selected");
var selectedIndex;
var favorites; 


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
  favorites = localStorage.getItem("FavoritePlaces");
  favorites = JSON.parse(favorites);

      if (favorites === null) { 

      } else {
        console.log("in else ");

        showFavoriteList();
      }
});

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
function clickCard(id) {
      
  console.log("click " + parseInt(id));
  selectedIndex = parseInt(id);
  console.log(favorites[selectedIndex].restaurant.name);
  
  var modal = $("#modalDetail");
  var name = modal.find( "#name");
  var cusine = modal.find( "#modalCuisine");
  var price = modal.find( "#modalPrice");
  var rating = modal.find( "#modalRatingText");
  var address = modal.find( "#modaladdres"); 
  var phone = modal.find( "#modalphone");
  var timing = modal.find( "#timing");
  var offers = modal.find( "#offers");
  var offers = modal.find( "#modalDelivery");
  var delivery = modal.find( "#modalDelivery");
  var favButton = modal.find( "#modalFavorite");

  console.log(favorites[selectedIndex].restaurant.name);
  console.log(favorites[selectedIndex].restaurant.cuisines);

  cusine.text(favorites[selectedIndex].restaurant.cuisines);
  name.text(favorites[selectedIndex].restaurant.name);
  rating.text(favorites[selectedIndex].restaurant.user_rating.aggregate_rating);
  address.text(favorites[selectedIndex].restaurant.location.address);
  phone.text(favorites[selectedIndex].restaurant.phone_numbers);
  timing.text(favorites[selectedIndex].restaurant.timings);
  offers.text(favorites[selectedIndex].restaurant.offers);
  
  displayMapAt(favorites[selectedIndex].restaurant.location.latitude, favorites[selectedIndex].restaurant.location.longitude);
  let pricetext = "";
  
  for (var i=0; i<parseInt(favorites[selectedIndex].restaurant.price_range); i++) {
     pricetext += "$";
  }
  price.text(pricetext);
  
  
  let hasdelivery = favorites[selectedIndex].restaurant.has_online_delivery;
  
  if (hasdelivery == "1") {
     delivery.text(" :YES");
  } else {
     delivery.text(" :NO");
     
  }
  var highlights = favorites[selectedIndex].restaurant.highlights;
  if (highlights.length > 0 ){
     let text = "";
     for (var i=0 ; i<highlights.length; i++) {
        text += " " + highlights[i];
     }
     $("#Highlights").text(text);
     
  }
  var savedData = localStorage.getItem("FavoritePlaces");

  favButton.find("i").removeClass().addClass("fa fa-thumbs-up");

  /*if (checkIfItemIsFavorite(savedData, result[selectedIndex].restaurant.id)) {
     favButton.find("i").removeClass().addClass("fa fa-thumbs-up");
  } else {
     favButton.find("i").removeClass().addClass("fa fa-thumbs-down");

  }*/

}

function showFavoriteList() {      
  var string = "";
  var name = "";
  var cuisines = "";
  var rating = "";
  var icon = "";
  var favButton = "";
  console.log(favorites[0]);

  $.each(favorites, function (i) {
    favorites[i] = favorites[i].restaurant;
    var dist = "";
     //var dist = distance(response[i].restaurant.location.latitude,response[i].restaurant.location.longitude, currentLocation.lat, currentLocation.lon );
     name = favorites[i].restaurant.name;
     cuisines = favorites[i].restaurant.cuisines;
     rating = favorites[i].restaurant.user_rating.aggregate_rating;
     icon = favorites[i].restaurant.thumb;
     if (icon == "" || icon == null) {
        icon = "./Assets/images/img.jpeg";
     }
    
     
     if (i%3 == 0) {
        string += '<div class="grid-x small-up-2 medium-up-3">';
     }
     string += '<div class="cell"> <div class="card" onclick="clickCard(this.id)" data-open="modalDetail" id='+ i + '"> <div class= "text-center">  <img class="card-image" src=' + icon + '> </div> <h6 class="card-title">' + name + '</h6> <p> <span class="card-cuisine">' + cuisines + '<br> </span> <span class="card-rating">  ' + rating +   '</span> <span class="card-dist">' + dist+ ' miles </span> </p> <button type="button" class="success button">Save</button> <i class="fa fa-map-marker"></i><i class="fa fa-heart-o" aria-hidden="true"></i>   test  </button>  </div> </div>';
  })
  
  $('#card').append(string);
}
