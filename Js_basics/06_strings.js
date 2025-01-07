//Dont use this syntax for string 
const name = "gourav"
const age = 25

// console.log(name + age );
console.log( typeof name);


// Instead now a days use like this inject the value directly
// console.log(`My name is ${name} and my age is ${age} `);
 

// let tName = new String('kal');
// console.log( typeof tName);
// console.log(tName.toUpperCase());
// console.log(tName);

// const num = 200;
// console.log(num);

// const balance = new Number(200)
// console.log(balance);
// console.log(balance.toFixed(3));// toFixed() is used mostly to e-commerce sites for more presice amount in bills.


 const letNum = 234.56534
//  console.log(letNum.toPrecision(2));
 

 const price = 60000000
//  console.log(price.toLocaleString());  // convert to US standard
//  console.log(price.toLocaleString('EN-IN')); // convert to indian standard


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maths functions:

// always give in output between 0-1
 console.log(Math.random()); 

// always give output 1 digit before decimal and 2nd one is 2
 //  console.log((Math.random()*10));
 //  console.log(Math.random()*10*10);
 

// First digit can be start with zero like -> '0.1379438..' or '0.753271..' or anything , to avoid zero at the starting digit, we can add -> +1 , to avoid zero.

//  console.log((Math.random()*10)+1);


//Now I want only one digit that's not in decimal with random fn() , so just add 'Math.floor()'
// console.log( Math.floor (Math.random() * 10) +1 );

//If i want the target value like between 10 to 20
const min = 10;
const max = 20;

console.log( Math.floor( Math.random() * (max-min +1) ) + min);
// By this we achieve :
//  - avoid zero
//  - to rid of decimal value
//  - get value btw 10 to 20


