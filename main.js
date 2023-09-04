alert("Calculadora de promedios");

let nota1;
let nota2;
let promedio;

nota1 = parseInt(prompt("Ingrese la primera nota"));
nota2 = parseInt(prompt("Ingrese la segunda nota"));

promedio = calcularPromedio(nota1, nota2);

console.log("El promedio es: " + promedio);
alert("El promedio es: " + promedio);

function calcularPromedio(nota1, nota2) {
  return (nota1 + nota2) / 2;
} 