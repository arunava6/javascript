const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const conclusion=document.querySelector('#conclusion')
    if(height<0 || height==='' || isNaN(height)){
        result.innerHTML='Please give the valid height'
    }else if(weight<0 || weight==='' || isNaN(weight)){
        result.innerHTML='Please give the valid weight'
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>The BMI is: ${bmi}</span>`
        if(bmi<18.6){
            conclusion.innerHTML=`Under Weight`
        }else if(bmi>24.9){
            conclusion.innerHTML=`Over Weight`
        }else{
            conclusion.innerHTML=`Normal Range`
        }
    }
}) 



