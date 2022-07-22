const validator =  {
   // ...FUNCION ISVALID
   
   isValid : (ccnumber) =>{
    let numdig = ccnumber.length;
    let suma = 0;
    let total = 0;
    var result = false;

    console.log(numdig);
    
    //Si numero es mayor a 14 o menor que 16
    if (numdig>9 && numdig<=16) {
      let vectorinver ="";
      let vectoroper = ["","","","","","","","","","","","","","","","",];
     
// inversa del vector 
       for(let i = (numdig-1); i>=0; i--){
        vectorinver += ccnumber[i];
        
       }
      console.log(vectorinver);

//De string a array, multiplicacion y suma de digitos 
     for(let j=0; j<vectorinver.length; j++) {
        vectoroper[j]=parseInt(vectorinver[j]);

        //console.log(vectorinver[j]);
        console.log(vectoroper[j]);
        if (j%2 !== 0){
        vectoroper[j]=vectoroper[j]*2;
          //console.log(vectoroper[j]);
        }
        if (vectoroper[j]>9) { 
          vectoroper[j] -=9;  
        } 

        //console.log(vectoroper[j]);

        suma += vectoroper[j];
        
      }
     // console.log(suma);
     //operacion de residuo y resultado
    total = suma % 10;
    //console.log(total);
    if(total===0){
      result=true
    }else{
      result=false
    }
//Numeros no validos 
    }else{
      return result
    }
    
    return result;
  },
  // ...FUNCION MASCARA------------------------------------------------------------------------------------------
   
    maskify : (ccnumber) =>{
    let digit=ccnumber.length
    let lastdigit=""; 
    let numaskify="";
    let masksymbol="";
    let frontdigit = digit-4;
    //console.log(frontdigit);
    
    if(digit<=4){
      numaskify=ccnumber;
    }else{

    for (let i=frontdigit; i<digit ;i++) {
       lastdigit +=ccnumber[i];
         
        }
        //console.log(lastdigit);

        for(let j=0;j<frontdigit;j++){
          masksymbol+='#';
        }
    //console.log(masksymbol);
    
    numaskify=masksymbol+lastdigit;
  }      
    /*let masksymbol = '#';
    let lastdigit =a.slice(-4);
    //console.log(lastdigit);
    let numaskify = masksymbol.repeat(4);
    console.log=(numaskify);*/


    return numaskify;
    

    
    }
  

};

export default validator;
