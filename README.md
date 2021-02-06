# Project-1-Group-4

# pages 
https://joedonmalone.github.io/Project-1-Group-4/

# GitRepo
https://github.com/JoeDonMalone/Project-1-Group-4


# App Criteria & Status
01)
     1) Foursquare
     2) Maybe weather api
02)
    1) Foundation
03) 
    Joe Needs to implement recents searches
04)
    In progress
05)
    Structured Well
06)
    Too many alerts that will go away
07)
    deployed
08)
    Interactive 







Favorite places : 

Description:
user can search and save favorite places and its reviews at one place along with directions.

# User story:

USERS 
    Area locals, and tourists alike
    
I WANT 
    We want an app to search places, reviews, addresses and see these thing on live map which drop down for greater detail, within radius of current location. 

SO THAT 
    I can save, recall, 'Go-to' directions, leave reviews, remove pin/favorites


GIVEN a dashboard with form inputs and Dropdowns
WHEN I select the category dropdown
THEN I am preseneted with a list of categories to choose from
WHEN I select a category
THEN I can select a search radius from a dropdown
WHEN I enter a serch radius
THEN I am provided with a list of results within a give radius preference


4. When user enter search criteria and click on Submit, list detail is open with corresponding category m radius.
4. When user clicks on any list item - detail page is open 
5. Detail page should have details like Name, adders, hours, distance 
6. Detail page - user should be able to navigate to that place 
6. Details page -user should be able to view street view 

https://app.moqups.com/53Vl5RFqOD/view/page/a9deca8fe

# API:

google search API https://developers.google.com/places/web-service/search?hl=en_US
https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters 
https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination 
https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY

Place detail API: 
https://developers.google.com/places/web-service/details https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

navigation API: 
https://developers.google.com/maps/documentation/javascript/examples/geometry-headings 
https://maps.googleapis.com/maps/api/directions/json? origin=Toronto&destination=Montreal &key=YOUR_API_KEY

# Tasks: 
1. HTMl page - index.html - 
detail page.html - 
2. CSS - Kyle
3. Javascript {
    google search api: Arti
    google detail api:  Arti 
    google navigation api: Kyle
    street view api: Brodie
    Yelp API - reviews:  Joe
    }
