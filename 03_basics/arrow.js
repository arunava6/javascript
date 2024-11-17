
const  user={
    name:"Arunava",
    price:999,
    message:function(){
        console.log(`${this.name}, welcome to the website!`);           // this is used to fetch the the value in same context
        // console.log(this);
        
    }
}
user.message();
user.name="Mita"
user.message()


function hello(){
    console.log(this);
}
//  hello();



// arrow function

const add= (num1,num2) => {
    return num1+num2        // explicit return
}
console.log(add(3,4));


// another way
// implicit return 
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4));

const name= () => ({username:"Arunava"})
console.log(name());


