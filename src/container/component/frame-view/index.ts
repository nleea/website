import { Idata } from "../struct";
export const frameView = (data: Idata) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.innerHTML = `
    <div class="card-body">
        <p>Costos Primos: ${data.costosPrimos()}</p>
        <p>Costos Conversion: ${data.costosDeConversion()}</p>
        <p>Costos Produccion: ${data.costosDeProducion()}</p>
        <p>Costos Operacion: ${data.costosDeOperacion()}</p>
        <p>Precio Venta:${data.precioVenta()}</p>
        <p>Costos Total: ${data.costosTotal()}</p>
        <p>Costos Unitario: ${data.costoUnitario()}</p>
        <hr/>
        <h2>Ver las Formulas</h2>
        <button class="btn btn-primary" style="width:10rem;">Formulas</button>
    </div>
  `;
  view.style.width = "auto";

  return view;
};
