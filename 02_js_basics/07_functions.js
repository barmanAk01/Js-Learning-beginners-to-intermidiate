 // I have to show my all item prices of cart 
// bt this syntax i m able to print only 1 i.e. 200 nt all  
function cart1(prices01){   
    return prices01
}      
 console.log( "cart_1 : ",cart1 (200, 300, 500) ); // print only 200
  

 // To print all the item prices, to solve this case we use rest operator => ' ... '
 function cart2(...prices02){   
    return prices02
}      

function cart2(...prices02){   
    return prices02
}      
 console.log( "cart_2: ", cart2 (200, 300, 500) ); 


 function calculateCart(val1, val2, val3,  ...prices03){   
    return prices03
}      
 console.log( "calculateCart: ", calculateCart (200, 300, 500, 23, 45) ); 
 // so here print the prices02 values i.e (prices02 -> 23 & 45) 
//  and rest take by val1, val2, val3
 //         (200 -> val1) , 
 //         (300 -> val2) ,
 //         (500 -> val3) & 

// So this is how rest operator is work


// Now , Let see how objects can be passed in functions ()
//  #1) 
    const obj1 = {
    name: " Kalua",
    age : 25
 }

 function manageObjects(objectUser){
    console.log(`Name is ${objectUser.name} and Age is ${objectUser.age}`);
    
 }
 manageObjects(obj1)

// #2
function handleObjects(obj){
    console.log(`Name is ${obj.name1} and Age is ${obj.color}`);
    
 }
 handleObjects({
        name1 : "Akjal",
        color : "Blacki"
 })

 // Now , Let see how Array can be passed in functions ()
 const myArr = [20, 40 , 50 ]

 function handleArray(arrValue){
      return arrValue;
    
 }

 console.log(handleArray(myArr));
 