
var searchEl = $("#search-text");
var categoryEl = $("#category");

/*================Page load method  ================*/
$(document).ready(function() { 
  
    ///=====   Button click events  ===== ////
    $( "#submit" ).click(function() {
        alert("submit button clicked" + " AND searchtext: " + searchEl.val() +  " ANd category: "+ categoryEl.val());
    })
  });
