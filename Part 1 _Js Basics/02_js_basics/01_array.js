
const myArr = [1, 2, 3, 4]
// console.log(myArr);

const myArr2 = new Array(2,3,4,5)
// console.log(myArr2);


myArr.push(8)
myArr.push(12)
// myArr.pop()

myArr.push() // no any space will allocate with this
// console.log("length of array : ", myArr.length);

// console.log(myArr);

myArr.unshift(8)//enter the element from start

myArr.shift()// delete the element from start, thats shifting for rest of the elements

// console.log(myArr);

//To check any particular element is exist in the array 
// console.log(myArr.includes(9));//false
// console.log(myArr.includes(12));//true


const newArray = myArr.join() 
// console.log(myArr + " <= " + "typeOf this Arr :", typeof myArr );
// console.log(newArray  + " <= " + "typeOf this Arr :", typeof newArray);

console.log(myArr);


// Two Array method - slice(), splice()

// slice() => will not manipulate the orginal Array , just show which elements sliced without any deletion of element.
const n1Arr = myArr.slice(1,3)
console.log("Sliced Array : ",n1Arr );
console.log("N1 array : ", myArr);

// splice() => manipulate the array elements out the spliced element from array.
const n2Arr = myArr.splice(1,3)
console.log("Splice Array : ",n2Arr );
console.log("N2 array : ", myArr);


