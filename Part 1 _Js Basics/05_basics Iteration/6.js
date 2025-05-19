
// Do so more operations using  -> map() , filter()

const myArr = [ 1, 2, 3, 4, 5, 6]

// here r only 1 operation 
let arrOp = myArr.map ( (num) => num * 5 )
// console.log(arrOp);


// If I do more operation 
arrOp = myArr
        .map ( (num) => num * 3 )
        .map ( (num)  => num + 1 )
        .filter ( (num) => num %2 == 0 )

// console.log(arrOp);


/*
  ++++++++++++++++++++++++++++++++          Intro to reduce fn() 

  A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.

Parameters :

#_1 accumulator 
-> The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

#_2 currentValue
-> The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

#_3 currentIndex
-> The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

*/
const myArr2 = [2, 4, 5, 6]

/*
// ------------------------ ------    One syntax to use reduce fn ()

const reducer =  myArr2.reduce( function (acc, currVal) {
    console.log(`acc value  : ${acc}  &  currVal : ${currVal} `);
    return acc + currVal;   
}  , 2 )
*/


// // ------------------------ ----   Another syntax to use reduce fn ()

const reducer =  myArr2.reduce( (acc, currVal) => acc + currVal , 0) 

// console.log(` Total value : ${reducer} `);


// #_1 Assignment : Find the total price of item shopping for today .

const groceryItem = [
    {
        ItemName : "Paste",
        price : 55
    },
    {
        ItemName : "Dal",
        price : 85
    },
    {
        ItemName : "Biskit",
        price : 35
    },
    {
        ItemName : "Surf",
        price : 70.2
    },
    {
        ItemName : "Sathu",
        price : 140.3
    },
    {
        ItemName : "chokolate",
        price : 20.1
    }
]


// let totalPrice = groceryItem.reduce( (acc, item)  => acc + item.price, 0 )

 
let totalPrice = groceryItem.reduce( function (acc, item) {
     console.log(`Adding price : ${acc}  price : ${item.price}`);
     return acc + item.price;
} , 0 )

console.log(`Total Price : ${totalPrice}`);



