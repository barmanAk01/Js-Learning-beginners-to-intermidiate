"use strict" //=> newer version of js 

// alert(2+5)
// console.log(2+5); console.log("AK");


//--> Primitive 
// number -> range -> 2 to power 53 
// bigint (more larger no than number)
// string -> "...."
// null -> standalone value
// boolean -> true/false
// undefined 
// symbols -> unique

//object

// console.log(typeof undefined);// output -> undefined 
// console.log(typeof null);// output -> object, because null treated as object.


//symbols -> unique 
// use of symbol
const id = Symbol('620')
const newId = Symbol('620')

// console.log(id);
// console.log(newId);
// console.log(id === newId);
// console.log(id == newId);

//  console.log(typeof newId);
 

//how to use bigInt
const bigNumber = 9746189410471089n // just adding 'n' at the end of the number



//Reference (Non-primitive)

//Array, objects, functions all these non-primitive

// use 
// const justname = ["kal" , "lol", "lal"];
// let myObj = {
//     language : "Typescript",
//     target : "UI",
//     proj : 2,
// }

// const myFunction = function(){
//     console.log("Hey Ak");
    
// }

// console.log( "justname is :" ,typeof justname);
// console.log(typeof myObj);
// console.log(typeof myFunction);
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory allocations -
//   1) stack() is used to primitive  
//   2) heap() is used to non_primitive

//Example of stack memory-------------------- 
let myName = "kalua"

let anotherName = myName
anotherName = "kal"

console.log(anotherName);
console.log(myName);
//Example of stack memory------------------ 


//Example of Heap memory--------------------
let user1 ={
    name: "RAHUL",
    emial: "Rah@mail.com"
}

// Now I will just change the value of email in user2 , bt this will also change the value in user1 due to same point of reference.
let user2 = user1; 
user2.emial ="Rahul072mail.com"

 console.log("value of user1 : ",user1);
 console.log("value of user2 : ",user2);
//Example of Heap memory--------------------
 
 