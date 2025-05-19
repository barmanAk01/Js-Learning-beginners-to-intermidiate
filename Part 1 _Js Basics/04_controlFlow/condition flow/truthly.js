/*
// const gmail= "ak@gmail.com"   //true value
const gmail= []                  //truthly value 

if(gmail){
  
    console.log("Got the Email");
}
else{
 console.log("Not get");
}
*/
 
// There are some truthly values : true, '0', " " , "fasle", [], function(){}

//  Falsly value : false , 0, -0, bigInt 0n,  null, NaN, undefined 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
// ------------------       way to take input from user 

const correctEmail = "ak@gmail.com";

// Create readline interface for input/output
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for user email
rl.question('Please enter your email address: ', (userEmail) => {

  // Compare the emails
  if (userEmail === correctEmail) {
    console.log("Got the Email");
  } else {
    console.log("Not get");
  }
  
  // Close the readline interface
  rl.close();
});
*/

/*
// const user = {} //if empty
 
const user = {  //if value & key available
    name : "Ak",
    age : 23
}

if(Object.keys(user).length === 0){
    console.log("yes empty ");   
}
else {
    console.log(`Users have : ${user}`);
   
}
console.log(user);
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//         Nullish Coalescing Operator (??) : null undefined

let val ;
// val =  8  ??  12 

// val =  null  ??  11

// val = undefined ?? 14

// val = null ?? undefined ?? 16

// val = 2  ??  3  ?? 16

// console.log(val);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Ternary Operator

// condition ? true : false 

// Example
 const  name = "AK" ;
 let age = 23
 age >= 22 ? console.log("Correct") : console.log("In_Correct")
 