document.querySelector("form").addEventListener("submit", function(evento) {
    // Ejercicio 2:
    const dni = document.getElementById("dni").value;

    if (dni.length !== 8) {
        alert("EI DNI debe contener 8 dígitos");
        evento.preventDefault();
        return;
    }

    // Ejercicio 1:
    const fechaInput = document.getElementById("fecha_nacimiento").value;

    if (fechaInput) {
        const fechaNac = new Date(fechaInput);
        const fechaActual = new Date();

        fechaActual.setHours(0, 0, 0, 0);

        const fechaAjustada = new Date(fechaNac.getTime() + fechaNac.getTimezoneOffset() * 60000);

        if (fechaAjustada > fechaActual) {
            alert("La fecha de nacimiento no puede ser posterior a la fecha actual");
            evento.preventDefault();
            return;
        }
    }
});

// EJERCICIO 3.1: Función constructora
function Actividad(nombre, lugar, dia, horario, cupo, estado) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;
}

// EJERCICIO 3.2: Clase Sistema Deportes
class SistemaDeportes {
    constructor() {
        this.actividades = []; // Array interno de actividades
    }

    agregarActividad(actividad) {
        this.actividades.push(actividad);
    }

    listarActividades() {
        return this.actividades;
    }
}

// EJERCICIO 3.3: Instanciar y cargar actividades
const sistema = new SistemaDeportes();

sistema.agregarActividad(new Actividad("Fútbol", "Cancha Universitaria", "Lunes", "18:00-20:00", 20, "Disponible"));
sistema.agregarActividad(new Actividad("Básquet", "Cancha Techada", "Martes", "17:00-19:00", 15, "Disponible"));
sistema.agregarActividad(new Actividad("Vóley", "Cancha Techada", "Miércoles", "18:00-20:00", 12, "Completo"));
sistema.agregarActividad(new Actividad("Atletismo", "Pista de Atletismo", "Jueves", "16:00-18:00", 25, "Disponible"));

// EJERCICIO 4:
const cuerpoTabla = document.getElementById("cuerpoTabla");

sistema.listarActividades().forEach(actividad => {

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${actividad.nombre}</td>
        <td>${actividad.lugar}</td>
        <td>${actividad.dia}</td>
        <td>${actividad.horario}</td>
        <td>${actividad.cupo}</td>
        <td>${actividad.estado}</td>
    `;

    cuerpoTabla.appendChild(fila);
});

// EJERCICIO 5:
const btnGenerar = document.getElementById("btnGenerar");
const contenedorParticipantes = document.getElementById("contenedorParticipantes");

btnGenerar.addEventListener("click", function() {
    contenedorParticipantes.innerHTML = "";

    const cantidad = parseInt(document.getElementById("cantidadParticipantes").value);

    if (cantidad >= 1 && cantidad <= 10) {

        for (let i = 1; i <= cantidad; i++) {

            const divParticipante = document.createElement("div");
            divParticipante.style.marginBottom = "20px";
            divParticipante.style.borderBottom = "1px solid #ccc";
            divParticipante.style.paddingBottom = "10px";

            divParticipante.innerHTML = `
                <h4>Participante ${i}</h4>
                <p>Apellido y Nombre: <input type="text"></p>
                <p>DNI: <input type="text"></p>
                <p>Fecha de nacimiento: <input type="date"></p>
                <p>Sexo: <input type="text"></p>
                <p>Nivel: <input type="text"></p>
            `;

            contenedorParticipantes.appendChild(divParticipante);
        }
    } else {
        alert("Por favor, ingrese un valor válido entre 1 y 10.");
    }
});