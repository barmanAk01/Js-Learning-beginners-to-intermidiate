

// Singleton objects --

// const matingUser = new Object()
// console.log(matingUser);

// 1st way to declare
const matingUser1 = {} //created object

matingUser1.id = "M124J" //provide credentials
matingUser1.name = "Jakal"
matingUser1.email = 'Jakal@mail.com'
matingUser1.isLoggedIn = false

// console.log(matingUser1);

// 2nd way to declare
const matingUser2 = {
    id : "M1354j",
    email : "jhiwfuu@mail.com",
    fullName:{
        userFullName :{
            firstName : "Rock",
            lastName : "Ji"
        }
    }
}
// console.log(matingUser2);
// console.log(matingUser2.fullName.userFullName);


// how to merge 2 or more objects
const obj1 = { 1:"Rahul", 2: "kal", 3: "Thor"}
const obj2 = { 4:"Tjnw",  5: "Ykw", 6: "fjhu"}
const obj3 = { 7:"Gihwi", 8: "Rjnf",9: "Ljff"}

// First way to merge
// const objMerge = Object.assign(obj1, obj2, obj3)// can be add more objects so on..

// 2nd way to merge
// const objMerge = Object.assign( {}, obj1, obj2, obj3 );

// 3rd way to merge and mostly time this syntax will be use 
const objMerge = { ...obj1, ...obj2, ...obj3 };

// console.log(objMerge);

// when we do data scraping then , we need the keys in an array form 
console.log(matingUser2);
// console.log(Object.keys(matingUser2));// getting all keys of object in an array
// console.log(Object.values(matingUser2));// getting all the values of keys
console.log(Object.entries(matingUser2));// getting all keys with their values in an array 

