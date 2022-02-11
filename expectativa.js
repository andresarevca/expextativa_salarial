function calcularAumento(sueldo,aumento) {
    const ganAu=sueldo*(aumento/100);

    return ganAu ;
};

function onClickButtonAumento(){
    const labelAumento=document.getElementById("labelAumento")

    const inputSueldo=document.getElementById("inputGuaranies");
    const sueldoValue=inputSueldo.value;

    const inputAumento=document.getElementById("inputAumento");
    const aumentoValue=inputAumento.value;

    const aumento=calcularAumento(sueldoValue,aumentoValue);
    labelAumento.innerText=aumento + ' Gs.';

}