// Obtener referencia al formulario y al contenedor de asistencias
const formulario = document.getElementById('asistenciaForm');
const asistenciaContainer = document.getElementById('asistenciaContainer');

// Obtener las asistencias almacenadas del localStorage al cargar la página
let asistencias = JSON.parse(localStorage.getItem('asistencias')) || [];

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

  // Guardar las asistencias en el localStorage
  localStorage.setItem('asistencias', JSON.stringify(asistencias));

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
      <button onclick="eliminarAsistencia(${index})">Eliminar</button>
    `;

    asistenciaContainer.appendChild(asistenciaItem);
  });
}

// Función para eliminar una asistencia específica
function eliminarAsistencia(index) {
  asistencias.splice(index, 1); // Eliminar la asistencia del array
  localStorage.setItem('asistencias', JSON.stringify(asistencias)); // Actualizar el localStorage
  mostrarAsistencias(); // Actualizar la vista de asistencias
}

// Función para eliminar todas las asistencias almacenadas en el localStorage
function eliminarTodasLasAsistencias() {
  localStorage.removeItem('asistencias');
  asistencias = []; // Limpiar el array de asistencias
  mostrarAsistencias(); // Actualizar la vista de asistencias
}

// Mostrar las asistencias al cargar la página
mostrarAsistencias();
