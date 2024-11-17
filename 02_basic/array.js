// array

// const myarr=[1,2,3,4,5]
// console.log(myarr);
// console.log(myarr[1]);

// myarr.push(6)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);



const marvel=["Thor","Captain America","Iron Man"]
const dc=["Flash","Batman","Superman"]
// use for concat two arrays
console.log(marvel.concat(dc));

// most useful way to concatenate arrays are spread operator
 console.log(...marvel,...dc);      // ... is used to spread the array
  
 
let score1=100
let score2=200
let score3=300
// convert all the individual array in the array
console.log(Array.of(score1,score2,score3));


