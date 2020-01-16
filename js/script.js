// //accessiing apiKey from config.json
// var myKey = JSON.parse(apiKey); //convert JSON data into js object
//  console.log (myKey[0].key);
//ask beula which one to use this one or the one below

var GOOGLE_API_KEY = (JSON.parse(apiKey))[0].key;

var googlePlacesScript = document.createElement('script');
googlePlacesScript.src= `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initMap`;
googlePlacesScript.async = true;
googlePlacesScript.defer = true;

document.getElementsByTagName("body")[0].appendChild(googlePlacesScript);

var accomodations = [
  {
    name:'The Rees Lakeside Residences',
    blurb: 'The Rees Residences; surround yourself with bespoke luxury with a unique, True South, New Zealand flavor and breathtaking Queenstown location. ',
    type:'Hotel',
    id:101,
    address:'32 Red Oaks Drive,Queenstown,9300',
    location:'Queenstown',
    phoneNunber:649342768,
    lat: -45.025969,
    long: 168.746782,
    contentGuest:'1-2 Guest',
    contentBeds:'2 Beds',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:2,
    minDays:1,
    maxDays:5,
    price:157,
    image: 'images/Queenstown-hotel1.jpg',
    imageOne: 'images/Queenstown-hotel1.jpg',
    imageTwo: 'images/Queenstown-hotel2.jpg',
    imageThree: 'images/Queenstown-hotel3.jpg',
    mealsOptions:[15.00,20.00,25.00]
  },
  {
    name:'Grand Mercure Wellington',
    blurb: 'Grand Mercure Wellington brings to life the history and culture of the city through anecdotes of design, cuisine and service. ',
    type:'Hotel',
    id:102,
    address:'345 The Terrace, Te Aro, Wellington 6001',
    location:'Wellington',
    phoneNunber:649342768,
    lat: -41.293457,
    long: 174.769555,
    contentGuest:'1-2 Guest',
    contentBeds:'2 Beds',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:2,
    minDays:1,
    maxDays:5,
    price:157.00,
    image: 'images/wellington-hotel1.jpg',
    imageOne: 'images/wellington-hotel1.jpg',
    imageTwo: 'images/wellington-hotel2.jpg',
    imageThree: 'images/wellington-hotel3.jpg',
    mealsOptions:[18.00,20.00,35.00]
  },
  {
    name:'ibis Budget Auckland Airport',
    blurb: 'Ibis Budget Auckland Airport is the only economy option in the airport vicinity boasting all the essentials for a short stopover. Featuring block out blinds, 24 hour reception and onsite complimentary parking facilities. ',
    type:'Hotel',
    id:103,
    address:'2 Leonard Isitt Drive, Mangere, Auckland 2150',
    location:'Auckland',
    phoneNunber:649342768,
    lat: -36.992617,
    long: 174.788165,
    contentGuest:'1-2 Guest',
    contentBeds:'2 Beds',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:2,
    minDays:1,
    maxDays:5,
    price:157.00,
    image: 'images/auckland-hotel1.jpg',
    imageOne: 'images/auckland-hotel1.jpg',
    imageTwo: 'images/auckland-hotel2.jpg',
    imageThree: 'images/auckland-hotel2.jpg',
    mealsOptions:[18.00,20.00,25.00]
  },
  {
    name:'Nomads Queenstown Hostel',
    blurb: 'Nomads Queenstown Backpackers is ideally located in the heart of Queenstown, in New Zealands popular South Island holiday city.',
    type:'Hostel',
    id:104,
    address:'5/11 Church Street, South island, Queenstown 9300',
    location:'Queenstown',
    phoneNunber:649342768,
    lat: -45.032290,
    long: 168.661848,
    contentGuest:'1 Guest',
    contentBeds:'1 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:1,
    minDays:1,
    maxDays:10,
    price:30.00,
    image: 'images/Queenstown-hostel1.jpg',
    imageOne: 'images/Queenstown-hostel1.jpg',
    imageTwo: 'images/Queenstown-hostel2.jpg',
    imageThree: 'images/Queenstown-hostel3.jpg',
    mealsOptions:[15.00,20.00,22.00]
  },
  {
    name:'The Setup on Dixon',
    blurb: 'Located in central Wellington, The Setup Accommodation offers guests free WiFi. It is less than 5 minutes walk from a variety of restaurants, cafes and shops',
    type:'Hostel',
    id:105,
    address:' 15 Dixon Street, Te Aro, Wellington, Wellington 6011',
    location:'Wellington',
    phoneNunber:649342768,
    lat: -41.292156,
    long: 174.778088,
    contentGuest:'1 Guest',
    contentBeds:'1 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:1,
    minDays:1,
    maxDays:10,
    price:30.00,
    image: 'images/wellington-hostel1.jpg',
    imageOne: 'images/wellington-hostel1.jpg',
    imageTwo: 'images/wellington-hostel2.jpg',
    imageThree: 'images/wellington-hostel3.jpg',
    mealsOptions:[15.00,20.00,22.00]
  },
  {
    name:'TMACS Backpackers',
    blurb: ' TMACS Backpackers offers air-conditioned rooms, a shared lounge, free WiFi and a garden. Featuring a tour desk, this property also provides guests with a terrace',
    type:'Hostel',
    id:106,
    address:'118-122 Nelson St, Auckland 1010',
    location:'Auckland',
    phoneNunber:649342768,
    lat: -36.853087,
    long: 174.757880,
    contentGuest:'1 Guest',
    contentBeds:'1 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:1,
    minDays:1,
    maxDays:10,
    price:30.00,
    image: 'images/auckland-hostel1.png',
    imageOne: 'images/auckland-hostel1.png',
    imageTwo: 'images/auckland-hostel2.png',
    imageThree: 'images/auckland-hostel3.png',
    mealsOptions:[22.00,26.00,32.00]
  },
  {
    name:'Autoline Motel and Apartments',
    blurb: 'Just 5 minutes’ walk from Lake Wakatipu, Autoline Queenstown Motel offers self-contained accommodation with a spa bath or a private balcony with mountain views. Guests enjoy free WiFi.',
    type:'Motel',
    id:107,
    address:'2/4 Dublin Street, Queenstown 9300',
    location:'Queenstown',
    phoneNunber:034428734,
    lat: -45.032379,
    long: 168.668744,
    contentGuest:'2-4 Guest',
    contentBeds:'4 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:2,
    maxGuest:4,
    minDays:3,
    maxDays:10,
    price:90.00,
    image: 'images/Queenstown-motel1.jpg',
    imageOne: 'images/Queenstown-motel1.jpg',
    imageTwo: 'images/Queenstown-motel2.jpg',
    imageThree: 'images/Queenstown-motel3.jpg',
    mealsOptions:[22.00,26.00,32.00]
  },
  {
    name:'Airport Motel ',
    blurb: 'Overlooking Lyall Bay, this relaxed airport motel and conference center is less than 2 km from Wellington International Airport and 3 km from the Wellington Zoo. ',
    type:'Motel',
    id:108,
    address:' 142 Tirangi Road Rongotai, Wellington  6003 ',
    location:'Wellington',
    contentGuest:'2-4 Guest',
    contentBeds:'4 Bed',
    contentUtilities:'1 Private Shower',
    phoneNunber:649342768,
    lat: -41.327666,
    long: 174.801543,
    minGuest:2,
    maxGuest:4,
    minDays:3,
    maxDays:10,
    price:90.00,
    image: 'images/wellington-motel1.jpg',
    imageOne: 'images/wellington-motel1.jpg',
    imageTwo: 'images/wellington-motel2.jpg',
    imageThree: 'images/wellington-motel3.jpg',
    mealsOptions:[22.00,26.00,32.00]
  },
  {
    name:'Devonport Motel',
    blurb: 'This stylish motel, set in a residential neighbourhood, is a 3-minute walk from sandy Devonport Beach and 5 km from the landmark Sky Tower.',
    type:'Motel',
    id:109,
    address:' 11 Buchanan Street, Devonport, Auckland 0624 ',
    location:'Auckland',
    phoneNunber:094451010,
    lat: -36.829236,
    long: 174.798911,
    contentGuest:'2-4 Guest',
    contentBeds:'4 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:2,
    maxGuest:4,
    minDays:3,
    maxDays:10,
    price:90.00,
    image: 'images/auckland-motel1.png',
    imageOne: 'images/auckland-motel1.png',
    imageTwo: 'images/auckland-motel2.png',
    imageThree: 'images/auckland-motel3.png',
    mealsOptions:[22.00,26.00,32.00]
  },
  {
    name:'Gin and Raspberry',
    blurb: 'This spacious property is a great family holiday home is only a minute drive from the access roads to the Cardrona and Snow Park ski fields.',
    type:'house',
    id:110,
    address:' Gin And Raspberry Lane, Cardrona 9381 ',
    location:'Queenstown',
    phoneNunber:094451010,
    lat: -44.872825,
    long: 169.005488,
    contentGuest:'1-4 Guest',
    contentBeds:'4 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:4,
    minDays:2,
    maxDays:15,
    price:240.00,
    image: 'images/Queenstown-house1.jpg',
    imageOne: 'images/Queenstown-house1.jpg',
    imageTwo: 'images/Queenstown-house2.jpg',
    imageThree: 'images/Queenstown-house3.jpg',
    mealsOptions:[22.00,26.00,32.00]
  },
  {
    name:'Owhiro Bay haven',
    blurb: 'Private, comfortable house. Is set in Wellington, 1.4 km from Wellington Zoo. ',
    type:'house',
    id:111,
    address:'50 Owhiro Bay, Wellington City 6023,',
    location:'Wellington',
    phoneNunber:094451010,
    lat: -41.344264,
    long: 174.759773,
    contentGuest:'1-4 Guest',
    contentBeds:'4 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:4,
    minDays:2,
    maxDays:15,
    price:240.00,
    image: 'images/wellington-house1.png',
    imageOne: 'images/wellington-house1.png',
    imageTwo: 'images/wellington-house2.png',
    imageThree: 'images/wellington-house3.png',
    mealsOptions:[15.00,23.00,32.00]
  },
  {
    name:'Arohanui Cabins Off Grid Luxury Mangawhai',
    blurb: 'Leave it all behind and unwind at this off grid luxury glamping site overlooking peaceful native bush and farmland.',
    type:'house',
    id:112,
    address:' 302 Devich Road, Mangawhai 0975 Auckland ',
    location:'Auckland',
    phoneNunber:094451010,
    lat: -36.147698,
    long: 174.545124,
    contentGuest:'1-4 Guest',
    contentBeds:'4 Bed',
    contentUtilities:'1 Private Shower',
    minGuest:1,
    maxGuest:4,
    minDays:2,
    maxDays:15,
    price:240.00,
    image: 'images/auckland-house1.jpg',
    imageOne: 'images/auckland-house1.jpg',
    imageTwo: 'images/auckland-house2.jpg',
    imageThree: 'images/auckland-house3.jpg',
    mealsOptions:[15.00,23.00,32.00]
  },
];
// console.log(accomodations[0].mealsOptions[0].lunch);



// plus/minus input counter start
$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      guests = count;
      console.log(guests);
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) + 1;
      count = count > 4 ? 4 : count;
      guests = count;
      $input.val(count);
      $input.change();
      return false;
    });
  });
// plus/minus input counter finish

//date calculation with date pickers
var stDate, enDate;
$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


      $("#endDate").datepicker( "option", "maxDate", enDate );


  }
});

$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true
});

//Find the number of days between dates
function dateDiff() {

  var start = $('#startDate').datepicker('getDate');
  var end = $('#endDate').datepicker('getDate');
  var days = (end - start)/1000/60/60/24;
  // document.getElementById("noDays").value = days ;//to display days
  return days;
}

var guests, place, days
// this is to filter the chosen inputs in the main page
// this is to filter the chosen inputs in the main page
document.getElementById('filter-main').addEventListener('click', function() {
   place = document.getElementById('location').value;
   days = dateDiff();
   guests = document.getElementById('number-guests').value;

  var minDays = Math.min.apply(Math, accomodations.map(function(o) { return o.minDays; }));
	var maxDays = Math.max.apply(Math, accomodations.map(function(o) { return o.maxDays; }));

  // clear #cards container
	document.getElementById('cards').innerHTML = " ";

  // show #search-results
  $('#selected-accomodation').hide();
  $('#search-options').hide();
  $('#search-results').show();

  // if days is greater than all maxDays, show no results message.
  if(days > maxDays) {
    document.getElementById('cards').innerHTML += "<h3>No accommodation available for that timeframe.</h3><p>Please adjust your search criteria.</p>"
  } else {

    // iterate through accommodation options
    for (var i = 0; i < accomodations.length; i++) {
  		if ((accomodations[i].location === place) && (accomodations[i].minDays <= days) && (accomodations[i].maxDays >= days) && (accomodations[i].minGuest <= guests) && (accomodations[i].maxGuest >= guests)) {
        // add cards that match filter criteria to #cards container
        document.getElementById('cards').innerHTML += '<div class="container-fluid container-main">' + '<div class="cards">' + '<img src="' + accomodations[i].image + '" class="card-img-top" alt="Auckland Hostel">' + '<div class="card-body">' + '<h3 class="card-title">' + accomodations[i].name + '</h3>' + '<p class="card-text">' + accomodations[i].location + '</p>' + '<h5 class="card-price"> $' + accomodations[i].price + '/per night</h5>' + '<button class="view-accomodation btn btn-primary" data-accommodation-id="' + i + '">View more details</button>' + '</div>' + '</div>' + '</div>'
  		}
  	}
  }
});


$(document).on('click', '.view-accomodation', function(e) {
  var accommodationID = $(e.currentTarget).data('accommodation-id');
  showSelectedAccommodation(accommodationID);
});

function showSelectedAccommodation(accommodationID) {
  // hide #search-results and #search-options
  $('#search-options').hide();
  $('#search-results').hide();
  // show #selected-accomodation
  $('#selected-accomodation').show();
  document.getElementById('selected-accomodation-content').innerHTML = " ";

  // show relevant accommodation content
  document.getElementById('selected-accomodation-content').innerHTML += '<!-- card start --><button type="button" id="back-to-search-results" aria-label="Close"><span aria-hidden="true">Back to search results</span></button><div class="card">'
  + '<!-- card image carousel --><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
  + '<!-- carousel - indicators --><ol class="carousel-indicators">'
  + '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
  + '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
  + '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
  + '</ol>'
  + '<!-- carousel - images --><div class="carousel-inner">'
  + '<div class="carousel-item active">'
  + '<img class="d-block w-100" src="' + accomodations[accommodationID].imageOne + '"  alt="First slide">'
  + '</div>'
  + '<div class="carousel-item">'
  + '<img class="d-block w-100" src="' + accomodations[accommodationID].imageTwo + '" alt="Second slide">'
  + '</div>'
  + '<div class="carousel-item">'
  + '<img class="d-block w-100" src="' + accomodations[accommodationID].imageThree + '"  alt="Third slide">'
  + '</div>'
  + '</div>'
  + '<!-- carousel - prev/next buttons --><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
  + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
  + '<span class="sr-only">Previous</span>'
  + '</a>'
  + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
  + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
  + '<span class="sr-only">Next</span>'
  + '</a>'
  + '</div>'
  + '<!-- card body start --><div class="card-body">'
  + '<div class="accomodation-information">'
  + '<h3>' + accomodations[accommodationID].name + '</h3>'
  + '<h6>' + accomodations[accommodationID].location + '</h6>'
  + '<h5>$ ' + accomodations[accommodationID].price + '/per night</h5>'
  + '</div>'
  + '<hr>'
  + '<div class="accomodation-specifics">'
  + '<p>' + accomodations[accommodationID].contentGuest + '<span class="tab">' + accomodations[accommodationID].contentBeds + '</span>' + '<span class="tab">' + accomodations[accommodationID].contentUtilities + '</span>' + '</p>'
  + '</div>'
  + '<hr>'
  + '<div class="accomodation-specifics">'
  + '<div>Guests ' + accomodations[accommodationID].minGuest + ' - ' + accomodations[accommodationID].maxGuest + '</div>'
  + '</div>'
  + '<hr>'
  + '<div class="accomodation-blurb"><p>' + accomodations[accommodationID].blurb + '</p></div>'
  + '<a class="card__link btn btn-secondary" data-lat="' + accomodations[accommodationID].lat + '" data-long="' + accomodations[accommodationID].long + '" data-toggle="modal" data-target="#viewMap"><i class="fas fa-map-marker-alt" style="font-size: 16px;"></i>&nbsp; See on map</a>'
  + '<button  id="' +accomodations[accommodationID].id  + '" onclick="showCalculation(' + accommodationID +')" class="btn btn-viewQuote btn-primary"> View Quote </button>'
  + '</div><!-- card body end -->'
  + '</div><!-- card end -->';
}

function initMap(latitude, longitude) {
  // var location = {lat: latitude, lng: longitude};
  var location = {lat: -25.344, lng: 131.036};
  var mapOptions = {zoom: 12, center: location};
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({position: location, map: map});

  $("#viewMap").on('show.bs.modal', function(e) {
    // get data attributes from 'See on map' button
    var lat = $(e.relatedTarget).data('lat');
    var long = $(e.relatedTarget).data('long');

    // var destinationLatLng = { lat: lat, lng: long};
    var destinationLatLng = new google.maps.LatLng({ lat: lat, lng: long}); 

    var marker = new google.maps.Marker({
      position: destinationLatLng,
      map: map
    });
  
    // update map and then open viewMap modal
    map.panTo(destinationLatLng);
  });
}


var placeCost = 0;
var mealCosts = 0;
var totalCost = 0;

function showCalculation(accommodationID){
  $('#selected-accomodation').hide();
  $('#calculated-quote').show();

  totalCost = 0;
  mealCosts = 0;

  // clear quote
  document.getElementById('quote-content').innerHTML = '';

  // create new quote
  document.getElementById('quote-content').innerHTML += '<button type="button" id="back-to-selected-accomodation" aria-label="Close"><span aria-hidden="true">Back to selected accommodation</span></button>'
  + '<h2 id="place">Accomodation name quote details</h2>'
  + '<hr>'
  + '<form>'
  + '<div class="row">'
  + '<div class="col">'
  + '<h3>Check in date</h3>'
  + '<p id="stDate">Check in date</p>'
  + '<hr>'
  + '</div>'
  + '<div class="col">'
  + '<h3 >Check out date</h3>'
  + '<p id="enDate">Check out date</p>'
  + '<hr>'
  + '</div>'
  + '</div>'
  + '<div class="row">'
  + '<div class="col">'
  + '<div>'
  + '<h3>Number of guests chosen</h3>'
  + '<p id="guests">Number of guests</p>'
  + '</div>'
  + '<hr>'
  + '<div>'
  + '<h3>Price per night</h3>'
  + '<p id="price">Amount per night</p>'
  + '</div>'
  + '<hr>'
  + '<div class="meal-addons">'
  + '<h3>Meal add ons</h3>'
  + '<!-- meal checkboxes start-->'
  + '<div class="form-check">'
  + '<input class="form-check-input " type="checkbox" value="'
  + accomodations[accommodationID].mealsOptions[0]
  + '" id="breakfast">'
  + '<label class="form-check-label" for="breakfast">'
  + 'Breakfast $'
  + accomodations[accommodationID].mealsOptions[0]
  + '</label>'
  + '</div>'
  + '<div class="form-check">'
  + '<input class="form-check-input" type="checkbox" value="'
  + accomodations[accommodationID].mealsOptions[1]
  + '" id="lunch">'
  + '<label class="form-check-label" for="lunch">'
  + 'Lunch $'
  + accomodations[accommodationID].mealsOptions[1]
  + '</label>'
  + '</div>'
  + '<div class="form-check">'
  + '<input class="form-check-input" type="checkbox" value="'
  + accomodations[accommodationID].mealsOptions[2]
  + '" id="dinner">'
  + '<label class="form-check-label" for="dinner">'
  + 'Dinner $'
  + accomodations[accommodationID].mealsOptions[2]
  + '</label>'
  + '</div>'
  + '</div>'
  + '</div>'
  + '</div>'
  + '<!-- meal checkboxes finish-->'
  + '<div class="row">'
  + '<div class="col">'
  + '<div id="quote-total"></div>'
  + '<button onclick="calculateQuote()" id="btn-calculate-quote" class="btn btn-primary" type="button">Calculate quote</button>'
  + '<button id="btn-make-booking" class="btn btn-primary" type="button" style="display: none;" data-toggle="modal" data-target="#success-message">Make booking</button>'
  + '</div>'
  + '</div>'
  + '</form>'
  + '</div>';
  document.getElementById('place').innerHTML = accomodations[accommodationID].name;
  document.getElementById('stDate').innerHTML = stDate;
  document.getElementById('enDate').innerHTML = enDate;

  //console.log (days, place, guests, stDate, enDate);

  // display guests
  if(guests > 1) {
    document.getElementById('guests').innerHTML = guests + ' guests';
  } else {
    document.getElementById('guests').innerHTML = guests + ' guest';
  }

  // display price ($placeCost x days days)
  placeCost = accomodations[accommodationID].price;
  document.getElementById('price').innerHTML = '$' + (placeCost * days) + ' ($' + placeCost + 'x ' + days + ' nights)';

  // calculate totalCost without meal add-ons
  totalCost = placeCost*days;
};

$(document).on("change", "input[type='checkbox']", function(e) {
    var checkboxValue = parseInt($(e.currentTarget).val());
    if(e.currentTarget.checked) {
        mealCosts += checkboxValue;
    } else {
      mealCosts -= checkboxValue;
    }
});

function calculateQuote(){
  totalCost += (mealCosts * guests);

  document.getElementById("quote-total").innerHTML = 'Total: $' + totalCost;
  // disable checkboxes
  $("input[type='checkbox']").attr("disabled", true);

  // hide calculate total button and show the make booking button
  $("#btn-calculate-quote").hide();
  $("#btn-make-booking").show();
}

// fake navigation
$(document).on('click', '#back-to-search-options', function(e) {
  $('#search-results').hide();
  $('#search-options').show();
});

$(document).on('click', '#back-to-selected-accomodation', function(e) {
  $('#calculated-quote').hide();
  $('#selected-accomodation').show();
});

$(document).on('click', '#back-to-search-results', function(e) {
  $('#search-options').hide();
  $('#selected-accomodation').hide();
  $('#search-results').show();
});
