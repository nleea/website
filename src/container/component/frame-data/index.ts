import { data } from "../struct";
import { frameView } from "../frame-view/index";
import { Operacion } from "../frame-op/index";
import { CostosF } from "../frame-formulas/formulas_costos";
export const frameData = () => {
  // const data = {
  //   materiaPrimaDirecta: 51242400,
  //   manoDeObreDirecta: 3493799.35,
  //   CIF: 1097525.43,
  //   gastosDeVentas: 65128,
  //   gastosDeAbministracion: 22800,
  //   Financiamiento: 0,
  //   utilidad: 100,
  //   unidadesProducidas: 1164600,
  //   costoVenta: 7600,
  //   costosDeProducion: function () {
  //     return Number(
  //       (this.manoDeObreDirecta + this.materiaPrimaDirecta + this.CIF).toFixed(
  //         3
  //       )
  //     );
  //   },
  //   costosPrimos: function () {
  //     return Number(
  //       (this.materiaPrimaDirecta + this.manoDeObreDirecta).toFixed(3)
  //     );
  //   },
  //   precioVenta() {
  //     return Number(Math.floor(1 - this.utilidad) / 100);
  //   },
  //   costosDeConversion: function () {
  //     return Number((this.manoDeObreDirecta + this.CIF).toFixed(3));
  //   },
  //   costosDeOperacion: function () {
  //     return Number(
  //       (
  //         this.gastosDeVentas +
  //         this.Financiamiento +
  //         this.gastosDeAbministracion
  //       ).toFixed(3)
  //     );
  //   },
  //   costosTotal: function () {
  //     return Number(
  //       (this.costosDeProducion() + this.costosDeOperacion()).toFixed(3)
  //     );
  //   },
  //   costoUnitario: function () {
  //     return Number((this.costosTotal() / this.unidadesProducidas).toFixed(3));
  //   },
  // };
  const container = document.createElement("div");
  container.style.display = "inline-flex";
  container.style.width = "100%";
  const div = document.createElement("div");
  const frameIndex = document.querySelector(".frame-index")!;
  (frameIndex as HTMLElement).style.width = "90%";
  div.style.zIndex = "100";
  div.style.width = "80%";
  div.style.height = "29.8rem";
  div.style.overflow = "auto";
  div.innerHTML = `
        <section class="card">
            <div class="card-body">
            <div class="form-group">
            <label for="materias">Materias primas</label>
            <input  type="number" id="materias" class="form-control" value="${data.materiaPrimaDirecta}"/>
        </div>
        <div class="form-group">
            <label for="mano">Mano de Obra</label>
            <input  type="number" id="mano" class="form-control" value="${data.manoDeObreDirecta}"/>
        </div>
        <div class="form-group">
            <label for="CIF">C.I.F</label>
            <input  type="number" id="CIF" class="form-control" value="${data.CIF}"/>
        </div>
        <div class="form-group">
            <label for="ventas">Gatos de ventas</label>
            <input  type="number" id="ventas" class="form-control" value="${data.gastosDeVentas}"/>
        </div>
        <div class="form-group">
            <label for="abministracion">Gastos de abministracion</label>
            <input  type="number" id="abministracion" class="form-control" value="${data.gastosDeAbministracion}"/>
        </div>
        <div class="form-group">
          <label for="abministracion">Utilidad</label>
          <input  type="number" id="utilidad" class="form-control" value="${data.utilidad}"/>
        </div>
        <div class="form-group">
            <label for="Financiamiento">Financiamiento</label>
            <input  type="number" id="Financiamiento" class="form-control" value="${data.Financiamiento}"/>
        </div>
        <div class="form-group">
            <label for="unidades">unidades Producidas</label>
            <input  type="number" id="unidades" class="form-control" value="${data.unidadesProducidas}"/>
        </div>
        <button class="btn btn-primary" >Save</button>
            </div>
        </section>
    `;
  div.querySelector("button")!.addEventListener("click", () => {
    data.materiaPrimaDirecta = Number(
      (document.getElementById("materias") as HTMLInputElement).value
    );
    data.manoDeObreDirecta = Number(
      (document.getElementById("mano") as HTMLInputElement).value
    );
    data.CIF = Number(
      (document.getElementById("CIF") as HTMLInputElement).value
    );
    data.gastosDeVentas = Number(
      (document.getElementById("ventas") as HTMLInputElement).value
    );
    data.gastosDeAbministracion = Number(
      (document.getElementById("abministracion") as HTMLInputElement).value
    );
    data.utilidad = Number(
      (document.getElementById("utilidad") as HTMLInputElement).value
    );
    data.Financiamiento = Number(
      (document.getElementById("Financiamiento") as HTMLInputElement).value
    );
    data.unidadesProducidas = Number(
      (document.getElementById("unidades") as HTMLInputElement).value
    );
    const view = container.querySelector(".view");
    if (view) {
      const CostosView = frameView(data);
      view.replaceWith(CostosView);
      CostosView.querySelector("button")!.addEventListener("click", () => {
        Operacion(true);
        document.querySelector(".frame-index")!.appendChild(CostosF());
      });
    }
  });
  const CostosView = frameView(data);
  container.appendChild(div);
  container.appendChild(CostosView);
  frameIndex.appendChild(container);
  CostosView.querySelector("button")!.addEventListener("click", () => {
    Operacion(true);
    document.querySelector(".frame-index")!.appendChild(CostosF());
  });
};
