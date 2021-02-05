var businessId = {
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

$.ajax({
    dataType: "json",
    url: "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=XMAVIEZPOP0WG0IT4JHIYOY04QJF4QHBKRUEJUWRYUEHID30&client_secret=LMYDERWOSS4OPZUAIZQTQWTZBHWLHHVAK4FHTDYZRPIVTAYF&v=20210204",
    data: {},
    success: function(data) {

        businessId.id = data.response.venues[0].id;
        businessId.category = data.response.venues[0].categories[0].name;
        businessId.name = data.response.venues[0].name;
        businessId.location.city = data.response.venues[0].location.city;
        businessId.location.state = data.response.venues[0].location.state;
        businessId.location.lat = data.response.venues[0].location.lat;
        businessId.location.lng = data.response.venues[0].location.lng;

        console.log(businessId.id);
    }
  });

  $.ajax({
    dataType: "json",
    url: "https://api.foursquare.com/v2/venues/49eeaf08f964a52078681fe3?client_id=XMAVIEZPOP0WG0IT4JHIYOY04QJF4QHBKRUEJUWRYUEHID30&client_secret=LMYDERWOSS4OPZUAIZQTQWTZBHWLHHVAK4FHTDYZRPIVTAYF&v=20210204",
    data: {},
    success: function(data) {
        businessId.phone = data.response.venue.contact.phone;
        businessId.location.address = data.response.venue.location.address;
        businessId.rating = (data.response.venue.rating/2);
        displayBusiness();
        console.log(data);
    }
  });

  function displayBusiness(){
    var idEl = document.querySelector("#results");

    var name = document.createElement("h1");
    var phoneNum = document.createElement("h5");
    var address = document.createElement("h5");
    var rating = document.createElement("h5");
  
    rating.textContent = `Rating: ${businessId.rating}`;
    name.textContent = `${businessId.name}`;
    phoneNum.textContent = `Phone Number: ${businessId.phone}`;
    address.textContent = `Address: ${businessId.location.address}, ${businessId.location.city}, ${businessId.location.state}`;

    idEl.append(name, rating, phoneNum, address);
}