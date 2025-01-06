"use strict" //=> newer version of js 

// alert(2+5)
console.log(2+5); console.log("AK");

//--> Primitive 
// number -> 2 to power 53
// bigint (more larger no than number)
// string -> "...."
// null -> standalone value
// boolean -> true/false
//undefined 
//symbols -> unique

//object

// console.log(typeof undefined);// output -> undefined 
// console.log(typeof null);// output -> object, because null treated as object.


//symbols -> unique 
// use of symbol
const id = Symbol ('620')
const newId = Symbol ('620')

// console.log(id);
// console.log(newId);
// console.log(id === newId);
// console.log(id == newId);

//how to use bigInt
const bigNumber = 9746189410471089n // just adding 'n' at the end of the number


//Reference (Non-primitive)

//Array, objects, functions all these non-primitive

// use 
const justname = ["kal" , "lol", "lal"];
let myObj = {
    language : "Typescript",
    target : "UI",
    proj : 2,
}

const myFunction = function(){
    console.log("Hey Ak");
    
}

console.log( "justname is :" ,typeof justname);
console.log(typeof myFunction);
console.log(typeof myObj);
