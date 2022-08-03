let contador = 0
function agregarProducto(){
    let nombre = prompt("Ingrese nombre del producto: ")
        let valor = parseInt(prompt("Ingrese valor del producto: "))
        imprimirProducto(nombre, valor)
        
        contador += valor

        imprimirTotal(contador)
}





function imprimirTotal(n){
    console.log("El valor total de la compra es: ", n)
}

function imprimirProducto(a, b){
    console.log("-- " + a + " -- Valor: " +b)
}

