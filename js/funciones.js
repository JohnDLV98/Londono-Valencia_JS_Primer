// let contador = 0

// function facturar(){
// let continuar = true

//     do{
//         let nombre = prompt("Ingrese nombre del producto: ")
//         let valor = parseInt(prompt("Ingrese valor del producto: "))
//         imprimirProducto(nombre, valor)
//         contador += valor

//         continuar = confirm("Desea agregar otro producto?")

//     }while(continuar)
   
//         contadorTotal(contador)
// }
    
// function contadorTotal(n){
//     console.log("El total a pagar es de: "+n)
// }

// let contDomi = 0

// function cuentaDomi(){
//     let nombreDomi = prompt("Ingrese nombre del domiciliario: ")
//     let cantDomi = parseInt( prompt("Ingrese cantidad de domicilios: "))
//     let cantHora = parseInt( prompt("Ingrese cantidad de Horas trabajadas: "))
//     let cantFact = parseInt( prompt("Ingrese monto total de compras hechas por el domiciliario: "))
    
//     for(let i = 0; i < cantDomi; i++){
//         let j = i+1
//         let valor = parseInt( prompt("Ingrese valor del domicilio #: "+ j))
//         contDomi += valor
//     }

//     let total = contDomi - (cantHora * 4000) - cantFact

//     if (total < 0){
//         console.log("Se le debe al domiciliario: [" + nombreDomi + "]    un total de: $" + total)
//     }
//         else if(total > 0){
//             console.log("El domiciliario: [" + nombreDomi + "]    deberá entregar: $" + total)
//     }
//     else if (total === 0) {
//         console.log("la cuenta dio $0")
//     }

// }

// function imprimirProducto(a, b){
//     console.log("-- " + a + " -- Valor: " +b)
// }

