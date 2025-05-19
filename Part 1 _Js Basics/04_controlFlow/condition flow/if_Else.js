// >= , <= , == , === , != , !==

// ' === ' used for checking its data and data type both have to be same as declared 
const learnings = 10;

// if (learnings === 10){
if (learnings == 14 ){

     console.log(`Javascript learnings is greater than  ${learnings} per`);

  
}else{
     console.log(`Javascript learnings is less than  ${learnings} per`);
}
//  console.log("executed");
 

// I m allowing the user to enter in my site if this conditions satisfied

 const userLoggedIn = true;
 const userCreditCardAvailable = false;
 const loggedInFromGoogle = false;
 const loggedInFromEmail = true;

 if(userLoggedIn && userCreditCardAvailable){
    console.log("User is allow to get through the course ");
 }
   else  {
    console.log("User is not allow to get through the course ");

   } 
 
   if(loggedInFromGoogle || loggedInFromEmail ){
     console.log("User is allow to get In ");
   }


