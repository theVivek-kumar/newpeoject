const input = document.querySelector('.input');
const btn= document.querySelector('#btn');
const output = document.querySelector('.output');
function onclick(){
    let name = prompt("enter the name of stuedent");
    name1=input.value;
    result= name1 + name;
    output.innerHTML = result;
    
}
btn.addEventListener ('click',onclick);
