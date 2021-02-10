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
}
