var vida = 100;

function ataqueFuego() {
    var poder = 15;
    atacar(poder);
}

function ataqueAgua() {
    var poder = 10;
    atacar(poder);
}

function ataqueTierra() {
    var poder = 5;
    atacar(poder);
}

function ataqueAire() {
    var poder = 20;
    atacar(poder);
}

function atacar(tipoAtaque) {
  vida = vida - tipoAtaque;
}

function deshabilitarBotones() {
    document.getElementById("botonFuego").disabled = true;
    document.getElementById("botonAgua").disabled = true;
    document.getElementById("botonTierra").disabled = true;
    document.getElementById("botonAire").disabled = true;
}


function estadoDeSalud(ataque) {
    if (vida <= 90) {
        console.log("Estas herido");
        console.log("Tu vida es de " + vida);
    }
    if(vida <= 0) {
        console.log("Estas muerto");
        deshabilitarBotones();
        console.log("Fin del juego");
    }
}