var clientID = "2SCGL344NNRYIHGXIFUBEUL3L0YWO0OPGLYYHTMDDIFZSQGH";
var secretID= "LMDVNIUMOK4AA2MODOR1MQNRK2WCOII4IWHSIBVPR3RWOVSE";
var apiKey = "662057d093b416978d68fd9b93c95087";
var searchEl = $("#search-text");
var categoryEl = $("#category option:selected");
var locationEl = $("#location");
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
var restaurant = {
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
var response = [
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
        "name":"&pizza",
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
        "name":"&pizza",
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
        "name":"&pizza",
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
        "name":"&pizza",
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
  //select();
  //showMap();

  displayMapAt(38.9168127,-77.0309828,5);
  initializeSearchHistory();
  getLocation();
 // callSearchAPI();
  // callDetailAPI();
  // callPhotosAPI();
  // callReviews();

  
  $("#getMessage").on("click", function() {
    var valueSearchBox = $('#getText').val()
    if (valueSearchBox === "") {
     return;
    }
    select1();
   });
    ///=====   Button click events  ===== ////
    $( "#submit" ).click(function() {
      addToSearchHistory();
      var valueSearchBox = $('#getText').val()
      if (valueSearchBox === "") {
       return;
      }
    select1();
      console.log("submit button clicked" + " AND searchtext: " + searchEl.val() +  " ANd category: "+ categoryEl.val());
    })


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

  // Example POST method implementation:
async function getCategory(myurl = '') {
  console.log(myurl);

  // Default options are marked with *
  const response = await fetch(myurl, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    crossDomain: true,
    async: true, // no-cors, *cors, same-origin
    url: myurl, // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'user-key': 'd710754ce67200fb6fb9b5e26139f50e',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

  console.log(response.json());

  return response.json(); // parses JSON response into native JavaScript objects
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

    var settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://developers.zomato.com/api/v2.1/search?entity_id=" + 281 + "&entity_type=city&q=" + "Los Angeles" + "&count=5&category=2&cuisines=" ,
     "method": "GET",
     "headers": {
      "user-key": "d710754ce67200fb6fb9b5e26139f50e",
      'Content-Type': 'application/x-www-form-urlencoded'
     }
    }
    $.getJSON(settings, function(data) {
      console.log(data);
      data = data.restaurants;
      $.each(data, function(index, value) {
        var x = data[index];
        var location = x.restaurant.location;

        console.log(x.restaurant.cuisines);
        console.log(x.restaurant.menu_url);

      });
     

    });
  }
  function getResponse() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://developers.zomato.com/api/v2.1/search?entity_id=" + valueDropdown + "&entity_type=city" + searchCity + "&count=5",
      "method": "GET",
      "headers": {
       "user-key": "d710754ce67200fb6fb9b5e26139f50e",
       'Content-Type': 'application/x-www-form-urlencoded'
      }
     }

     $.getJSON(settings, function(data) {
       data = data.restaurants;
        var html = "";
      $.each(data, function(index, value) {
       var x = data[index];
        console.log(typeof x);
            $.each(x, function(index, value) {
              console.log(value.thumb);
              console.log(value.url);
              var location = x.restaurant.location;
              var userRating = x.restaurant.user_rating;
              html += "<a href=" + value.url + " target='_blank' class='action_link'><h2 style='color:red;'><strong>" + value.name + "</strong></h2></a>";

              html += "<div class='data img-rounded'>";
              html += "<div class='rating'>";
              html += "<span title='" + userRating.rating_text + "'><p style='color:white;background-color:#" + userRating.rating_color + ";border-radius:4px;border:none;padding:2px 10px 2px 10px;text-align: center;text-decoration:none;display:inline-block;font-size:16px;float:right;'><strong>" + userRating.aggregate_rating + "</strong></p></span><br>";
              html += "  <strong class='text-info'>" + userRating.votes + " votes</strong>";
              html += "</div>";
              html += "<img  src=" + value.thumb + " alt='Restaurant Image' height='185' width='185'>";
              html += "<img  src= "+ "./"  + "alt='Restaurant Image' height='185' width='185'>";

              html += "  <strong class='text-primary'>" + location.locality + "</strong><br>";
              html += "  <h6 style='color:grey;'><strong>" + location.address + "</strong></h6><hr>";
              html += "  <strong>CUISINES</strong>: " + value.cuisines + "<br>";
              html += "  <strong>COST FOR TWO</strong>: " + value.currency + value.average_cost_for_two + "<br>";
              html += "</div><br>";
            });
            });
      $(".message").html(html);

      return data;
     });
  }

  function showRestaurantDetail() {

  }
  
  function select1() {
    var valueDropdown = $('#select_id').val();
    var valueSearchBox = $('#getText').val()
    var searchCity = "&q=" + valueSearchBox;

    var mydata;
   // mydata = getResponse();
    mydata = response;

   // mydata = getResponse();
    console.log(mydata);
           var html = "";
     $.each(mydata, function(index, value) {
      var x = mydata[index];
       console.log(typeof x);
           $.each(x, function(index, value) {
             console.log(value.thumb);
             console.log(value.url);
             var location = x.restaurant.location;
             var userRating = x.restaurant.user_rating;
             html += "<div class='data img-rounded'>";
             html += "<div class='rating'>";
             html += "<span title='" + userRating.rating_text + "'><p style='color:white;background-color:#" + userRating.rating_color + ";border-radius:4px;border:none;padding:2px 10px 2px 10px;text-align: center;text-decoration:none;display:inline-block;font-size:16px;float:right;'><strong>" + userRating.aggregate_rating + "</strong></p></span><br>";
             html += "  <strong class='text-info'>" + userRating.votes + " votes</strong>";
             html += "</div>";
             html += "<img  src=" + value.thumb + " alt='Restaurant Image' height='185' width='185'>";
             html += "<a href=" + value.url + " target='_blank' class='action_link'><h2 style='color:red;'><strong>" + value.name + "</strong></h2></a>";
             html += "  <strong class='text-primary'>" + location.locality + "</strong><br>";
             html += "  <h6 style='color:grey;'><strong>" + location.address + "</strong></h6><hr>";
             html += "  <strong>CUISINES</strong>: " + value.cuisines + "<br>";
             html += "  <strong>COST FOR TWO</strong>: " + value.currency + value.average_cost_for_two + "<br>";
             html += "</div><br>";
           });
           });
     $("#list").html(html);
    }
 
 // }
});


function displayMapAt(lat, lon, zoom) {

 let la1= "33.8404245";
 let lon1 = "-118.3574995";

    $("#map")
    .html(
    "<iframe src=\"http://maps.google.com/maps?q=" + la1 +  "," + lon1 + "&z=15&output=embed\"></iframe>");
}

