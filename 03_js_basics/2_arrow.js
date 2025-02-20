const learner = {
    language : "Javascript",
    Lang_no : 2, 

    welcomeMessage: function (){
        console.log(` ${this.language}, welcome developer`);
        console.log(this);
        
    }
}
// learner.welcomeMessage()

learner.language = "typescript"
// learner.welcomeMessage()

// learner.language = " Script"
// learner.welcomeMessage()

// so keyword ' this ' is used to refer current context

// console.log(this); // this will give empty 
// [ Note : => When `this` invoked as a standalone function (not attached to an object: func()), 
// this typically refers to the global object :
// 1. In node environment => refers to empty (because empty, is the global object in node ) 
//  2. In browser => refers to window (because window , is the global object in browser )     ] 


// function code (){    // function declaration
//     language = "Typescript",
//     user = "Developer"

//     console.log(this);
    
// }
// code ()

// OR

const code1 = function (){   // function declaration
    let language = "Typescript"
    console.log(this.langusge);
    
}
// code1()

// ++++++++++++++++++++++++++++++++++++

// How to use of Arrow
const code2 =  ()  =>  {   // function declaration
    let language = "Typescript"
    console.log(this);
    
}
// code2()


const sumNum = (num1 , num2)  =>  (num1 + num2) // normal functions operations
// console.log(sumNum(2, 3));
 

const userType = ()  =>  ( { user : "Developer" } ) // object declaration
// console.log(userType ());
 


