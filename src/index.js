import validator from './validator.js';

const boton = document.querySelectorAll('button');

boton[0].addEventListener('click', function (){
    //alert("funciono");
    let ccnumber = document.getElementById("number").value;
    //alert(ccnumber);
    console.log(validator['isValid'](ccnumber))

    console.log(validator['maskify'](ccnumber))
})


console.log(validator);
