let amigos = [];
let contador = 0;
let aux = 0;
function agregarAmigo(){
    if(document.getElementById("amigo").value == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(document.getElementById("amigo").value);
        console.log(amigos[contador]);
        listas();
        limpiar();
        contador++; 
    }
}
function limpiar(){
    document.getElementById("amigo").value = "";
}
function listas(){
    let a = document.getElementById("listaAmigos");
    a.innerHTML = "";
    for(let x=0;x <= contador;x++){
        let lit = document.createElement("li");
        lit.textContent = amigos[x];
        a.appendChild(lit);
    }

}
function sortearAmigo(){
    if(amigos.length > 0){
        Eliminar();
        aux = Math.floor(Math.random()*amigos.length);
        Mostrar();
    }
    else{
        alert("No hay amigos");
    }
}
function Eliminar(){
    let a = document.getElementById("listaAmigos");
    a.innerHTML = "";
}
function Mostrar(){
    let a=document.getElementById("resultado");
        a.innerHTML ="";
        let lit = document.createElement("li");
        lit.textContent = ("El amigo sorteado es:"+amigos[aux]);
        a.appendChild(lit);
}