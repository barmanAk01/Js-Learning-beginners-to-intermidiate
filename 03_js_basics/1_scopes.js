/*
  Global Scope : Avoid overuse to prevent conflicts.
  Function Scope :  Use var carefully (it’s function-scoped, not block-scoped).
  Block Scope :  Prefer let/const for tighter control.
  Module Scope : Use ES6 modules for organized, scalable code.
  Closures : Enable powerful patterns like memoization and encapsulation.
*/

// By using 'Var' , we can declare same variable name with different values 
var val_1 = 23


// By using 'let', we can only modify with different values 
let val_2 = 21


// By using 'const', we cannot modify values neither redeclare the same variable name
const val_3 = 25
// value = 16 // NOT ALLOWED

if (true){
    let val_1 = 24
    const val_2 = 25
    // var val_3 = 29
    // console.log("Inner val_1 -> ",val_1); 
    
}

// console.log("Global scope values :  ");

// console.log( val_1 );
// console.log( val_2);
// console.log( val_3);


// => Now see how variable can be use in nested functions() 
function one(){
   const name = "Rock"

   function two(){
     const learningOn = "Javascript"
     console.log(name);
      console.log("learning :",learningOn)
  }
     //  console.log(learningOn) this will not print anything because out_of_scope of fn() two

   two()  
}
// one()


// => Now see how variable can be use in nested if conditions
if(true){
  const learningOn = "Typescript"

    if(learningOn === 'Typescript'){
      const next = " React"
      // console.log( learningOn + next);   
    }
      // console.log(next); out of if condition 2, so this will not print 
        //  console.log(learningOn);

}
// console.log(learningOn); out of if condition 1, so this will not print 


// => some re variations of declaring functions()
//.1
function fnOne(num){
    return num + 1;
}
console.log( fnOne(5));


//.2
// fntwo(3) <= ( this can't be access here yah ofcourse i m trying to accessing before declaring )
const fntwo = function (num){
  return num + 2;
}
console.log(fntwo(3));


