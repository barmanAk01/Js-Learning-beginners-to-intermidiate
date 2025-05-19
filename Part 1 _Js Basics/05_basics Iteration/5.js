// Use of filter fn() to get the data from data_set what & how  I want.  

const Num = [2, 4, 5, 6 , 7 , 8]

/*
// --------------------- ------   Use of filter fn()

const newNum =  Num.filter( (num) => {
    return num > 5;
})
console.log(newNum);
*/


/*
// ----------------------   using forEach fn()

const newArr = []

Num.forEach( (num) => {
    if(num > 5){
        newArr.push(num);    
    }
})
console.log(newArr);
*/


// Example :- some user account details from backend data, do some filter operatons on it to get data as per ur need.
let myUsersAccount = [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "password_hash": "$2a$10$aBcDeFgHiJkLmNoPqRsTuV..",
      "first_name": "John",
      "last_name": "Doe",
      "date_of_birth": "1990-05-15",
      "created_at": "2023-01-10T14:23:10Z",
      "last_login": "2025-04-22T09:45:22Z",

      "role": "admin",
      "is_active": true,

      "address": {
        "street": "123 Main St",
        "city": "Boston",
        "state": "MA",
        "zip": "02108",
        "country": "USA"
      }
    },
    {
      "id": 2,
      "username": "jane_smith",
      "email": "jane@example.com",
      "password_hash": "$2a$10$xYzAbCdEfGhIjKlMnOpQrS..",
      "first_name": "Jane",
      "last_name": "Smith",
      "date_of_birth": "1988-11-22",
      "created_at": "2023-02-05T11:32:40Z",
      "last_login": "2025-04-24T14:12:05Z",

      "role": "admin",
      "is_active": true,

      "address": {
        "street": "456 Oak Ave",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94102",
        "country": "USA"
      }
    },
    {
      "id": 3,
      "username": "bob_johnson",
      "email": "bob@example.com",
      "password_hash": "$2a$10$pQrStUvWxYzAbCdEfGhIjK..",
      "first_name": "Bob",
      "last_name": "Johnson",
      "date_of_birth": "1995-08-30",
      "created_at": "2023-03-12T09:15:22Z",
      "last_login": "2025-04-18T16:30:45Z",

      "role": "user",
      "is_active": false,

      "address": {
        "street": "789 Pine Blvd",
        "city": "Seattle",
        "state": "WA",
        "zip": "98101",
        "country": "USA"
      }
    },
    {
      "id": 4,
      "username": "john",
      "email": "sarah@example.com",
      "password_hash": "$2a$10$LmNoPqRsTuVwXyZaBcDeFgH..",
      "first_name": "Sarah",
      "last_name": "Williams",
      "date_of_birth": "1992-04-12",
      "created_at": "2023-05-20T08:45:30Z",
      "last_login": "2025-04-23T11:20:15Z",

      "role": "user",
      "is_active": true,

      "address": {
        "street": "567 Maple Dr",
        "city": "Chicago",
        "state": "IL",
        "zip": "60601",
        "country": "USA"
      }
    },
    {
      "id": 5,
      "username": "michael_brown",
      "email": "micharole el@example.com",
      "password_hash": "$2a$10$EfGhIjKlMnOpQrStUvWxYzA..",
      "first_name": "Michael",
      "last_name": "Brown",
      "date_of_birth": "1985-07-08",
      "created_at": "2023-06-15T16:10:45Z",
      "last_login": "2025-04-21T15:05:30Z",

      "role": "moderator",
      "is_active": false,
      "address": {
        "street": "890 Cedar Ln",
        "city": "Austin",
        "state": "TX",
        "zip": "78701",
        "country": "USA"
      }
    },
    {
      "id": 6,
      "username": "emma_davis",
      "email": "emma@example.com",
      "password_hash": "$2a$10$NoPqRsTuVwXyZaBcDeFgHiJ..",
      "first_name": "Emma",
      "last_name": "Davis",
      "date_of_birth": "1993-12-28",
      "created_at": "2023-07-22T10:30:15Z",
      "last_login": "2025-04-20T09:15:40Z",

      "role": "admin",
      "is_active": true,
      "address": {
        "street": "234 Elm St",
        "city": "Miami",
        "state": "FL",
        "zip": "33101",
        "country": "USA"
      }
    }
  ] 

//   #_Q1  Filter out whose is in admin role .

let userAcc = myUsersAccount.filter( (usr) => usr.role === "admin")

//   #_Q2  Filter out whose have active account .

userAcc = myUsersAccount.filter( (usr) => { return  usr.is_active === true } )

console.log(userAcc);


