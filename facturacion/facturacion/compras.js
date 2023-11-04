function funcion_calcular(){
    console.log(funcion_calcular);
    var precio=document.calculo.precio.value;
    var cantidad=document.calculo.cantidad.value;
    
    

    var calculo=precio*cantidad;
    alert('El total a pagar es de: ' + calculo);

    document.getElementById('compra').innerHTML=calculo;
}

