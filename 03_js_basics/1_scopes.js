/*
  Global Scope : Avoid overuse to prevent conflicts.
  Function Scope :  Use var carefully (it’s function-scoped, not block-scoped).
  Block Scope :  Prefer let/const for tighter control.
  Module Scope : Use ES6 modules for organized, scalable code.
  Closures : Enable powerful patterns like memoization and encapsulation.
*/

// By using 'Var' , we can declare same variable name with different values 
let val_1 = 23


// By using 'let', we can only modify with different values 
const  val_2 = 21


// By using 'const', we cannot modify values neither redeclare the same variable name
var val_3 = 25
// value = 16 // NOT ALLOWED

if (true){
    let val_1 = 24
    const val_2 = 25
    var val_3 = 29
    console.log("Inner val_1 -> ",val_1); 
    
}

// console.log("Global scope values :  ");

// console.log( val_1 );
// console.log( val_2);
// console.log( val_3);




