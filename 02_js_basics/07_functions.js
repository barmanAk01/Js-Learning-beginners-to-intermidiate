// I have to show my all item prices of cart 
// bt this syntax i m able to print only 1 i.e. 200 nt all  
function cart1(prices01){   
    return prices01
}      
 console.log( "cart_1 : ",cart1 (200, 300, 500) ); // print only 200
  

 // To get all the item prices, to solve this case we use rest operator => ' ... '
 function cart2(...prices02){   
    return prices02
}      
 console.log( "cart_2: ",cart2 (200, 300, 500) ); 