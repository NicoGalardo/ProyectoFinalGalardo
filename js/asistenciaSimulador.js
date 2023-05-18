// Obtener referencia al formulario y al contenedor de asistencias
const formulario = document.getElementById('asistenciaForm');
const asistenciaContainer = document.getElementById('asistenciaContainer');

// Array para almacenar las asistencias registradas
let asistencias = [];

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const lugarTrabajo = document.getElementById('lugarTrabajo').value;
    const fecha = document.getElementById('fecha').value;
    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSalida = document.getElementById('horaSalida').value;

  // Crear objeto de asistencia
    const asistencia = {
    nombre,
    apellido,
    lugarTrabajo,
    fecha,
    horaEntrada,
    horaSalida
    };

  // Agregar la asistencia al array
    asistencias.push(asistencia);

  // Mostrar las asistencias registradas
    mostrarAsistencias();

  // Limpiar el formulario
    formulario.reset();
});

// Función para mostrar las asistencias registradas
function mostrarAsistencias() {
  // Limpiar el contenedor de asistencias
    asistenciaContainer.innerHTML = '';

  // Recorrer el array de asistencias y mostrar cada una
    asistencias.forEach((asistencia, index) => {
    const asistenciaItem = document.createElement('div');
    asistenciaItem.classList.add('asistencia-item');
    asistenciaItem.innerHTML = `
        <h3>Asistencia ${index + 1}:</h3>
        <p>Nombre: ${asistencia.nombre} ${asistencia.apellido}</p>
        <p>Lugar de Trabajo: ${asistencia.lugarTrabajo}</p>
        <p>Fecha: ${asistencia.fecha}</p>
        <p>Hora de Entrada: ${asistencia.horaEntrada}</p>
        <p>Hora de Salida: ${asistencia.horaSalida}</p>
    `;

    asistenciaContainer.appendChild(asistenciaItem);
    });
}
