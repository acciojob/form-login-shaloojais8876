function getFormvalue() {
    //Write your code here
	const form = document.getElementById('myForm');
      
      // Get the values of first name and last name from the form
      const firstName = form.elements['firstName'].value;
      const lastName = form.elements['lastName'].value;
      
      // Display the values using alert
      alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
    

}
 document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      getFormValue(); // Call your function to handle form values
    });
