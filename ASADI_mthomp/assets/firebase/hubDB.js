/* global moment firebase */

// Initialize Firebase

<script src="https://www.gstatic.com/firebasejs/4.8.2/firebase.js"></script>
<script>
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
</script>

// Create a variable to reference the database
var database = firebase.database();

// Initial Values


// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {


  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------


  // Prevent default behavior
  event.preventDefault();
});
