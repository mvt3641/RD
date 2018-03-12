// Initialize Firebase
var config = {
 apiKey: "AIzaSyCzntWHt0eQrf8_T7sNXd7HDcmHmJQK-xM",
 authDomain: "realtime-d6489.firebaseapp.com",
 databaseURL: "https://realtime-d6489.firebaseio.com",
 projectId: "realtime-d6489",
 storageBucket: "realtime-d6489.appspot.com",
 messagingSenderId: "540451789449"
};
firebase.initializeApp(config);

/* Charting Data**/
var groundWinds = [];
var windsAloft = [];
var flightAltitude = [];
var tetherTension = [];

firebase.database().ref('Site/FlightData/').orderByChild("dateLogged")//dateLogged)
  .limitToLast(24)
  .once('value')
  .then(function(records) {
  var recObj = records.val();
  $("#search-report-table > tbody").empty();
  for(var child in recObj){
    console.log("groundWinds " + parseInt(recObj[child].groundWinds));
    groundWinds.push(Number(recObj[child].groundWinds));
   windsAloft.push(Number(recObj[child].windsAloft));
   flightAltitude.push(Number(recObj[child].flightAltitude));
   tetherTension.push(Number(recObj[child].tetherTension));
  }
});

new Chart(document.getElementById("line-chart"), {
type: 'line',
data: {
  labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
  datasets: [{
      data: [86,114,106,106,107,111,133,221,783,2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [282,350,411,502,635,809,947,1402,3700,5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    }, {
      data: [168,170,178,190,203,276,408,547,675,734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false
    }, {
      data: [40,20,10,16,24,38,74,167,508,784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false
    }, {
      data: [6,3,2,2,7,26,82,172,312,433],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }
  ]
},
options: {
  title: {
    display: true,
    text: 'World population per region (in millions)'
  }
}
});

////////////////////////////Search Flight Data Reports//////////////////////////////////////////////////////////////////////



var flightData_ref= firebase.database().ref('Site/FlightData/')

///////////////////////////////////////////////////////search method  record///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var startDate=$("#Start-Date").val().trim();


// //input timed Logged
// //pull all items with that time logged
// //separate by time logg
$("#search").on("click", function(event){
  event.preventDefault();

 var startDate=$("#Start-Date").val().trim();
 var endDate=$("#End-Date").val().trim();
console.log(startDate);
search(startDate,endDate);



});

function search(start,end){

flightData_ref
  .orderByChild("dateLogged")//dateLogged)
 //.equalTo(start)
  .startAt(start)
  .endAt(end)
  .once('value')
  .then(function(records) {
  var recObj = records.val();
  console.log(recObj);
  $("#search-report-table > tbody").empty();

for(var child in recObj){
 // flightData_ref.on("child_added", function(records){
  $("#search-report-table > tbody").append("<tr><td>" + recObj[child].dateLogged + "</td><td>"+ recObj[child].loggedBy
  + "</td><td>" +recObj[child].timeLogged+ "</td><td>" +recObj[child].system+ "</td><td>"  + recObj[child].systemStatus + "</td><td>"
  + recObj[child].flightAltitude + "</td><td>" + recObj[child].reasonMoored + "</td><td>"
  + recObj[child].Launches + "</td><td>"+ recObj[child].recoveries+ "</td><td>" +recObj[child].tetherTension + "</td><td>" +recObj[child].groundWinds
  + "</td><td>"+recObj[child].windsAloft + "</td><td>"+recObj[child].groundTemp + "</td><td>"+ recObj[child].barometricPressure + "</td><td>"+recObj[child].pitch
  + "</td><td>"+recObj[child].heliumPressure + "</td><td>"+recObj[child].ballonetPressure + "</td><td>"+recObj[child].notes + "</td><td><button data-key="
  + recObj[child].key + ">Delete Record</button></td></tr>" );


}
});
//});
}





////////////////////////////////////////////////////////////////////////////////////////update and delete record/////////////////////////////////////////////////////////







$(document).on('click', '#search-report-table > tbody tr button', deleteRec);

function deleteRec() {
  var key = $(this).data('key');

  flightData_ref.child(key).remove();
  $(this).parents('tr').remove();
}






/////////////////////////////////////////////////////////////////////////update/////////////////////////////////////////


// function updateItem(key) {
// 	var title = $('#title').val().trim();
// 	var date = $('#date').val().trim();
//
// 	movie_ref.child(key).set({
// 		title: title,
// 		date: date
// 	});
//
// 	$(`tr[data-key="${key}"]`).after(`
// 		<tr data-key="${key}">
// 			<td>${title}</td>
// 			<td>${date}</td>
// 			<td>
// 				<button class="update">Update</button>
// 			</td>
// 		</tr>
// 	`).remove();
//
// 	$('form input').val('');
// 	$('#cancel').hide();
// 	$('#save').unbind().on('click', addMovie);
// }
//
// function getItemData(event) {
// 	event.preventDefault();
// 	var key = $(this).parents('tr').data('key');
//
// 	movie_ref.child(key).once('value').then(function(movie) {
// 		$('#title').val(movie.val().title);
// 		$('#date').val(movie.val().date);
// 	});
//
// 	$('#save').unbind().on('click', function(event) {
// 		event.preventDefault();
// 		updateItem(key);
// 	});
// 	$('#cancel').show();
// }
//
// function init() {
// 	movie_ref.on('child_added', addMovieToDOM);
// 	$(document).on('click', '.update', getItemData);
// 	$('#save').on('click', addMovie);
// }
//
// init();
////////////////////////////////////////////////////////////////////////////////////////////
