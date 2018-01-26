$("#submit-employee").on("click", function(event) {
   // Prevent form from submitting
   event.preventDefault();
 
   // Get the input values
   
   EmployeeName = $("#employee-name").val().trim();
   Role = $("#role").val().trim();
   StartDate = $("#start-date").val().trim();
   MonthlyRate = $("#montly-rate").val().trim();

   var newEmployee = {
       EmployeeName: EmployeeName,
       Role: Role,
       StartDate: StartDate,
       MonthlyRate: MonthlyRate
     }

     // Save in Firebase
     database.ref().push(newEmployee);
 });