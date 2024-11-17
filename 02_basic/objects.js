// objects literal

const sym=Symbol("mykey")  // we have to define symbol before
const jsUser ={
    name:"Arunava",
    age:22,
    email:"arunava@gmail.com",
    location: "west Bengal",
    loggedIn: false,
    loggedDate:["tuesday","friday","sunday"],   
    [sym]: "mykey"      // we have to write this way for symbol datatype
}

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["name"]);           // this is most appropriate way

jsUser.location="punjab"
console.log(jsUser);


jsUser.greeting=function(){
    console.log(`Good Morning!,${this.name}`);      // this operator is used to call name from the object
}

console.log(jsUser.greeting());


