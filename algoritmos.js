function calcularPromedio(){
    let value1 = document.getElementById("n1").value;
    let value2 = document.getElementById("n2").value;
    let value3 = document.getElementById("n3").value;
    let value4 = document.getElementById("n4").value;
    let promedio = parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4); 
    let resultado= "<b>El promedio es:</b> " +promedio/4; 
    document.getElementById("resultado").innerHTML = resultado;
}