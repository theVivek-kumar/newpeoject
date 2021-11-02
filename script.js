const input = document.querySelector('.input');
const btn= document.querySelector('#btn');
const output = document.querySelector('.output');
function onclick(){
    let name = prompt("enter the name of stuedent");
    switch (name){
        case 'apple':
        console.log("120rs");
        break;
        case 'banana':
            console.log("40rs");
            break;
            case 'cat':
                console.log("345");
                break;


    }

btn.addEventListener ('click',onclick);
