let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



let createDate = new Date(2025, 0, 8)// format [ yyyy/mm/dd ]
// console.log(createDate.toDateString());


// set manual date and time 
let time = new Date( 2025, 0, 8, 1, 16)
// console.log(time.toLocaleString()); // 1/8/2025, 1:16:00 AM

let dateTimes = new Date("08-01-2025 01:28") 
console.log(dateTimes.toLocaleString()); //  8/1/2025, 1:28:00 AM
console.log(dateTimes.getTime());

//
// let timestamp =  Date.now()
// console.log(timestamp);


let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() +1);
// console.log(newDate.getDay());

//  console.log(newDate.toLocaleString('default', {
//     dateStyle:"long",
//     weekday:"long",
// }));

  newDate.toLocaleString('default', {
        dateStyle:"long",
    })
