const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for( const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


// const programming=["js","cpp","java","py"]
// for (const key of programming) {
//     console.log(key);
// }


const coding=["js","cpp","java","py"]

// coding.forEach(function (name) {
//     console.log(name);
// })

coding.forEach((name)=>{        // using arrow operation
    console.log(name);      
})



const myCoding=[
    {
        language:"javascript",
        fileName:"js"
    },
    {
        language:"python",
        fileName:"py"
    },
    {
        language:"C++",
        fileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item);
    console.log(item.language);
})


