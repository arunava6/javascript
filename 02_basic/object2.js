const tinderUser={}
tinderUser.id=12345
tinderUser.email="abc@yahoo.com"
tinderUser.loggedIn=true

// console.log(tinderUser);

const regularUser={
    id:42324,
    FullName:{                  // objects in object
        first:"Arunava",
        last:"Saha"
    },
    email:"arunavasaha@gmail.com",
}

// console.log(regularUser.FullName.first);


// merging two objects
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const result_obj={...obj1,...obj2}
// console.log(result_obj);




//  Destructuring in objects
const bioData = {
  name: "Arunava",
  department: "CSE",
  cgpa: 8.0
};

console.log(bioData);
// destructuring in objects
const { department } = bioData;
// const { department: course } = bioData;         // this way we can rename department as course
console.log(department);

const {name,cgpa}=bioData
console.log(name,cgpa);



