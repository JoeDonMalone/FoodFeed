var clientID = "2SCGL344NNRYIHGXIFUBEUL3L0YWO0OPGLYYHTMDDIFZSQGH";
var secretID= "LMDVNIUMOK4AA2MODOR1MQNRK2WCOII4IWHSIBVPR3RWOVSE";
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

var response = {
  id: "",
  name: "",
  address: "",
  url: "",
  lat: "",
  lon: "",
  cuisines: "",
  currency: "",
  average_cost_for_two: "",
  highlights: "",
  timings: "",
  aggregate_rating: "",
  rating_text: "",
  featured_image: "",
  phone_numbers: "",
  offers: "",
}
var response2 = [
  {
     "restaurant":{
        "R":{
           "res_id":16876154,
           "is_grocery_store":false,
           "has_menu_status":{
              "delivery":-1,
              "takeaway":-1
           }
        },
        "apikey":"d710754ce67200fb6fb9b5e26139f50e",
        "id":"16876154",
        "name":"&pizza",
        "url":"https://www.zomato.com/washington-dc/pizza-atlas-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location":{
           "address":"1118 H Street Ne 20002",
           "locality":"Atlas District",
           "city":"Washington DC",
           "city_id":283,
           "latitude":"38.9003780000",
           "longitude":"-76.9907811000",
           "zipcode":"20002",
           "country_id":216,
           "locality_verbose":"Atlas District, Washington DC"
        },
        "switch_to_order_menu":0,
        "cuisines":"Italian, Pizza, Vegetarian",
        "timings":"11 AM to 11 PM (Mon-Wed, Sun), 11 AM to 12 Midnight (Thu), 11 AM to 4 AM (Fri-Sat)",
        "average_cost_for_two":10,
        "price_range":1,
        "currency":"$",
        "highlights":[
           "Delivery",
           "Lunch",
           "Serves Alcohol",
           "Credit Card",
           "Takeaway Available",
           "Dinner",
           "Vegetarian Friendly",
           "Kid Friendly",
           "Wifi",
           "Fullbar",
           "Indoor Seating"
        ],
        "offers":[
           
        ],
        "opentable_support":0,
        "is_zomato_book_res":0,
        "mezzo_provider":"OTHER",
        "is_book_form_web_view":0,
        "book_form_web_view_url":"",
        "book_again_url":"",
        "thumb":"",
        "user_rating":{
           "aggregate_rating":"4.0",
           "rating_text":"Very Good",
           "rating_color":"5BA829",
           "rating_obj":{
              "title":{
                 "text":"4.0"
              },
              "bg_color":{
                 "type":"lime",
                 "tint":"600"
              }
           },
           "votes":41
        },
        "all_reviews_count":12,
        "photos_url":"https://www.zomato.com/washington-dc/pizza-atlas-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count":132,
        "menu_url":"https://www.zomato.com/washington-dc/pizza-atlas-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image":"",
        "medio_provider":false,
        "has_online_delivery":0,
        "is_delivering_now":0,
        "store_type":"",
        "include_bogo_offers":true,
        "deeplink":"zomato://restaurant/16876154",
        "is_table_reservation_supported":0,
        "has_table_booking":0,
        "events_url":"https://www.zomato.com/washington-dc/pizza-atlas-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers":"(202) 839-8576, (202) 558-7549",
        "all_reviews":{
           "reviews":[
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              }
           ]
        },
        "establishment":[
           "Pizzeria"
        ],
        "establishment_types":[
           
        ]
     }
  },
  {
     "restaurant":{
        "R":{
           "res_id":16876829,
           "is_grocery_store":false,
           "has_menu_status":{
              "delivery":-1,
              "takeaway":-1
           }
        },
        "apikey":"d710754ce67200fb6fb9b5e26139f50e",
        "id":"16876829",
        "name":"pizza hut",
        "url":"https://www.zomato.com/washington-dc/pizza-u-street-shaw?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location":{
           "address":"1250 U Street NW, Washington 20001",
           "locality":"U Street/Shaw",
           "city":"Washington DC",
           "city_id":283,
           "latitude":"38.9168127000",
           "longitude":"-77.0287941000",
           "zipcode":"20001",
           "country_id":216,
           "locality_verbose":"U Street/Shaw, Washington DC"
        },
        "switch_to_order_menu":0,
        "cuisines":"Italian, Pizza, Vegetarian",
        "timings":"11 AM to 11 PM (Mon, Tue, Wed, Sun), 11 AM to 1 AM (Thu),11 AM to 4 AM (Fri-Sat)",
        "average_cost_for_two":0,
        "price_range":1,
        "currency":"$",
        "highlights":[
           "Dinner",
           "Credit Card",
           "Takeaway Available",
           "Lunch",
           "Serves Alcohol",
           "Vegetarian Friendly",
           "Beer",
           "Wine",
           "Indoor Seating",
           "Wifi",
           "Vegan Options"
        ],
        "offers":[
           
        ],
        "opentable_support":0,
        "is_zomato_book_res":0,
        "mezzo_provider":"OTHER",
        "is_book_form_web_view":0,
        "book_form_web_view_url":"",
        "book_again_url":"",
        "thumb":"",
        "user_rating":{
           "aggregate_rating":"3.7",
           "rating_text":"Good",
           "rating_color":"9ACD32",
           "rating_obj":{
              "title":{
                 "text":"3.7"
              },
              "bg_color":{
                 "type":"lime",
                 "tint":"600"
              }
           },
           "votes":14
        },
        "all_reviews_count":4,
        "photos_url":"https://www.zomato.com/washington-dc/pizza-u-street-shaw/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count":5,
        "menu_url":"https://www.zomato.com/washington-dc/pizza-u-street-shaw/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image":"",
        "medio_provider":false,
        "has_online_delivery":0,
        "is_delivering_now":0,
        "store_type":"",
        "include_bogo_offers":true,
        "deeplink":"zomato://restaurant/16876829",
        "is_table_reservation_supported":0,
        "has_table_booking":0,
        "events_url":"https://www.zomato.com/washington-dc/pizza-u-street-shaw/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers":"(202) 733-1286",
        "all_reviews":{
           "reviews":[
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              }
           ]
        },
        "establishment":[
           "Pizzeria"
        ],
        "establishment_types":[
           
        ]
     }
  },
  {
     "restaurant":{
        "R":{
           "res_id":16878349,
           "is_grocery_store":false,
           "has_menu_status":{
              "delivery":-1,
              "takeaway":-1
           }
        },
        "apikey":"d710754ce67200fb6fb9b5e26139f50e",
        "id":"16878349",
        "name":"pizzerai ",
        "url":"https://www.zomato.com/washington-dc/pizza-1-downtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location":{
           "address":"1400 K Street North West, Washington 20005",
           "locality":"Downtown",
           "city":"Washington DC",
           "city_id":283,
           "latitude":"38.9023488000",
           "longitude":"-77.0326246000",
           "zipcode":"20005",
           "country_id":216,
           "locality_verbose":"Downtown, Washington DC"
        },
        "switch_to_order_menu":0,
        "cuisines":"Italian, Pizza, Vegetarian",
        "timings":"11 AM to 11 PM (Mon, Tue, Wed, Sun), 11 AM to 12 Midnight (Thu),11 AM to 4 AM (Fri-Sat)",
        "average_cost_for_two":10,
        "price_range":1,
        "currency":"$",
        "highlights":[
           "Credit Card",
           "Takeaway Available",
           "Lunch",
           "Delivery",
           "No Alcohol Available",
           "Dinner",
           "Kid Friendly",
           "Vegetarian Friendly",
           "Table booking recommended",
           "Indoor Seating",
           "Vegan Options"
        ],
        "offers":[
           
        ],
        "opentable_support":0,
        "is_zomato_book_res":0,
        "mezzo_provider":"OTHER",
        "is_book_form_web_view":0,
        "book_form_web_view_url":"",
        "book_again_url":"",
        "thumb":"",
        "user_rating":{
           "aggregate_rating":"3.5",
           "rating_text":"Good",
           "rating_color":"9ACD32",
           "rating_obj":{
              "title":{
                 "text":"3.5"
              },
              "bg_color":{
                 "type":"lime",
                 "tint":"500"
              }
           },
           "votes":9
        },
        "all_reviews_count":5,
        "photos_url":"https://www.zomato.com/washington-dc/pizza-1-downtown/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count":7,
        "menu_url":"https://www.zomato.com/washington-dc/pizza-1-downtown/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image":"",
        "medio_provider":false,
        "has_online_delivery":0,
        "is_delivering_now":0,
        "store_type":"",
        "include_bogo_offers":true,
        "deeplink":"zomato://restaurant/16878349",
        "is_table_reservation_supported":0,
        "has_table_booking":0,
        "events_url":"https://www.zomato.com/washington-dc/pizza-1-downtown/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers":"(202) 682-1503",
        "all_reviews":{
           "reviews":[
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              }
           ]
        },
        "establishment":[
           "Pizzeria"
        ],
        "establishment_types":[
           
        ]
     }
  },
  {
     "restaurant":{
        "R":{
           "res_id":16879091,
           "is_grocery_store":false,
           "has_menu_status":{
              "delivery":-1,
              "takeaway":-1
           }
        },
        "apikey":"d710754ce67200fb6fb9b5e26139f50e",
        "id":"16879091",
        "name":"pizza place",
        "url":"https://www.zomato.com/washington-dc/pizza-2-downtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location":{
           "address":"1215 Connecticut Avenue North West, Washington 20036",
           "locality":"Downtown",
           "city":"Washington DC",
           "city_id":283,
           "latitude":"38.9064300000",
           "longitude":"-77.0410470000",
           "zipcode":"20036",
           "country_id":216,
           "locality_verbose":"Downtown, Washington DC"
        },
        "switch_to_order_menu":0,
        "cuisines":"Italian, Pizza, Vegetarian",
        "timings":"11 AM to 11 PM (Mon, Tue, Wed, Sun), 11 AM to 3 AM (Thu),11 AM to 4 AM (Fri-Sat)",
        "average_cost_for_two":10,
        "price_range":1,
        "currency":"$",
        "highlights":[
           "Credit Card",
           "Takeaway Available",
           "Lunch",
           "Delivery",
           "Dinner",
           "Kid Friendly",
           "Indoor Seating",
           "Vegetarian Friendly"
        ],
        "offers":[
           
        ],
        "opentable_support":0,
        "is_zomato_book_res":0,
        "mezzo_provider":"OTHER",
        "is_book_form_web_view":0,
        "book_form_web_view_url":"",
        "book_again_url":"",
        "thumb":"",
        "user_rating":{
           "aggregate_rating":"3.3",
           "rating_text":"Average",
           "rating_color":"CDD614",
           "rating_obj":{
              "title":{
                 "text":"3.3"
              },
              "bg_color":{
                 "type":"lime",
                 "tint":"500"
              }
           },
           "votes":7
        },
        "all_reviews_count":4,
        "photos_url":"https://www.zomato.com/washington-dc/pizza-2-downtown/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count":6,
        "menu_url":"https://www.zomato.com/washington-dc/pizza-2-downtown/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image":"",
        "medio_provider":false,
        "has_online_delivery":0,
        "is_delivering_now":0,
        "store_type":"",
        "include_bogo_offers":true,
        "deeplink":"zomato://restaurant/16879091",
        "is_table_reservation_supported":0,
        "has_table_booking":0,
        "events_url":"https://www.zomato.com/washington-dc/pizza-2-downtown/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers":"(202) 450-4926",
        "all_reviews":{
           "reviews":[
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              }
           ]
        },
        "establishment":[
           "Pizzeria"
        ],
        "establishment_types":[
           
        ]
     }
  },
  {
     "restaurant":{
        "R":{
           "res_id":16878346,
           "is_grocery_store":false,
           "has_menu_status":{
              "delivery":-1,
              "takeaway":-1
           }
        },
        "apikey":"d710754ce67200fb6fb9b5e26139f50e",
        "id":"16878346",
        "name":"pizza palace ",
        "url":"https://www.zomato.com/washington-dc/pizza-downtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location":{
           "address":"1005 E Street NW, Washington 20037",
           "locality":"Downtown",
           "city":"Washington DC",
           "city_id":283,
           "latitude":"38.8962554000",
           "longitude":"-77.0263564000",
           "zipcode":"20037",
           "country_id":216,
           "locality_verbose":"Downtown, Washington DC"
        },
        "switch_to_order_menu":0,
        "cuisines":"Italian, Pizza, Vegetarian",
        "timings":"11 AM to 11 PM (Mon, Tue, Wed, Thu, Sun), 11 AM to 12 Midnight (Fri-Sat)",
        "average_cost_for_two":10,
        "price_range":1,
        "currency":"$",
        "highlights":[
           "Credit Card",
           "Takeaway Available",
           "Lunch",
           "Delivery",
           "No Alcohol Available",
           "Dinner",
           "Kid Friendly",
           "Vegetarian Friendly",
           "Table booking recommended",
           "Indoor Seating",
           "Vegan Options"
        ],
        "offers":[
           
        ],
        "opentable_support":0,
        "is_zomato_book_res":0,
        "mezzo_provider":"OTHER",
        "is_book_form_web_view":0,
        "book_form_web_view_url":"",
        "book_again_url":"",
        "thumb":"",
        "user_rating":{
           "aggregate_rating":"3.1",
           "rating_text":"Average",
           "rating_color":"CDD614",
           "rating_obj":{
              "title":{
                 "text":"3.1"
              },
              "bg_color":{
                 "type":"lime",
                 "tint":"500"
              }
           },
           "votes":8
        },
        "all_reviews_count":3,
        "photos_url":"https://www.zomato.com/washington-dc/pizza-downtown/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count":4,
        "menu_url":"https://www.zomato.com/washington-dc/pizza-downtown/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image":"",
        "medio_provider":false,
        "has_online_delivery":0,
        "is_delivering_now":0,
        "store_type":"",
        "include_bogo_offers":true,
        "deeplink":"zomato://restaurant/16878346",
        "is_table_reservation_supported":0,
        "has_table_booking":0,
        "events_url":"https://www.zomato.com/washington-dc/pizza-downtown/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers":"(202) 347-5056",
        "all_reviews":{
           "reviews":[
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              },
              {
                 "review":[
                    
                 ]
              }
           ]
        },
        "establishment":[
           "Pizzeria"
        ],
        "establishment_types":[
           
        ]
     }
  }
]
let map, infoWindow;
/*================Page load method  ================*/
$(document).ready(function() {
 //  initializeSearchHistory();
   getLocation();
   $("#modalLauncher").click(function (e) {
      $('#exampleModal1').foundation('reveal', 'open');
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
      alert("Please enter search criteria");

    return;
   }
   select();
  });
   ///=====   Button click events  ===== ////
   $( "#submi2t" ).click(function() {
      
     addToSearchHistory();
     console.log("submit button clicked" + " AND searchtext: " + searchEl.val() +  " ANd category: "+ categoryEl.val());
   })


  // https://itunes.apple.com/search?term=jack+johnson
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      currentLocation.lat = lat;
      currentLocation.lon = long;

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
          // 'results': {
          //   ''
          // }
        }
    ]
    localStorage.setItem('Recent Places Searches', JSON.stringify(recentSearches));
  };

  function select() {
   var valueDropdown = $('#select_id').val();
   var valueSearchBox = $('#getText').val()
   var searchCity = "&q=" + valueSearchBox;
   let url = "https://developers.zomato.com/api/v2.1/search?entity_id="+ valueDropdown + "&entity_type=city&q="+ valueSearchBox+  "&count=" + 12;

   var settings = {
    "async": true,
    "url": url,
    //"url": "https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&q=burrito&count=10",
    "method": "GET",
    "headers": {
       "user-key": "481db5811d8a67ef43f399d26909b835",
        'Content-Type': 'application/x-www-form-urlencoded'
    }
   }
   $.getJSON(settings, function(data) {
       result = data.restaurants;
      createCard(data.restaurants);
   });
  }
 });

function displayMapAt(lat, lon, zoom) {

 let la1= "33.8404245";
 let lon1 = "-118.3574995";

    $("#map")
    .html(
    "<iframe src=\"http://maps.google.com/maps?q=" + la1 +  "," + lon1 + "&z=15&output=embed\"></iframe>");
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
function clickCard(id) {
   console.log("click " + id);
   console.log("click " + parseInt(id));
   let index = parseInt(id);

      var modal = $("#modalDetail");

      console.log(result[index]);

      console.log("result1 : "+ result[index].restaurant.name);
      $("#name").text(result[index].restaurant.name);

        $("#modalCuisine").text(result[index].restaurant.cuisines);
         $("#modalPrice").text(result[index].restaurant.price_range);
         $("#modalRatingText").text(result[index].restaurant.userRating.aggregate_rating + " " + info.userRating.rating_text);

         $("#Highlights").text(result[index].restaurant.highlights);
         $("#modaladdres").text(result[index].restaurant.location.address);
         $("#modalphone").text(result[index].restaurant.phone_numbers);
         $("#timing").text(result[index].restaurant.timings);
         $("#offers").text(result[index].restaurant.offers);
         $("#modalDelivery").text(result[index].restaurant.has_online_delivery);

   
         /*   var highlights = $("#modalHighlights")
      var address = $("#modaladdres")
      var phoneNo = $("#modalphone")
      var hours = $("#timing")
      var offers = $("#offers")
      var delivery  = $("#modalDelivery")
*/

  // alert(id);

}
function createCard(response) {

   console.log("result1 : "+ result[1].restaurant.name);

   var string = "";
   var name = "";
   var cuisines = "";
   var rating = "";
   var icon = "";

   $.each(response, function (i) {
      var dist = distance(response[i].restaurant.location.latitude,response[i].restaurant.location.longitude, currentLocation.lat, currentLocation.lon );

      name = response[i].restaurant.name;
      cuisines = response[i].restaurant.cuisines;
      rating = response[i].restaurant.user_rating.aggregate_rating;
      icon = response[i].restaurant.thumb;
      if (icon == "" || icon == null) {
         icon = "./Assets/images/img.jpeg";
      }

      if (i%3 == 0) {
         string += '<div class="grid-x grid-margin-x small-up-2 medium-up-3">';
      }
      string += '<div class="cell"> <div class="card" onclick="clickCard(this.id)" data-open="modalDetail" id='+ i + '"> <img class="card-image" src=' + icon + '> <h6 class="card-title">' + name + '</h6> <p class="card-author">' + cuisines + '<span class="card-icon">  ' + dist +   'miles </span></p> </div> </div>';
  })
  $('#card').append(string);
}