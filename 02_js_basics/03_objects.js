
// object Literals

const mySymbol = Symbol("key")

const techAk = {
    name : "Kalua",
   "other name" : "Rahul",// This type of value we cant access by dot ' . ' syntax 

    // mySymbol : "value", // this is nt the correct way to declare symbol
    [mySymbol] : "value", // the correct way to declare
    
    age : 20,
    email : "kal@google.com",
    location: "CRJ",
    isLoggedIn : true,
    lastLoginDay : ["Mon", "Sun"]
}

//Many ways to access an object
// console.log(techAk.name);

// console.log(techAk["name"]);// this is correct syntx 

// console.log(techAk["other name"]);

// By this syntax we can get the value of symbol bt as a string , nt in symbol
// console.log(techAk.mySymbol);
// console.log( typeof (techAk.mySymbol) ); //string

// So to get as symbol value in a correct way
// console.log(techAk[mySymbol]);
// console.log( typeof mySymbol ); //symbol

 
// want to change the value of any like email

console.log(techAk.email);

techAk.email = "rock@gool.com" // this overWrites the value
console.log(techAk.email);

// If I want to frezee my value , that can not change by other
Object.freeze(techAk)

techAk.email = "rock@zoho.com"


console.log(techAk);
