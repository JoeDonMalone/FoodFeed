var apiKey = "662057d093b416978d68fd9b93c95087";
var searchEl = $("#search-text");
var categoryEl = $("#category option:selected");
var locationEl = $("#location");
var businessDetailContainerEl = $("#business-detail");
var result = [];
var currentLocation = {
   lat: "",
   lon: ""
}
var result = "";
var selected = 0;
var current_page = 0;

let map, infoWindow;
var favorites; 

/*================Page load method  ================*/
$(document).ready(function() {
   //  initializeSearchHistory();
   getLocation();

   $(".page").click(function (e) {
     console.log(e);
   });
   $("#modalWebsite").click(function (e) {
      console.log(result[selectedIndex].restaurant.url);
      let website = result[selectedIndex].restaurant.url;
      window.open(website);
   });
   $("#modalMenu").click(function (e) {
      console.log(result[selectedIndex].restaurant.menu_url);
      let menu = result[selectedIndex].restaurant.menu_url;
      window.open(menu);

   });
   $("#modalLauncher").click(function (e) {
      $('#exampleModal1').foundation('reveal', 'open');
   });
   
   $("#modalFavorite").click( function() {
      
      var className = $(this).find("i") .attr("class");
      if (className == "fa fa-thumbs-up") {
         // make it favorite
         makeItFavorite();
         // $(this).find("i").removeClass().addClass("fa fa-thumbs-down");
         
      } else {
         // $(this).find("i").removeClass().addClass("fa fa-thumbs-up");
         makeItNonFavorite(result[selectedIndex].restaurant.id);
      }
      
   });
   
   $(".card").click(function(e) {
      alert("card" + $(this) + "clicked");
      
   });
   //displayMapAt(38.9168127,-77.0309828,5);
   // initializeSearchHistory();
   // getLocation();
   
   $("#submit").on("click", function() {
      var valueSearchBox = $('#getText').val()
      if (valueSearchBox === "") {
         showPopUp("Please enter search Query!");
         return;
      }
      select();
   });
   ///=====   Button click events  ===== ////
   $( "#submi2t" ).click(function() {
      
      addToSearchHistory();
      console.log("submit button clicked" + " AND searchtext: " + searchEl.val() +  " ANd category: "+ categoryEl.val());
   })
   

   function getLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
         let lat = position.coords.latitude;
         let long = position.coords.longitude;
         currentLocation.lat = lat;
         currentLocation.lon = long;
         
         callWeatherInfo(lat, long);
         
      });
   }
   function myFunction(button) {
      console.log(button.id);
   }
   function showPopUp(message) {
      console.log($("#alert"));
      $("#alert").find("#alertMessage").text(message);
      
      var popup = new Foundation.Reveal($('#alert'));
      popup.open();
   }
   function callWeatherInfo( latitude, longitude ) {
      var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude+ "&lon=" + longitude +"&units=imperial&appid=" + apiKey;
      // console.log(url);
      
      fetch(url)  
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
         //
         // console.log(data);
         // console.log(data.current.temp);
         
         let temp = document.getElementById("temp");
         temp.innerText = "Current Temperature: " +  Math.floor(data.current.temp) + "\u00B0" + "F";
         let icon = document.getElementById("weather-icon");
         let details = document.getElementById("weather");
         
         var todayiconurl = "http://openweathermap.org/img/wn/" +  data.current.weather[0].icon + ".png";
         // console.log(todayiconurl);
         icon.setAttribute("src", todayiconurl);
         // console.log(data.current.weather[0].description);
         
         details.innerText = data.current.weather[0].description;
         
         //let icon = position.coords.longitude;
         //getWeather(data); 
         // toggleFrontside(false);
      })
      .catch(function() {
         // catch any errors
      });
   }
   
   
   
   function initializeSearchHistory() {
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

function initializeSearchHistory() {
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
   }
]
localStorage.setItem('Recent Places Searches', JSON.stringify(recentSearches));
};

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
function createURL(search, cityID,start) {

   return "https://developers.zomato.com/api/v2.1/search?entity_id="+ cityID + "&entity_type=city&q="+  search +  "&count=" + 9 + "&start=" +  start;
}
function newwin() {   
   console.log($(this).id);
            
   //myWindow=window.open('lead_data.php?leadid=1','myWin','width=400,height=650')
}
function changePage(id) {
   console.log($(this).id);

 //  select(pageNo);

}
function nextPage() {
   if (current_page < numPages()) {
      current_page++;
      select(current_page);
      //changePage(current_page);
  }
}
function prevPage() {
   if (current_page > 1) {
      current_page--;
      select(current_page);

      changePage(current_page);
  }

}
function select(start) {
   var valueDropdown = $('#select_id').val();
   var valueSearchBox = $('#getText').val()
   let url = createURL(valueSearchBox, valueDropdown, start);
   let request = createRequest(url);
   
   $.getJSON(request, function(data) {
      if (data.restaurants == null || data.restaurants == "") {
         showPopUp("Something went wrong, Please try again!");
      }
      result = data.restaurants;
      createCard(result);
   });
}
});

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
         localStorage.setItem('FavoritePlaces', JSON.stringify(savedData));
      }
   }
   
   function makeItFavorite() {
      let object = createFavorite(result[selectedIndex]);
      console.log(object);
      
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
         console.log(array[i].id, _item);
         if (array[i].id == _item) {
            console.log("in delete" + array[i].id + _item);
            
            array.splice(1, 1);
            return array;
         } 
      }
      return array;
   }
   // Method to filter items from array
   function filterItem(array, _item) {
      
      for (var i=0; i<array.length; i++) {
         console.log(array[i].id, _item);
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
         "restaurant": info, 
      }
      return object;
   }

   function clickCard(id) {
      selectedIndex = parseInt(id);
     
      let index = parseInt(id);
      console.log(result[index].restaurant);
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
      var highlights = modal.find( "#Highlights");

      cusine.text(result[selectedIndex].restaurant.cuisines);
      name.text(result[selectedIndex].restaurant.name);
      rating.text(result[selectedIndex].restaurant.user_rating.aggregate_rating);
      address.text(result[selectedIndex].restaurant.location.address);
      phone.text(result[selectedIndex].restaurant.phone_numbers);
      timing.text(result[selectedIndex].restaurant.timings);
      offers.text(result[selectedIndex].restaurant.offers);
      
      displayMapAt(result[selectedIndex].restaurant.location.latitude, result[selectedIndex].restaurant.location.longitude);
      var thumb = $("#icon-img");
      // var website = $("#modalWebsite");
      thumb.attr("src", result[selectedIndex].restaurant.thumb);
      thumb.attr("onError", "this.onerror=null;this.src='./Assets/images/img.png';")

      // website.attr("onclick", open(result[index].restaurant.url));

      displayMapAt(result[index].restaurant.location.latitude, result[index].restaurant.location.longitude);
      let pricetext = "";
      
      for (var i=0; i<parseInt(result[selectedIndex].restaurant.price_range); i++) {
         pricetext += "$";
      }
      price.text(pricetext);
      
      
      let hasdelivery = result[selectedIndex].restaurant.has_online_delivery;
      
      if (hasdelivery == "1") {
         delivery.text(" :YES");
      } else {
         delivery.text(" :NO");
         
      price.text(" - " + pricetext);


      let hasdelivery = result[selectedIndex].restaurant.has_online_delivery;
      
      if (hasdelivery == "1") {
         delivery.text("YES");
         delivery.attr("color", "green");
      } else {
         delivery.text("NO");
         delivery.attr("color", "red");

      }
      // var highlight = result[selectedIndex].restaurant.highlights;
      // if (highlight.length > 0 ){
      //    let text = "";
      //    for (var i=0 ; i<highlight.length; i++) {
      //       text += " " + highlight[i];
      //          text += highlight[i] + ", ";
      //    }
      //    console.log("higj " + highlight);

      //   highlights.text(text);
         
      // }
      var savedData = localStorage.getItem("FavoritePlaces");
      savedData = JSON.parse(savedData);
      
      favButton.find("i").removeClass().addClass("fa fa-thumbs-up");
      
      if (checkIfItemIsFavorite(savedData, result[selectedIndex].restaurant.id)) {
         favButton.find("i").removeClass().addClass("fa fa-thumbs-up");
      } else {
         favButton.find("i").removeClass().addClass("fa fa-thumbs-down");
         
      }
      
   }
}
function getArray() {
      //var months = ['Jan', 'March', 'April', 'June'];
      var array = result.filter((result,idx) => idx >= 0 && idx < 2)
      console.log(array);
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
         var dist = distance(response[i].restaurant.location.latitude,response[i].restaurant.location.longitude, currentLocation.lat, currentLocation.lon );
         name = response[i].restaurant.name;
         cuisines = response[i].restaurant.cuisines;
         rating = response[i].restaurant.user_rating.aggregate_rating;
         icon = response[i].restaurant.thumb;
         if (icon == "" || icon == null) {
            icon = "./Assets/images/img.png";
         }
         console.log(icon);
         
         if (i%3 == 0) {
            if (i != 0) {
               string += "</div>";

            }
            string += '<div class="grid-x small-up-2 medium-up-3">';
         }
        // string += '<div class="cell"> <div class="card" onclick="clickCard(this.id)" data-open="modalDetail" id='+ i + '"> <div class= "text-center">  <img class="card-image" src=' + icon + '> </div> <h6 class="card-title">' + name + '</h6> <p> <span class="card-cuisine">' + cuisines + '<br> </span> <span class="card-rating">  ' + rating +   '</span> <span class="card-dist">' + dist+ ' miles </span> </p> <button type="button" class="success button">Save</button> <i class="fa fa-map-marker"></i><i class="fa fa-heart-o" aria-hidden="true"></i>   test  </button>  </div> </div>';
         string += '<div class="cell"> <div class="card card-size" onclick="clickCard(this.id)" data-open="modalDetail" id='+ i + '"> <div class= "text-center">  <img class="card-image" src=' + icon + '> </div> <h6 class="card-title">' + name + " - <i class='fas fa-star'></i>" + rating + '</h6><br><p><span class="card-cuisine">Cuisine(s): </span><br>' + cuisines + '<br> <span class="card-dist text-primary">Distance:<br> ' + dist+ ' miles </span> </p> </div> </div>';
      })
      
      $('#card').append(string);
   }
