// Clase Persona
class Persona {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }

    calcularPromedio() {
        let suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }

    encontrarNotaMaxima() {
        return Math.max(...this.notas);
    }

    filtrarNotasMayores(valor) {
        return this.notas.filter(nota => nota > valor);
    }
}

// Manejador de eventos para el botón "Ingresar Personas"
document.getElementById("ingresarPersonas").addEventListener("click", function () {
    const cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value);
    let personas = [];

    for (let i = 0; i < cantidadPersonas; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}`);
        const cantidadNotas = parseInt(prompt(`Ingrese la cantidad de notas para ${nombre}`));
        let notas = [];

        for (let j = 0; j < cantidadNotas; j++) {
            const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} para ${nombre}`));
            notas.push(nota);
        }

        personas.push(new Persona(nombre, notas));
    }

    // Almacenar las personas en Local Storage como JSON
    localStorage.setItem("personas", JSON.stringify(personas));

    // Mostrar los resultados en el DOM
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    for (let persona of personas) {
        const promedio = persona.calcularPromedio();
        const notaMaxima = persona.encontrarNotaMaxima();
        const valorFiltro = parseFloat(prompt(`Ingrese un valor para filtrar notas mayores de ${persona.nombre}:`));
        const notasFiltradas = persona.filtrarNotasMayores(valorFiltro);

        const personaResultados = document.createElement("div");
        personaResultados.innerHTML = `
            <p>Notas de ${persona.nombre}: ${persona.notas.join(", ")}</p>
            <p>El promedio de las notas de ${persona.nombre} es: ${promedio}</p>
            <p>La nota más alta de ${persona.nombre} es: ${notaMaxima}</p>
            <p>Notas mayores a ${valorFiltro} de ${persona.nombre}: ${notasFiltradas.join(", ")}</p>
        `;

        resultadosDiv.appendChild(personaResultados);
    }
});
