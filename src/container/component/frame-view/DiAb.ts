import { Idata } from "../struct";
export const DiAb = (data: Idata) => {
  const div = document.createElement("div");
  div.style.zIndex = "100";
  div.style.width = "60%";
  div.style.height = "29.8rem";
  div.className = "card";
  div.classList.add("view");
  div.style.overflow = "auto";
  div.innerHTML = `
        <div class="card-body">
        <h1>Costos Directos</h1>
        <p>Materia Prima: ${data.materiaPrimaDirecta}</p>
        <p>Mano de Obra: ${data.manoDeObreDirecta}</p>
        <p>Combustible: ${data.Dcombustible}</p>
        <p>Mantenimiento: ${data.Dmantenimiento}</p>
        <p>Luz: ${data.Dluz}</p>
        <hr/>
        <h1>Costos Absorbentes</h1>
        <p>Precio: ${data.precio}</p>
        <p>Productos: ${data.Amateriales()}</p>
        <p>Impuestos: ${data.Aimpuestos}</p>
        <p>Seguros: ${data.Aseguros}</p>
        <p>Mano de Obra: ${data.AmanoDeObra()}</p>
        <p>Control de Calidad: ${data.AcontrolDeCalidad}</p>
        <p>Mantenimiento: ${data.Amantenimiento}</p>
        <p>Maquinaria: ${data.AmaquinariaEquipo}</p>
        <p>Combustible: ${data.Acombustible}</p>
        <p>Total: ${data.Total()}</p>
        <hr/>
        <p>Total Neto: ${data.totalNeto()}</p>
        </div>
    `;
  div.style.width = "auto";
  return div;
};
