const input = document.querySelector('.input');
const btn= document.querySelector('#btn');
const output = document.querySelector('.output');
function onclick(){
    let number = (Number(input.value));
    
    if(number%2===0){
        console.log("even");
        output.innerHTML="number is even";
        console.log(typeof number);
    }
    else{
        console.log("odd");
        output.innerHTML="number is odd"
    }
}


  
btn.addEventListener ('click',onclick);
