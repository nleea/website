import { Idata } from "../struct";
export const FiVas = (data: Idata) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.innerHTML = `
        <div class="card-body">
                <h1>Costos Fijos</h1>
                <p>Impuestos:${data.Dimpuesto}</p>
                <p>Seguros:${data.Aseguros}</p>
                <p>Materiales Indirectos: ${data.MaterialesIndirectos}</p>
                <p>Mano de Obra Indirecta: ${data.ManoDeObraIndirecta}</p>
                <p>Control de Calidad: ${data.AcontrolDeCalidad}</p>
                <p>Mantenimiento: ${data.Amantenimiento}</p>
                <p>D. maquinaria y equipo: ${data.AmaquinariaEquipo}</p>
                <p>Energia Electrica: ${data.EnegiaElectrica}</p>
                <p>Combustible: ${data.Acombustible}</p>
                <p>Costo Total Fijo: ${data.TotalCostoFIjo()}</p>
                <hr/>
                <h1>Costos Varibles</h1>
                <p>Mano de Obra Directa: ${data.manoDeObreDirecta}</p>
                <p>Impuestos: ${data.Aimpuestos}</p>
                <p>Combustible: ${data.Dcombustible}</p>
                <p>Mantenimiento Y Reparaciones: ${data.Dmantenimiento}</p>
                <p>Luz y Energia: ${data.Dluz}</p>
                <p>Costo Total Variable: ${data.TotalCostoVarible()}</p>
                <hr/>
                <p><strong>Costo Total:</strong> ${data.TotalNeto()}</p>
                <hr/>
                <h1>Costos semivariable</h1>
                  <p>Impuestos: ${data.Aimpuestos}</p>
                <h1>Metodo Punto Alto Punto Bajo</h1>
                  <button id="metodoP" class="btn btn-primary">Metodo</button>
                  <h1>Metodo Minimo Cuadrado</h1>
                    <button id="metodoM" class="btn btn-primary">Metodo</button>
        </div>
    `;
  view.style.width = "auto";

  return view;
};
