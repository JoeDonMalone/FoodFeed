var apiKey = "662057d093b416978d68fd9b93c95087";
var searchEl = $("#search-text");
var categoryEl = $("#category option:selected");
var locationEl = $("#location");
var businessDetailContainerEl = $("#business-detail");
var result = [];
var currentLocation = {
   latitude: null,
   longitude: null,
   city: "",
   temp: "",
   icon: "",
   description: ""
}
let defaultLocation = {
   lat: 30.2672,
   lon: -97.7431
}
var result = "";
var selected = 0;
var current_page = 0;

let map, infoWindow;
var favorites; 
var favIcon = {
   Fav: "fas fa-thumbs-up circle-icon",
   nonFav: "fas fa-thumbs-down circle-icon"
}
/*================Page load method  ================*/
$(document).ready(function() {

   if (currentLocation.latitude === null && currentLocation.longitude === null) {
         navigator.geolocation.getCurrentPosition(success, error, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
   }

   $("#modalWebsite").click(function (e) {
      let website = result[selectedIndex].restaurant.url;
      window.open(website);
   });
   $("#modalMenu").click(function (e) {
      let menu = result[selectedIndex].restaurant.menu_url;
      window.open(menu);
   });
   
   $("#modalFavorite").click( function() {
      var className = $(this).find("i") .attr("class");
      if (className == favIcon.Fav) {
           makeItFavorite();
         $(this).find("i").removeClass().addClass(favIcon.nonFav);
         showPopUp("We've added this location to your favorites list!");
         
      } else {
           makeItNonFavorite(result[selectedIndex].restaurant.id);
         $(this).find("i").removeClass().addClass(favIcon.Fav);
         showPopUp("Removed location from favorites list");
      }
   });
   
   $(".card").click(function(e) {
      alert("card" + $(this) + "clicked");
   });
   
   $("#submit").on("click", function() {
      var valueSearchBox = $('#getText').val()
      if (valueSearchBox === "") {
         showPopUp("Please enter search Query!");
         return;
      }
      APIcall();
   });

  
});

 /*==========================  Weather Info ========================*/ 
 function success(position) {
   currentLocation.latitude = position.coords.latitude;
   currentLocation.longitude = position.coords.longitude;
   getWeatherUsingLocation(position.coords);
}
 function error(err) {
    currentLocation.latitude = defaultLocation.latitude;
    currentLocation.longitude = defaultLocation.longitude;
    currentLocation.city = "Austin";
    getWeatherUsingCityName(currentLocation.city);
 }
 function getWeatherUsingLocation(loc) {
   var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + loc.latitude + "&lon=" + loc.longitude + "&units=imperial&appid=" + apiKey;
   console.log(url);
   
   fetch(url)  
   .then(function(resp) { return resp.json() }) // Convert data to json
   .then(function(data) {
   getWeatherDetails(data.city.coord,data.list[0].main.temp,data.list[0].weather[0].description, data.list[0].weather[0].icon, data.city.name);
})
   .catch(function() {
      getWeatherDetails(defaultLocation , "00" , "NA", "04d", "Austin");
   });
 }

 function getWeatherDetails(position, Temperature, desc, iconurl, cityName) {
   var iconurl = "https://openweathermap.org/img/wn/" +  iconurl + ".png";
   currentLocation.temp = Math.floor(Temperature) + "\u00B0" + "F";
   currentLocation.description = desc;
   currentLocation.icon = iconurl;
   currentLocation.latitude = position.lat;
   currentLocation.longitude = position.lon;
   currentLocation.city = cityName;
   showWeatherInfo(currentLocation);
 }

 function getWeatherUsingCityName(cityName) {
   let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;
   console.log(url);
   
   fetch(url)  
   .then(function(resp) { return resp.json() }) // Convert data to json
   .then(function(data) {
      getWeatherDetails(data.coord, data.main.temp , data.weather[0].description, data.weather[0].icon, cityName);
   })
   .catch(function() {
      getWeatherDetails(defaultLocation , "00" , "NA", "04d", "Austin");
   });

 }
 function showWeatherInfo(info) {

   let temperture = $("#temp");
   let description = $("#weather");
   let icon = $("#weather-icon");
   temperture.text(currentLocation.city +  "'s Temperature: " +  currentLocation.temp);
   description.text(currentLocation.description);
   icon.attr("src", currentLocation.icon);
 }
 /*==========================================================*/

function showPopUp(message) {
   $("#alert").find("#alertMessage").text(message);
   
   var popup = new Foundation.Reveal($('#alert'));
   popup.open();
}

function createRequest(myurl) {
var request = {
   "async": true,
   "url": myurl,
   "method": "GET",
   "headers": {
      "user-key": "481db5811d8a67ef43f399d26909b835",
      'Content-Type': 'application/x-www-form-urlencoded'
   }
}
return request;
}
function createURL(search, cityID) {

return "https://developers.zomato.com/api/v2.1/search?entity_id="+ cityID + "&entity_type=city&q="+  search +  "&count=" + 9 ;
}
function APIcall() {
var valueDropdown = $('#select_id').val();
var valueSearchBox = $('#getText').val()
let url = createURL(valueSearchBox, valueDropdown);
let request = createRequest(url);

$.getJSON(request, function(data) {
   if (data.restaurants == null || data.restaurants == "") {
      showPopUp("Something went wrong, Please try again!");
   }
   result = data.restaurants;
   createCard(result);
});
}

   /*==========================  Show map ========================*/ 

function displayMapAt(lat, lon) {
   $("#map")
   .html(
      "<iframe src=\"https://maps.google.com/maps?q=" + lat +  "," + lon + "&z=15&output=embed\"></iframe>");
   }
   /*=============================================================*/
   
   /*========================== Calculate distance ========================*/ 

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
   /*================================================================*/
   
   function checkIfItemIsFavorite(array, _item) {
      if (array == null) {
         return false;
      }
      for (var i=0; i<array.length; i++) {
         if (array[i].id == _item) {
            return true;
         }
      }
      return false;
   }
   
   function makeItNonFavorite(_id) {
      var savedData = localStorage.getItem("FavoritePlaces");
      
      if (savedData != null) { 
         savedData =  JSON.parse(savedData);
         savedData= removeItem(savedData, _id);
         if (savedData.length == 0) {
            localStorage.clear("FavoritePlaces");
         } else {
            localStorage.setItem('FavoritePlaces', JSON.stringify(savedData));
         }

      }
   }
   
   function makeItFavorite() {
      let object = createFavorite(result[selectedIndex]);
      
      var savedData = localStorage.getItem("FavoritePlaces");
      
      if (savedData === null) { 
         favorites = [object];
      } else {
         
         if (filterItem(JSON.parse(savedData), object.id)) {
            favorites = JSON.parse(savedData);
            favorites.push(object);
         }
      }   
      localStorage.setItem('FavoritePlaces', JSON.stringify(favorites));
   }
   
   /*--------------------------------------------------------------
   # Method to save Favorite 
   --------------------------------------------------------------*/
   
   function removeItem(array, _item) {
      
      for (var i=0; i<array.length; i++) {
         if (array[i].id == _item) {
            
            array.splice(i, 1);
            return array;
         } 
      }
      return array;
   }
   // Method to filter items from array
   function filterItem(array, _item) {
      
      for (var i=0; i<array.length; i++) {
         if (array[i].id == _item) {
            return false;
         } 
      }
      return true;
   }
   
   /*--------------------------------------------------------------
   # Create object variable for saving Favorite details
   --------------------------------------------------------------*/
   function createFavorite(info) {
      
      var object = {
         "id": info.restaurant.id,
         "details": info, 
      }
      return object;
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
  // result = result[selectedIndex].restaurant;
   
   var modal = $("#modalDetail");
   modal.find( "#modal-title").text(result[selectedIndex].restaurant.name);
   modal.find( "#modalCuisine").text(result[selectedIndex].restaurant.cuisines);
   modal.find( "#modalPrice").text(getPriceText(parseInt(result[selectedIndex].restaurant.price_range)));
   modal.find( "#modalRatingText").text(result[selectedIndex].restaurant.user_rating.aggregate_rating);
   modal.find( "#modaladdres").text(result[selectedIndex].restaurant.location.address); 
   modal.find( "#modalphone").text(result[selectedIndex].restaurant.phone_numbers);
   modal.find( "#timing").text(result[selectedIndex].restaurant.timings);
   modal.find( "#offers").text(result[selectedIndex].restaurant.offers);
   modal.find( "#Highlights").text(getHighlight(result[selectedIndex].restaurant.highlights));
   modal.find( "#icon-img").attr("src", getThumbImage(result[selectedIndex].restaurant.thumb));
   result[selectedIndex].restaurant.has_online_delivery == "1" ? modal.find( "#modalDelivery").text("YES").attr("style", "color: green;") :       modal.find( "#modalDelivery").text("NO").attr("style", "color: red;");
   displayMapAt(result[selectedIndex].restaurant.location.latitude, result[selectedIndex].restaurant.location.longitude);

   var savedData = localStorage.getItem("FavoritePlaces");
   savedData = JSON.parse(savedData);
         
    if (checkIfItemIsFavorite(savedData, result[selectedIndex].restaurant.id)) {
            modal.find( "#modalFavorite").find("i").removeClass().addClass(favIcon.nonFav); 
   } else {
      modal.find( "#modalFavorite").find("i").removeClass().addClass(favIcon.Fav);
   }
   }
   function clickCard1(id) {
      selectedIndex = parseInt(id);
      var modal = $("#modalDetail");
      var name = modal.find( "#modal-title");
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
      var highlights = modal.find( "#Highlights");

      cusine.text(result[selectedIndex].restaurant.cuisines);
      name.text(result[selectedIndex].restaurant.name);
      rating.text(result[selectedIndex].restaurant.user_rating.aggregate_rating);
      address.text(result[selectedIndex].restaurant.location.address);
      phone.text(result[selectedIndex].restaurant.phone_numbers);
      timing.text(result[selectedIndex].restaurant.timings);
      offers.text(result[selectedIndex].restaurant.offers);
      
      displayMapAt(result[selectedIndex].restaurant.location.latitude, result[selectedIndex].restaurant.location.longitude);
      var thumb = modal.find("#icon-img");

      thumb.attr("src", result[selectedIndex].restaurant.thumb);
      thumb.attr("onError", "this.onerror=null;this.src='./Assets/images/img.png';")
      let pricetext = "";
      let highText = "";

      for (var i=0; i<result[selectedIndex].restaurant.highlights.length; i++) {
         highText +=  result[selectedIndex].restaurant.highlights[i] + ",";
      }
      highlights.text(highText);


      for (var i=0; i<parseInt(result[selectedIndex].restaurant.price_range); i++) {
         pricetext += "$";
      }
      price.text(pricetext);

      let hasdelivery = result[selectedIndex].restaurant.has_online_delivery;
      
      if (hasdelivery == "1") {
         delivery.text("YES");
         delivery.attr("style", "color: green;");
      } else {
         delivery.text("NO");
         delivery.attr("style", "color: red;");

      }
     
      var savedData = localStorage.getItem("FavoritePlaces");
      savedData = JSON.parse(savedData);
            
       if (checkIfItemIsFavorite(savedData, result[selectedIndex].restaurant.id)) {
         favButton.find("i").removeClass().addClass(favIcon.nonFav); 
      } else {
         favButton.find("i").removeClass().addClass(favIcon.Fav);
      }
      
   }
   
   function createCard(response) {      
      var string = "";
      var name = "";
      var cuisines = "";
      var rating = "";
      var icon = "";
      var favButton = "";
      $('#card').html('');
      
      $.each(response, function (i) {
         var dist = distance(response[i].restaurant.location.latitude,response[i].restaurant.location.longitude, currentLocation.latitude, currentLocation.longitude );
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
         string += '  <div class="cell"> <div class="card card-size" onclick="clickCard(this.id)" data-open="modalDetail" id="' + i+ '">  <span class="card-image text-center">  <img class="card-image" src=' + icon + '></span><br> <span class="card-title">' + name +'<span><br> ' + rating + '<i class="fas fa-star"></i> </span> </span><br> <span class="card-cuisine">Cuisine(s): '+ cuisines + '</span> <span class="card-dist"> <strong> Distance: </strong>'+ dist +' miles</span>   </div> </div>'
     //    string += '<div class="cell"> <div class="card card-size" onclick="clickCard(this.id)" data-open="modalDetail" id='+ i + '"> <div class= "text-center">  <img class="card-image" src=' + icon + '> </div> <h6 class="card-title">' + name + " " + rating + " - <i class='fas fa-star'></i>" + rating + '</h6><br><p><span class="card-cuisine">Cuisine(s): </span><br>' + cuisines + '<br> <span class="card-dist text-primary">Distance:<br> ' + dist+ ' miles </span> </p> </div> </div>';
      })
      $('#card').append(string);
   }
