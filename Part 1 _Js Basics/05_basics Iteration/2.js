// +++++++++++++++++++++++    for-of-loop

// we can perform nested objects in array 
//   [ "", "", "" ]
//   [ {}, {}, {} ] 


// very Simple way to print arr 
const arr1 = [1, 2, 3, "Kal"]

for( let element of arr1 ){
    // console.log(element);   
}


// ---------------------- use of break and cotinue in loop
/*

const number = [1, 2, 3, "Kal", 4, 5, "Tits", 6]

for(let i = 0; i< number.length; i++){
    const  num = number[i];

    // Here do Break & continue operation for string element    
    if(typeof num === "string" ){
        // break;

        // Here I want to skip for the string  
        console.log(` Skipping string: "${num}" `);
        continue;
      
    }
    console.log(`Numbers : ${num}`);   
}
    */ 



// ++++++++++++++++++++++++++++++++++    Intro to Map

// Declaration of map
const map1 = new Map();

// set the values through map using  .set
map1.set(1 , "jAVA") ;
map1.set(2 , "TYPESCRIPT") ;
map1.set(3 , "React") ;
map1.set(4 , "jAVA") ;
map1.set(5 , "TYPESCRIPT") ;
map1.set('Name', " Developer") ;
// map1.set('Name', " Developer") ;

// console.log(map1); --------------------> // print the map key-values
// console.log(map1.size); ---------------> // print the map size
// console.log(map1.get(1)); -------------> // print the Value of key1
// console.log(map1.get(2));



// ----------------------  Intro to  'for-of-loop' to print

for( const mapple of map1 ){
    // console.log(mapple);
    // console.log(typeof mapple);   
}
// getting output in this syntax :
// [ 1, ' jAVA' ]
// [ 2, ' TYPESCRIPT' ]
// [ 3, 'React' ]
// [ 4, 'jAVA' ]
// [ 'Name', ' Developer' ]

/*
// If want to get key & values seperately then use this syntax of -- > for-of-loop        
for( const [key, values] of map1 ){
    console.log(key, " : ", values);
}
*/

