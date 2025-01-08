// There r different ways to add 2 or more arrays in a array 

const array1 = [1,2,3,'kal']

const array2 = ['R', 'Ak', 'lot']


//First way
// array1.push(array2)
// console.log(array1);

//  //2nd way
// const mergeArr = array1.concat(array2)
// console.log(mergeArr);

// 3rd way
const newMergeArr = [...array1, ...array2]
// console.log(newMergeArr);


// 4th way
// if I have nested array
const nstArr = [ 1,2,3,4, [4,5,6], 6, [7, [7,8,9]] ] 
const nstArrMerge = nstArr.flat(Infinity)
// console.log(nstArrMerge);


// console.log(Array.isArray("kalua","Rahul","lol"));
// console.log(Array.isArray([1,2,3]) );

//convert this to an array
console.log(Array.from("kalua"));

// console.log( Array.from( {name : "kalua"} , [name] ) );// this gives empty

