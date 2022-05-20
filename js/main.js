function execute_1() {
    var a = prompt("Introduzca el primer numero");
    var b = prompt("Introduzca el segundo numero");
    var c = (parseInt(a) + parseInt(b));

    document.getElementById('result').innerHTML = "<br><p>La suma de ambos numeros es igual a: <a href='#result'>" + c + "</a></p>";
}

function reset() {
    document.getElementById('blue').style.backgroundColor = 'white' ;
    document.getElementById('green').style.backgroundColor = 'white' ;
    document.getElementById('yellow').style.backgroundColor = 'white' ;
    document.getElementById('red').style.backgroundColor = 'white' ;
    document.getElementById('black').style.backgroundColor = 'white' ;
}

function changeColor(color){
    if(color == 'blue') {
        document.getElementById('blue').style.backgroundColor = 'blue' ;
    } else if(color == 'green') {
        document.getElementById('green').style.backgroundColor = 'green' ;
    } else if(color == 'yellow') {
        document.getElementById('yellow').style.backgroundColor = 'yellow' ;
    } else if(color == 'red') {
        document.getElementById('red').style.backgroundColor = 'red' ;
    } else if(color == 'black') {
        document.getElementById('black').style.backgroundColor = 'black' ;
    }
}