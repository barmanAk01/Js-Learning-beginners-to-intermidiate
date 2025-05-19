//                                   Object behaviour 

// +++++++++   For-in-loop



/* 
const myOobj = {
    language1 : "JS",
    language2 : "TS",
    language3 : "cpp"
}

// Behaviour of Object in For-of-loop

for (const [key , values] of myOobj) {
     console.log(key , " :- " , values);
     
}
// output :-  { TypeError : myObj is not iterable }
//  So through 'for-of-loop' syntax Objects cant be iterable
*/


// So we use ' for-in-loop ' for Objects to iterate
const myObj = {
    language1 : "JS",
    language2 : "TS",
    language3 : "cpp"
}
  for (const key in myObj) { 
    // console.log(`${ key }  :  ${ myObj [key] } ` );
  
}

// ------------------   Can for-in-loop will work for array
 const arr = [1, 3, "Tal"]
 
 const i = 0;
 for (const key in arr) {
    // console.log(arr[key] );
    
  }

  
// -------------------   Can for-in-loop will work for map
  const map1 = new Map();

  map1.set(1 , " jAVA") ;
  map1.set(2 , " TYPESCRIPT") ;
  map1.set(3 , "React") ;
  map1.set(4 , "jAVA") ;
  map1.set('Name', " Developer") ; 

  for (const key in map1) {
    console.log(map1(key));
 
  }