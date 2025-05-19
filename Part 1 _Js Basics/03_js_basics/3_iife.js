// Immediately Invoked Functions Expressions (IIFE)

// the normal fn()
function code (){
    console.log("Code 1 ");
    
}
// code()


// `use of IIFE
// syntax:  ( function definitation ) ( )

// this named IIFE
// Note : when use more than 1 IIFE then always give a semicolon at the end of first IIFE 
( function code () { 
     console.log("Code 1 "); 
})  (); 


// this is unamed IIFE
(  () => {     
    console.log("Code 2 "); 
})  ();

(  (userType) => {     
    console.log(`This is the ${userType}`); 
})  ('Developer')


   
    

