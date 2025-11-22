// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 24)
// In javascript the month starts from 0 means 0=january, 1=February 2=March eand so on

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 24, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toLocaleString());
// in this format YYYY-MM-DD the month start from 1 not from 0

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// converts to seconds console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})