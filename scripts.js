
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

// Horas_de_sueño
// let dormir = Number(prompt("A que hora dormiste"));
// let despertar = Number(prompt("A que hora despertaste"));
//
// if(dormir <=12) {
//     var horas dormidas_ = despertar + (12-dormir);
// } else {
//   var horas_dormidas = despertar + (24-dormir);
// }
// console.log(horas_dormidas);


// Regaño
//Ciclos
// for(let contador = 0; contador <= 100; contador+=5) {
//   console.log(contador);
// }

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

// // Validaciones Felicidad o hambre
// let hambre = prompt("tienes hambre? (si, no)")
// if (hambre == "si") {
//   console.log("Estas triste")
// } else if (hambre == "no") {
//   console.log("Estas Feliz")
// }

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


// Regaño
// Declarar la funcion
function Regaño () {
   for(let contador = 0; contador <= 100; contador+=5) {
  console.log(contador);
   }
  console.log("En total Paco escribio del 0 al 100 de 5 en 5.")
}


function compu() {
  // let tiro = Math.random() * 2
  let mi_tiro = prompt("Te toca tirar. (recuerda que 0 es piedra, 1 papel y 2 tijeras)")
  let tiro = Math.floor(Math.random() * 3); // Numero random entre 0 y 2
  console.log(tiro);
}


// Math.random(); // Numero random entre el 0 y el 1 (con decimales)
// Math.round(); // Redondea arriba y abajo
// Math.floor(); // Redondea hacia abajo
// Math.ceil(); // Reondea havia arriba
