/* global moment firebase */

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

// Initial Values
//Save Helium Data info

function saveHeliumData() {

 event.preventDefault();

  var cont1 = $("#inputHContainer1").val().trim();
  var cont2 = $("#inputHContainer2").val().trim();
  var cont3 = $("#inputHContainer3").val().trim();
  var cont4 = $("#inputHExpended").val().trim();
  var inEx = $("#inputHExpended").val().trim();
  var loggedBy = $("#inputLoggedBy").val().trim();
  var note = $("#txtAreaNotes").val().trim();
  var inTLog = $("#inputTimeLogged").val().trim();

  var HeliumData = {
    HeliumContainer1: cont1,
    HeliumContainer2: cont2,
    HeliumContainer3: cont3,
    HeliumContainer4: cont4,
    HeliumExpended: inEx,
    LoggedBy: loggedBy,
    Notes: note,
    TimedLogged: inTLog,
    createDate: firebase.database.ServerValue.TIMESTAMP
  }

firebase.database().ref('Site/HeliumData/').push(HeliumData);
console.log("Update Success");
}


firebase.database().ref('Site/HeliumData/').limitToLast(1).on('child_added', function(snapshot) {

  console.log(snapshot.val());

  // Store everything into a variable.

  var cont1 = snapshot.val().HeliumContainer1;
  var cont2 = snapshot.val().HeliumContainer2;
  var cont3 = snapshot.val().HeliumContainer3;
  var cont4 = snapshot.val().HeliumContainer4;
  var inEx = snapshot.val().HeliumExpended;
  var loggedBy = snapshot.val().LoggedBy;
  var note = snapshot.val().Notes;
  var inTLog = snapshot.val().TimedLogged;


  // Add each helium data into the table
  $("#helium-status-table > tbody").append("<tr><td>" + inTLog + "</td><td>" + cont1 + "</td><td>" + cont2 + "</td><td>" +
  cont3 + "</td><td>" + cont4 + "</td><td>" + inEx + "</td></tr>");
      //SwapDivsWithClick('formId','heliumTableID');
});



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
    console.log("groundWinds " + recObj[child].groundWinds);
    groundWinds.push(recObj[child].groundWinds);
    windsAloft.push(recObj[child].windsAloft);
    flightAltitude.push(recObj[child].flightAltitude);
    tetherTension.push(recObj[child].tetherTension);
  }
});


var ctx = document.getElementById("line-chart");
    console.log ("Bradshaw :" + ctx);

    var lnChart = new Chart(ctx, {
        type: 'bar',
		        type: 'line',
		  data: {
		    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
		    datasets: [{
		        data: groundWinds,
		        label: "Ground Wind Speed",
		        borderColor: "#3e95cd",
		        fill: false
		      }, {
		        data: flightAltitude,
		        label: "Airborne Wind Speed",
		        borderColor: "#8e5ea2",
		        fill: false
		      }, {
		        data: windsAloft,
		        label: "API ind Speed",
		        borderColor: "#3cba9f",
		        fill: false
		      }, {
		        data: tetherTension,
		        label: "Tether Tension",
		        borderColor: "#e8c3b9",
		        fill: false
		      }
		    ]
		  },
        options: {
          title: {
		      display: true,
		      text: 'Top Gun System Metrics'
		    }
		  }
    });
