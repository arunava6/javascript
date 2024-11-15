// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())


// let newDate=new Date(2023,0,23)        // 0 is month and month start from 0
 let createDate=new Date("01-04-2023")
console.log(createDate.toDateString())


let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());


console.log(`Today date is ${newDate.toLocaleDateString()} and time is ${newDate.toLocaleTimeString()}`);


