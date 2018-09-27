
// var nombre = "Gama";
// var apellido = "Suarez";
// varnombre_completo = nombre + " " + apellido;
//
// var edad = 21;
// var casadi = true;
//
// consol.log("Mi nombre es " + nombre);
// consol.log (edad)
// consol.log(casado)

// ----------------------------------------------------------------------------------------

//Saludo
// var nombre = "Gama"; //String
// console.log(nombre);
//
// if(nombre =="Gama") {
//   console.log("Hola Gama");
// } else if(nombre == "AlexisDoli") {
//   console.log("Hola AlexisDoli")
// } else {
//   console.log("Tu no eres Gama ni AlexisDoli")
// }

// -----------------------------------------------------------------------------------------

// // Lista del super
function lista_del_super () {
let Sal = Number(prompt("Cuanto cuesta la sal"));
let Arroz = Number(prompt("Cuanto cuesta el arroz"));
let Cereal = Number(prompt("Cuanto cuesta el cereal"));
let Azucar = Number(prompt("cuanto cuesta el azucar"));
let Helado = Number(prompt("Cuanto cuesta el helado"));

var Total_supermercado = Sal + Arroz + Cereal + Azucar + Helado

console.log("El total de tu super es $" + Total_supermercado)
}

// -----------------------------------------------------------------------------------------

// // Validaciones Felicidad o hambre
// let hambre = prompt("tienes hambre? (si, no)")
// if (hambre == "si") {
//   console.log("Estas triste")
// } else if (hambre == "no") {
//   console.log("Estas Feliz")
// }

// ------------------------------------------------------------------------------------------

// Peso ideal
// Ciclos
function peso_ideal () {
  let peso_ideal = Number(prompt("¿Cual es tu peso ideal?"));
  let peso_actual = Number(prompt("¿Cuanto pesas actualmente?"));
  let actividades = prompt("¿Quieres saber que tienes que hacer para llegar a tu peso ideal?");
  let semanas = 0;
  if (actividades == "si") {
    for(let i = peso_actual; i >= peso_ideal; i=i-1 ) {
      semanas = semanas+1;
      console.log("En la semana " + semanas + " pesas " + i + "kg");
    }
    console.log("Corre 30 min todos los dias de 9 a 9:30, come saludable por " + semanas + " semanas y has ejercicio todos los dias minimo 1 hora")
  }  else if (actividades == "no") {
    console.log("entonces sigue comiento hamburguesas y malteadas")
  }
}

// -------------------------------------------------------------------------------------------

//declarando la funcion
function Horas_de_sueño () {
  let dormir = Number(prompt("A que hora dormiste"));
  let despertar = Number(prompt("A que hora despertaste"));

  if(dormir <=12) {
      var horas_dormidas = despertar + (12-dormir);
  } else {
    var horas_dormidas = despertar + (24-dormir);
  }
  console.log("En total dormiste " + horas_dormidas + " horas.");
}
// Ejecutar la funcion

// --------------------------------------------------------------------------------------------------

// Regaño
// Declarar la funcion
function Regaño () {
   for(let contador = 0; contador <= 100; contador+=5) {
  console.log(contador);
   }
  console.log("En total Paco escribio del 0 al 100 de 5 en 5.")
}

// -------------------------------------------------------------------------------------------

function compu() {
  let tiro_compu = Math.floor(Math.random() * 3);

  if (tiro_compu == 0) {
      tiro_compu = "piedra";
  }
  if (tiro_compu == 1) {
      tiro_compu = "papel";
  }
  if (tiro_compu == 2) {
      tiro_compu = "tijeras";
  }
  let mi_tiro = prompt("¿piedra, papel o tijeras?")

// EMPATE
  if (mi_tiro == tiro_compu) {
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": Es un empate")
  }

// GANASTE!!!!
  if (mi_tiro == "piedra" && tiro_compu == "tijeras") {
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": GANASTE!!!!!")
  } else if (mi_tiro == "papel" && tiro_compu == "piedra") {
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": GANASTE!!!!!")
  } else if (mi_tiro == "tijeras" && tiro_compu == "papel"){
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": GANASTE!!!!!")
  }

// PERDISTE
  if (mi_tiro == "piedra" && tiro_compu == "papel") {
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": GANO LA COMPU")
  } else if (mi_tiro == "papel" && tiro_compu == "tijeras") {
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": GANO LA COMPU")
  } else if (mi_tiro == "tijeras" && tiro_compu == "piedra") {
    console.log("Mi tiro es: " + mi_tiro + ", Compu tiro: " + tiro_compu + ": GANO LA COMPU")
  }
}

// ---------------------------------------------------------------------------------------------------

function two_players() {

  let tiro_1P = prompt("¿piedra, papel o tijeras? Jugador 1")
  let tiro_2P = prompt("¿piedra, papel o tijeras? Jugador 2")

// EMPATE
  if (tiro_1P == tiro_2P) {
    console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Es un empate, Intenta otra vez")
  }

// GANASTE!!!! J1
  if (tiro_1P == "piedra" && tiro_2P == "tijeras") {
    console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Gano J1")
  } else if (tiro_1P == "papel" && tiro_2P == "piedra") {
    console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Gano J1")
  } else if (tiro_1P == "tijeras" && tiro_2P == "papel") {
    console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Gano J1")
  }

  // GANASTE!!!! J2
    if (tiro_2P == "piedra" && tiro_1P == "tijeras") {
      console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Gano J2")
    } else if (tiro_2P == "papel" && tiro_1P == "piedra") {
      console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Gano J2")
    } else if (tiro_2P == "tijeras" && tiro_1P == "papel") {
      console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": Gano J2")
    }
}

// // PERDISTE
//   if (tiro_1P == "piedra" && tiro_2P == "papel") {
//     console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": ")
//   } else if (tiro_1P == "papel" && tiro_2P == "tijeras") {
//     console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": ")
//   } else if (tiro_1P == "tijeras" && tiro_2P == "piedra") {
//     console.log("tiro_1P: " + tiro_1P + ", tiro_2p: " + tiro_2P + ": ")
//   }
