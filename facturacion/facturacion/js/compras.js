function funcion_calcular(){
    precio = document.getElementById('precio').value;
    cantidad = document.getElementById('Cantidad').value;
    calculo = precio * cantidad;
    window.alert('El total a pagar es de: ' + calculo);
    document.getElementById('compra').innerHTML = calculo;
}

