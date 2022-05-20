function execute() {
    var a = prompt("Introduzca el primer numero");
    var b = prompt("Introduzca el segundo numero");
    var c = (parseInt(a) + parseInt(b));

    document.getElementById('result').innerHTML = "<br><p>La suma de ambos numeros es igual a: <a href='#result'>" + c + "</a></p>";
}