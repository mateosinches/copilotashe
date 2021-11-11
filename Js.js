var numerosss = Array();

function guardar(){
    var nume = document.getElementById("nume").value;
    numerosss.push(nume);
    document.getElementById("nume").value = "";
}
function mostrar_lista(){
    document.getElementById("numeros").innerHTML = "Lista De Numeros: " + nume;

}
function numero_mayor() {
    const nums_ordenados = numerosss.sort(function(a, b){return a-b});
    mayor = nums_ordenados[nums_ordenados.length - 1];
    if (mayor >= 100){
        document.getElementById("mayor").style.color = "green";
        document.getElementById("mayor").innerHTML = "Numero Mayor: " + mayor;
    }else if(mayor < 100){
        document.getElementById("mayor").style.color = "red";
        document.getElementById("mayor").innerHTML = "Numero Mayor: " + mayor;
    }
}

function numero_menor() {
    const nums_ordenados = numerosss.sort(function(a, b){return a-b});
    menor = nums_ordenados[0];
    if (menor >= 100){
        document.getElementById("menor").style.color = "red";
        document.getElementById("menor").innerHTML = "Numero Menor: " + menor;
    }else if(menor < 100){
        document.getElementById("menor").style.color = "green";
        document.getElementById("menor").innerHTML = "Numero Menor: " + menor;
    }
}