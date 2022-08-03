

let continuar = true
let cont = 0

debugger

do{

let ap = parseInt(prompt("elija una opcion: ||  1 --> Facturar  ||  2 --> Total a Pagar del Domiciliario  ||  "))

switch(ap){
    case 1:
        facturar()
    break;
    
    case 2:
        cuentaDomi()
    break;

    default:
        console.warn("Opcion incorrecta")
        
}

continuar = confirm("Desea continuar?")

}while(continuar)