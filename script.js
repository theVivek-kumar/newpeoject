const input = document.querySelectorAll('.input');
const btn= document.querySelector('#btn');
const output = document.querySelector('.output');
function AreaOfTriangle(height,base){
    let  area = 1/2 *Number(input[0].value)*Number(input[1].value);
    console.log(typeof area);
    output.innerHTML="area of triangle is"+area;
  
}

    
   

 
btn.addEventListener ('click',AreaOfTriangle);
