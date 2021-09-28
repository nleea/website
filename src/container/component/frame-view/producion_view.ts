import { Idata } from "../struct";
export const viewProduction = (data: Idata) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.innerHTML = `
    <div class="card-body">
      <h1>Producciones equivalentes</h1>
      <hr/>
        <p>Costo unitario de materia prima: ${data.costoUnitarioDeMateriaPrima()}</p>
        <p>Costo unitario mano de obra: ${data.costoUnitarioManodeobra()}</p>
        <p>Costo unitario de CIF: ${data.costosUnitariosCIF()}</p>
        <p>Costo unitario del Proceso: ${data.costoUnitarioDelProceso()}</p>
        <hr/>
      <h1>Informes de costos:</h1>
        <p>Unidades Terminadas X Costo unitario ${
          data.unidadesTerminadas * data.costoUnitarioDelProceso()
        }</p>   
        <h2>Unidades en Proceso</h2>
        <p>Unidades equivalentes materia prima X Costo unitario materia prima: ${
          data.unidadesEquivalentesAProductosMateriaPrima() *
          data.costoUnitarioDeMateriaPrima()
        }</p>
        <p>Unidades equivalentes mano de obra X costo unitario mano de obra: ${
          data.unidadesEquivalentesAProductosManoDeObra() *
          data.costoUnitarioManodeobra()
        } </p>
        <p>Unidades equivalentes C.I.F X costos unitarios C.I.F ${
          data.unidadesEquivalentesAProductosCIF() * data.costosUnitariosCIF()
        }</p>
          <p><strong>Total:</strong> ${data.TotalInformeDeCostos()}</p>
        <h1>Formulas</h1>
            <button id="metodoP" class="btn btn-primary">Formulas</button>
    </div>
  `;
  view.style.width = "auto";

  return view;
};
