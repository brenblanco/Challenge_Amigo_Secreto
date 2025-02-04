// lista donde almacenaremos los nombres de mis amigos
let amigos = [];

//Esta funcion se encargara de agregar los nombres de mis amigos y a su vez
//antes de agregarlos los valida que no se ingrese nombres en blanco
//que no se repitan y que minimo ingrese 3 amigos para sortear
function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo");
    const nombre = nombreAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreAmigo.value = "";
}

//cada vez que se agrega un nombre la lista se actualizara
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Aqui se realizará el sorteo y se valida antes de sortear 
//que minimo hayan 3 amigos agregados

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debe haber al menos 3 participantes para realizar el sorteo.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").textContent = `Amigo secreto: ${amigoSorteado}`;

    // Espera 5 segundos antes de reiniciar el juego
    setTimeout(reiniciarJuego, 5000);
}

//Una vez sorteado el amigo secreto debe reiniciarse
//para empezar un nuevo juego
function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}
