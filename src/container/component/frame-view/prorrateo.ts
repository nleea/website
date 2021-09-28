import { Idata } from "../struct";
export const ProrrateoView = (data: Idata) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.innerHTML = `
    <div class="card-body" >
        <h1>Coeficioente de CIF:${data.coeficienteCIF()} </h1>
        <h1>Prorrateo Primario</h1>
        <p> Costo Primo Julio: ${data.manoj + data.materiaj} </p>
        <p> Costo Primo Agosto: ${data.manog + data.materiag} </p>
        <p> Costo Primo Septiembre: ${data.manos + data.materias} </p>
        <hr/>
        <h1> Gastos Indirectos Prorrateados </h1>
        <p>Julio: ${data.CIFprorrateadosJ()}</p>
        <p>Agosto: ${data.CIFprorrateadosA()}</p>
        <p>Septiembre: ${data.CIFprorrateadosS()}</p>
        <hr/>
        <h1>Costos total de produccion</h1>
        <p>Julio: ${data.costoTotalPj()}</p>
        <p>Agosto: ${data.costoTotalPa()}</p>
        <p>Septiembre: ${data.costoTotalPs()}</p>
        <h1>Prorrateo Secundario</h1>
          <h2>Costo total de Produccion</h2>
        <p> Mes de Julio: ${data.costoTotalPj()} </p>
        <p> Mes de Agosto: ${data.costoTotalPa()} </p>
        <p> Mes de Septiembre: ${data.costoTotalPs()} </p>
          <h2>Unidades producidas por mes</h2>
        <p>Julio: ${data.produccionJulio}</p>
        <p>Agosto: ${data.produccionAgosto}</p>
        <p>Septiembre: ${data.produccionSeptiembre}</p>
          <h2>Costo Unitario</h2>
        <p>Julio: ${data.costoUnitarioj()}</p>
        <p>Agosto: ${data.costoUnitarioa()}</p>
        <p>Septiembre: ${data.costoUnitarios()}</p>
    </div>
  `;
  view.style.width = "40%";

  return view;
};
