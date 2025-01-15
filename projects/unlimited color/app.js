
let randomColor=function(){
    let hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId=null;
const startChangingColor=function(){
    if(intervalId===null){
        intervalId=setInterval(changeColor,1500);
    }
    function changeColor(){
        document.body.style.backgroundColor=randomColor();
    }
};
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
};
document.getElementById("start").addEventListener('click',startChangingColor);
document.getElementById("stop").addEventListener('click',stopChangingColor);


