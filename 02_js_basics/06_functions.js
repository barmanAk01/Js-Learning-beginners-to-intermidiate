//how to use functions
// 1)
function myName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// myName()


// 2)
function addTwoNumbers(num1, num2){
    
    //first way declare 
    let result = num1 + num2; // this is explicitly
    return result;
}
const result = addTwoNumbers(2,  2)//print for 1st way
// console.log(result);


function addTwoNumbers(num1, num2){
    
   //2nd way to declare 
   return num1+num2
}
//  console.log("2nd way : ", addTwoNumbers(2,  2));// print for 2nd way
 


// 3)
function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj.brand = "Toyota";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
  }
  
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  // console.log(car.brand); // Honda
  
  // Pass object reference to the function
  updateBrand(car);
  
  // updateBrand mutates car
  // console.log(car.brand); // Toyota
  
  
// 4) 
// this syntax is not recomended, just worked to do operations with numbers 
/*
 const addNumbers = (num1,num2) => num1 * num2 // this is implicitly

this syntax is recomended, because when we use objects I have to use the paranthesis bracket 
const addNumbers = (num1,num2) => (num1 * num2) 
const addNumbers = (num1,num2) => ({ Name : "Ak"}) 

console.log(addNumbers ("2" , "3")); */


// 5)
// function functionLogin( userName = "Ak" ) {
  function functionLogin( userName ) {

      if(!userName){
        console.log("Enter the Name");
        return // this will execute
      }

      // return `${userName} just logged in ` // this will not execute now
}

// functionLogin()
console.log(functionLogin());
// console.log( functionLogin("Kalua"));






