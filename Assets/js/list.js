var venue = {
    id: "",
    phone: "",
    category: "",
    name: "",
    rating: "",
    location: {
        address: "",
        city: "",
        state: "",
        lat: "",
        lng: "",
    }
}

// var businessModel = {
//     id: "",
//     name: "",
//     summary: "",
//     address: "",
//     postalCode: "",
//     state: "",
//     phoneNo: "",
//     lat: "",
//     lon: "",
//     tipCount:""
//   }

var clientId = "XMAVIEZPOP0WG0IT4JHIYOY04QJF4QHBKRUEJUWRYUEHID30";
var clientSecret = "LMYDERWOSS4OPZUAIZQTQWTZBHWLHHVAK4FHTDYZRPIVTAYF";
var categoryEl = $("#category option:selected");

// function getCategory() {
//   var category = "food";

//   if (category) {

//     getVenue(category);
//   }
// }

function getVenue() {
  var apiUrl = "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20210204";

  fetch(apiUrl)
  .then(function(response){
    let data = response.json();
    console.log(data);
    return data;
  })
  .then(function(data){
    venue.id = data.response.venues[0].id;
    venue.category = data.response.venues[0].categories[0].name;
    venue.name = data.response.venues[0].name;
    venue.location.city = data.response.venues[0].location.city;
    venue.location.state = data.response.venues[0].location.state;
    venue.location.lat = data.response.venues[0].location.lat;
    venue.location.lng = data.response.venues[0].location.lng;

    getExtraDetails();
  })
}

function getExtraDetails() {
  var apiUrl = "https://api.foursquare.com/v2/venues/49eeaf08f964a52078681fe3?client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20210204";

  fetch(apiUrl)
  .then(function(response){
    let data = response.json();
    return data;
  })
  .then(function(data){
    venue.phone = data.response.venue.contact.phone;
    venue.location.address = data.response.venue.location.address;
    venue.rating = (data.response.venue.rating/2);
    displayBusiness();
  })
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

// function getseachList(data) {
//     var itemList = data.response.venues.items;
//       for (var i=0; i<itemList.length; i++ ){
//         // var venue = Object.create(business);

//         // venue.id = data.response.venues[0].id;
//         // venue.category = data.response.venues[0].categories[0].name;
//         // venue.name = data.response.venues[0].name;
//         // venue.location.city = data.response.venues[0].location.city;
//         // venue.location.state = data.response.venues[0].location.state;
//         // venue.location.lat = data.response.venues[0].location.lat;
//         // venue.location.lng = data.response.venues[0].location.lng;

//         // let address = itemList[i].venue.location.formattedAddress;

//         // for (var j=0; j<address.length; j++) {
//         //   businessModel.address += address[j];
//         // }
//         // result.push(businessModel);
//         console.log(itemList);
//     }
//     showList();
//     console.log(result);
//   }

getVenue();