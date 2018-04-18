
$(document).ready(function(){
  $('#other').hide()
$('#position').change(function(){
  var val = $('#position').val();
   if(val == "Other"){
    $('#other').show();
  }
})
});






$('#inputform').on('click',function(e){
e.preventDefault();

var lastN = $('#lastname').val().trim();
var positionsel = $('#position').val();
var positionO = $('#Pother').val().trim();
var location = $('#location').val().trim();
var employer = $('#employer').val().trim();
var firstN =$('#firstname').val();

console.log(firstN);
console.log(lastN);
if($('#position').val() === "Other"){
console.log(positionO)
}else{
  console.log(positionsel)
};
console.log(location);
console.log(employer);

$.ajax({
      type: 'POST',
      url: '/api/pax',
      data: JSON.stringify({ first: firstN, last: lastN, position: positionsel,positionO, location: location, employer: employer}),
      contentType: 'application/json',
      dataType: 'json'
  }).then(function(response) {
    $('#userinput').empty();
      console.log(response);
  });
})
