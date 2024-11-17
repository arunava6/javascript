function hello(){
    console.log("Hello, World!");
}
hello()

function addNumber(num1,num2){
    let sum=num1+num2
    return sum;
}
console.log(addNumber(2,3));


function greeting(name){
    console.log(`Good Morning ${name}`);
}
greeting("Arunava")


function value(...num1){        // ...num1 is used to fetch other values from parameter
    return num1;
}
console.log(value(1,2,3,4));


// function in objects
const obj1={
    name:"Arunava",
    age:21
}

function result(getobject){
    console.log(`My name is ${getobject.name} and my age is ${getobject.age}`);
    
}
result(obj1)       


// Function in array
const arr1=[1,2,3,4]

function arr_func(getarray){
    console.log(getarray[1]);
    
}
arr_func(arr1)


