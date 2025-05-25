fetch("alumnos_100.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }
    return response.json();
  })
  .then((data) => {
    const tbody = document.querySelector("#tabla-alumnos tbody");

    data.forEach((alumno) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${alumno.matricula}</td>
        <td>${alumno.Paterno}</td>
        <td>${alumno.Materno}</td>
        <td>${alumno.Nombre}</td>
      `;
      tbody.appendChild(fila);
    });
  })
  .catch((error) => {
    console.error("Error al cargar los alumnos:", error);
  });
