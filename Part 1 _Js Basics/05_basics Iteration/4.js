// +++++++++++++++++++ For-each

const lang = [ "JS", "TS", "Ruby", "CPP" ]

/*
lang.forEach( function (element) {
     console.log(element) ;
})  
*/

/* in this more aeguments can take to access data 
lang.forEach( (item, index, arr) => {
    console.log(item, index, arr); 
})
*/    


//  print using arrow fn()
lang.forEach( (value) => {
  console.log(value) 
}) ;          
 
//  Or use normal fn() 
function printMe(value){
//    console.log(value); 
}
// lang.forEach(printMe)


/*
In array the elements are in many form of objects & strings 
  [ "", "", "" ]
  [ {}, {}, {} ] 

Note : In backend all data is present in the form of Nested objects in Array so, to access the key-value elements from data we can use 'forEach fn()' to get the values .
*/

// /*
const arr1 = [
    {
        language : "PY",
         area : "Backend"
    },
    {
        language : "JS",
         area : "scripting"
    },
    {
        language : "Java",
        area : "Frontend"
    }
]
// */

// arr1.forEach( (item) => {
//     console.log(` ${item.language} => ${item.area} `); 
// })

// it can taker upto 3 parameters
arr1.forEach( (item, index, arr) => {
    // console.log(item, index, arr); 
})
