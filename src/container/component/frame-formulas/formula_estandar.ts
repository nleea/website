export const estandarF = () => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.style.width = "100%";
  view.innerHTML = `
      <div class="card-body">
        <h1>Formulas Costo Estandar</h1>
          <h2>Materia Prima</h2>
            <p><strong>Precio: </strong> Variacion Precio: (precio Real - Precio Estandar) * Cantidad Real </p>
            <p><strong>Cantidad: </strong> Variacio Cantidad: (Cantidad Real - Cantidad Estandar) * Precio Estandar </p>
            <hr/>
          <h2>Mano de Obra</h2>
            <p><strong>Salario: </strong> Variacion dalario: (Salario Real - Salario Estandar) * Tiempo Real Trabajado </p>
            <p><strong>Tiempo: </strong> variacio  Tiempo: (Tiempo Real - Tiempo Estandar) * Sueldo Estandar </p>
            <hr/>
          <h2>Contratos de Servicios</h2>
            <p><strong>Precio: </strong> Variacion Precio: (Precio Real - Precio Estadar) * Cantidad Real </p>
            <p><strong>Cantidad: </strong> variacion Cantidad: (Cantidad Real - Cantidad Estandar) * Precio Estandar  </p>
            <hr/>
          <h2>C.I.F</h2>
            <p><strong>Volumen: </strong> Variacion Capacidad: (CIF aplicado - CIF presupuestado) </p>
            <p><strong>Presupuesto: </strong> Variacion Presio: (CIF Presupuestado - CIF REal) </p>
            <p><strong>Eficiencia: </strong> Variacion Eficiencia: (Horas Aplicada - Horas Reales) * Tasa Variable </p>
            <p><strong>Cantidad: </strong> Variacion Cantidad: (Horas Reales * Tasa variable) - CIF Real </p>
      </div>
   `;
  return view;
};
