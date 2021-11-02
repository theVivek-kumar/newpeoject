const input = document.querySelector('.input');
const btn= document.querySelector('#btn');
const output = document.querySelector('.output');
function onclick(){
    let name = prompt("enter the name of stuedent");
     if(name>=15&&name<=20)
     {
         console.log("yes");

     }
     else{
         console.log("no");
     }
    
}
btn.addEventListener ('click',onclick);
