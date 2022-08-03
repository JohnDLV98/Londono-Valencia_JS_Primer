debugger
let continuar = true

do{

let ap = parseInt(prompt("elija una opcion: 1--> agregar un producto  2--> imprimir valor total "))

switch(ap){
    case 1:
        agregarProducto()
    break;
    
    case 2:
        imprimirTotal(n)
    break;

    default:
        console.warn("Opcion incorrecta")
        
}

continuar = confirm("Desea continuar?")
}while(continuar)