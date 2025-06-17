// Option 2: First Approach (Recommended) keep seperate

// const form = document.querySelector('form');

// // prevent from submission to anywhere , still we dont have backend/server

// form.addEventListener( 'submit', function (e) {
//     e.preventDefault(); // prevent default action of form submission

// --- Calculate Logic
//    const height = parseInt(document.querySelector('#height').value);
//    const weight = parseInt(document.querySelector('#weight').value);
//    const result = document.querySelector('#results');


//    if (height === '' || height < 0 || isNaN(height) ){
//      result.innerHTML = ` Please Enter valid height `;
     
//    }else if ( weight === '' || weight < 0 || isNaN(weight) ){
//      result.innerHTML = `Please Enter valid weight `;
//    }
//    else{
//      // Formula =  Weight / height square
//    const bmi = ( weight / ( (height*height)/10000) ).toFixed(1);
//    result.innerHTML = `<span>${bmi}</span>`
//    }

// });


// // ADD THIS RESET FUNCTIONALITY
// const resetButton = document.querySelector('#reset'); // Make sure your reset button has id="reset-btn"

// resetButton.addEventListener('click', function() {
//     // Clear the input fields
//     document.querySelector('#height').value = '';
//     document.querySelector('#weight').value = '';

    
//     // Clear the result display
//     document.querySelector('#results').innerHTML = '';
    
//     // Optional: Focus back to height input for better UX
//     document.querySelector('#height').focus();
    
//     // console.log('BMI Calculator Reset');
// });

// ---------------------------------------------------------------------------------------------------------------------


// Option 2: Using event delegation (Advanced approach)

const form = document.querySelector('form');

// Handle both submit and reset with one listener
form.addEventListener('click', function(e) {
    if (e.target.id === 'reset') {
        // Reset logic
        document.querySelector('#height').value = '';
        document.querySelector('#weight').value = '';
        document.querySelector('#results').innerHTML = '';
        document.querySelector('#messages').innerHTML = '';

    document.querySelector('#height').focus();

    }

});

// Keep submit separate
form.addEventListener('submit', function(e) {
    // Your BMI calculation logic

   e.preventDefault(); // Stops from submission

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#results');
   const message = document.querySelector('#messages');


   if (height === '' || height < 0 || isNaN(height) ){
     result.innerHTML = ` Please Enter valid height `;
     message.innerHTML = ''; // Clear message for invalid input
     
   }else if ( weight === '' || weight < 0 || isNaN(weight) ){
     result.innerHTML = `Please Enter valid weight `;
     message.innerHTML = ''; // Clear message for invalid input
   }
   else{
     // Formula =  Weight / height square
     const bmi = ( weight / ( (height*height)/10000) ).toFixed(1);
     result.innerHTML = `<span>${bmi}</span>`

    // BMI Classification Logic - Compare BMI value, not result element
    if (bmi < 18.5) {
        message.innerHTML = `You are UnderWeight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) { // Use AND, not OR
        message.innerHTML = `You are Normal Weight`;
    } else if (bmi >= 25.0 && bmi <= 29.9) { 
        message.innerHTML = `You are OverWeight`;
    } else {
        message.innerHTML = `You are Obese`;
    }

  }

});