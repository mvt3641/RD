//   // Initialize Firebase



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


function updateItem(key) {
	var title = $('#title').val().trim();
	var date = $('#date').val().trim();

	movie_ref.child(key).set({
		title: title,
		date: date
	});

	$(`tr[data-key="${key}"]`).after(`
		<tr data-key="${key}">
			<td>${title}</td>
			<td>${date}</td>
			<td>
				<button class="update">Update</button>
			</td>
		</tr>
	`).remove();

	$('form input').val('');
	$('#cancel').hide();
	$('#save').unbind().on('click', addMovie);
}

function getItemData(event) {
	event.preventDefault();
	var key = $(this).parents('tr').data('key');

	movie_ref.child(key).once('value').then(function(movie) {
		$('#title').val(movie.val().title);
		$('#date').val(movie.val().date);
	});
	
	$('#save').unbind().on('click', function(event) {
		event.preventDefault();
		updateItem(key);
	});
	$('#cancel').show();
}

function init() {
	movie_ref.on('child_added', addMovieToDOM);
	$(document).on('click', '.update', getItemData);
	$('#save').on('click', addMovie);
}

init(); // Starting the App





// function test(some_string) {
// 	console.log(some_string);
// }
// test('some value')



















// movie_ref.push({
// 	title: 'bob',
// 	age: 38
// });


// movie_ref.child('-L3Pt7r7KCjBIOPWgsQ0').on('value', function(snapshot) {
// 	console.log(snapshot.val());
// })