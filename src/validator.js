const validator =  {
   // ...FUNCION ISVALID
   
   isValid : (ccnumber) =>{
    const numdig = ccnumber.length;
    let suma = 0;
    const total = 0;
    var result = false;
    
    if (numdig>14 && numdig<=16) {
       
       for(let i = 15; i>=0; i--){
        let vectorinver = parseInt(ccnumber[i]);
      }

      for(let j=0; j<numdig; j++) {
        if (j%2 === 0){
          vectorinver*=2;
        }
          if (vectorinver[j]>9) { //verificar si  esta escrito correctamente 
            vectorinver -=9;  //verificar si esta escrito correctamente 
          }    
        suma += vectorinver
      }
    } else { 
      result = false;
    }
    total = suma % 10;
    if (total===0) {
      result = true;
    } else { 
      result = false;
    }
    return result;
  }
  // ...FUNCION MASCARA
};


export default validator;
