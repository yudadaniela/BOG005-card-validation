import validator from "./validator.js";

const boton = document.querySelectorAll("button");

boton[0].addEventListener("click", function () {
  //alert("funciono");
  let ccnumber = document.getElementById("number").value;
  const validation = validator.isValid(ccnumber);
  const maskify = validator.maskify(ccnumber);

  //alert(ccnumber);

  if (validation === true) {
    document.getElementById("pagoTarjId").style.display = "none";
    document.getElementById("validaId").style.display = "flex";
    document.querySelector("#textOne").innerHTML = " Su tarjeta No. " + maskify;
  } else {
    document.getElementById("pagoTarjId").style.display = "none";
    document.getElementById("invalidaId").style.display = "flex";
    document.querySelector("#textTwo").innerHTML = " Su tarjeta No. " + maskify;
  }
});

console.log(validator);
