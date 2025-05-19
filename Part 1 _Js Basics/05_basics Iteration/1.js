// ----------------------------------     Use of looping


// -----------------------  Printing the numbers in normal way 
/*

for(let i = 0; i<6; i++){
   let nums = i;
   
   if(i == 5){
     console.log("5 is the besrt number ");
   }

   console.log(nums);
   
}
*/



// -------------------  Print the numbers in an array by using empty array
/*

let arr = [];

for(let i = 0; i<6; i++){
   
   arr.push(i)
   
   if(i == 5){
     console.log("5 is the besrt number ");
   }
   
}
console.log(arr);
*/


// --------------------- Print array using for loop
/* 

let myArr = ["Ak", "kal", "lol"];

console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {

   const element = myArr[i];
    console.log(element);
   
}
*/


// ---------------    Use of Break & Continue in loop
/*

for (let i = 1; i <= 10; i++) {
   if(i == 5){
      console.log("Yeh got");
      
      break;       // using break 
      // continue; // using continue
   }
   console.log(i); 
}
*/


/* ---------------- print array using while loop

let myArr = ["Ak", "kal", "lol"];

let arr = 0;

while(arr < myArr.length){
    console.log(`values is : ${ myArr [arr] }`);
    arr++;
} 
// console.log(arr(myArr));
*/
   
