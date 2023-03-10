// Crear Personajes

// Personajes que se creararn son un total de 10 (fuego, agua, tierra, aire, roca, hielo, electricidad, planta, veneno, metal)

var personajeFuego = {
    nombre: elegirNombreFuego(),
    "poderPrincipal": "Fuego",
    //vida tiene un valor aleatorio entre 0 y 500
    vidaFuego : Math.floor(Math.random() * 500),
    //ataque tiene un valor aleatorio entre 0 y 200
    ataqueFuego : Math.floor(Math.random() * 200),
    //defensa tiene un valor aleatorio entre 0 y 200
    defensaFuego : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoFuego",
}

//Funcion para elegir nombre de personaje a partir de un array de nombres

function elegirNombreFuego(){
    var nombres = ["Vulkar", "Pyron", "Inferno", "Solara", "Blazea", "Flareonix", "Emberus", "Scorch", "Helios", "Ignisus"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeAgua

var personajeAgua = {
    nombre: elegirNombreAgua(),
    "poderPrincipal": "Agua",
    vidaAgua : Math.floor(Math.random() * 500),
    ataqueAgua : Math.floor(Math.random() * 200),
    defensaAgua : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoAgua",
}

function elegirNombreAgua(){
    var nombres = ["Aqua", "Nereus", "Coraline", "Oceanus", "Poseidon", "Nixie", "Tethys", "Triton", "Neptune", "Azura"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeTierra

var personajeTierra = {
    nombre: elegirNombreTierra(),
    "poderPrincipal": "Tierra",
    vidaTierra : Math.floor(Math.random() * 500),
    ataqueTierra: Math.floor(Math.random() * 200),
    defensaTierra : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoTierra",
}

function elegirNombreTierra(){
    var nombres = ["Gaia", "Geode", "Stonar", "Golem", "Bouldra", "Monty", "Terrax", "Terra", "Agatha", "Kratos"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeAire

var personajeAire = {
    nombre: elegirNombreAire(),
    "poderPrincipal": "Aire",
    vidaAire : Math.floor(Math.random() * 500),
    ataqueAire : Math.floor(Math.random() * 200),
    defensaAire : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoAire",
}

function elegirNombreAire(){
    var nombres = ["Aero", "Nimbus", "Ventus", "Breezus", "Zephyr", "Cyclonix", "Skyler", "Sylphie", "Aelius", "Gusto"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeRoca

var personajeRoca = {
    nombre: elegirNombreRoca(),
    "poderPrincipal": "Roca",
    vidaRoca : Math.floor(Math.random() * 500),
    ataqueRoca : Math.floor(Math.random() * 200),
    defensaRoca : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoRoca",
}

function elegirNombreRoca(){
    var nombres = ["Granitus", "Stoneheart", "Pebbles", "Crystalus", "Terron", "Geodeus", "Golemar", "Mountaine", "Krakatoa", "Quartzon"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeHielo

var personajeHielo = {
    nombre: elegirNombreHielo(),
    "poderPrincipal": "Hielo",
    vidaHielo : Math.floor(Math.random() * 500),
    ataqueHielo : Math.floor(Math.random() * 200),
    defensaHielo : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoHielo",
}

function elegirNombreHielo(){
    var nombres = ["Frost", "Glacier", "Hail", "Ice", "Icicle", "Crystal", "Snow", "Winter", "Blizzard", "Arctic"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeElectricidad

var personajeElectricidad = {
    nombre: elegirNombreElectricidad(),
    "poderPrincipal": "Electricidad",
    vidaElectricidad : Math.floor(Math.random() * 500),
    ataqueElectricidad : Math.floor(Math.random() * 200),
    defensaElectricidad : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoElectricidad",
}

function elegirNombreElectricidad(){
    var nombres = ["Bolt", "Flash", "Lightning", "Thunder", "Watt", "Shock", "Arc", "Tesla", "Surge", "Blitz"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajePlanta

var personajePlanta = {
    nombre: elegirNombrePlanta(),
    "poderPrincipal": "Planta",
    vidaPlanta : Math.floor(Math.random() * 500),
    ataquePlanta : Math.floor(Math.random() * 200),
    defensaPlanta : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoPlanta",
}

function elegirNombrePlanta(){
    var nombres = ["Flora", "Vine", "Fern", "Chloris", "Blossom", "Leaf", "Botanica", "Petal", "Thistle", "Vines"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeVeneno

var personajeVeneno = {
    nombre: elegirNombreVeneno(),
    "poderPrincipal": "Veneno",
    vidaVeneno : Math.floor(Math.random() * 500),
    ataqueVeneno : Math.floor(Math.random() * 200),
    defensaVeneno : Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoVeneno",
}

function elegirNombreVeneno(){
    var nombres = ["Venom", "Toxic", "Stryke", "Viper", "Poison", "Scorpion", "Fang", "Nocuous", "Spite", "Antidote"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// personajeMetal

var personajeMetal = {
    nombre: elegirNombreMetal(),
    "poderPrincipal": "Metal",
    vidaMetal : Math.floor(Math.random() * 500),
    ataqueMetal: Math.floor(Math.random() * 200),
    defensaMetal: Math.floor(Math.random() * 200),
    "poderDefensa": "EscudoMetal",
}

function elegirNombreMetal(){
    var nombres = ["Iron", "Steel", "Alloy", "Copper", "Bronze", "Silver", "Gold", "Titanium", "Platinum", "Mercury"];
    var nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
    return nombreElegido;
}

// Funcion elegirPersonaje, devuelve un personaje aleatorio
// Colocar botones para elegir personaje

function elegirPersonaje(){
    var personajes = [personajeFuego, personajeAgua, personajeTierra, personajeAire, personajeRoca, personajeHielo, personajeElectricidad, personajePlanta, personajeVeneno, personajeMetal];
    var personajeElegido = personajes[Math.floor(Math.random() * personajes.length)];
    return personajeElegido;
}

// Funcion ataque, recibe 2 parametros, el valor del ataque del personaje y el de defensa del enemigo
// Colocar boton para atacar

function ataque(ataque, defensa){
    var daño = ataque - defensa;
    return daño;
}

// Funcion Vida, recibe 2 parametros, el valor de la vida del personaje y el daño que le hizo el enemigo
// Colocar un recuadro que muestre la vida del personaje y se actualice cada vez que reciba daño


function vida(vida, daño){
    var vidaFinal = vida - daño;
    return vidaFinal;
}

// Funcion regenerar, se activa cuando el personaje recibe daño y su vida es menor al ataque del enemiigo
// Esta funcion solo se puede activar 1 vez por batalla y por personaje
// Colocar un boton para regenerar vida y que se active cuando la vida del personaje sea menor al ataque del enemigo
// el valor de regeneracion estara entre 100 y 150

function regenerar(vida){
    var regeneracion = Math.floor(Math.random() * 50) + 100;
    var vidaFinal = vida + regeneracion;
    return vidaFinal;
}