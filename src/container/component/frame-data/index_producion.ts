import { data } from "../struct";
import { viewProduction } from "../frame-view/producion_view";
import { Operacion } from "../frame-op/index";
import { InformeF } from "../frame-formulas/formula_informeC";
export const Producion = () => {
  // const equivalentes: Uequivalentes = {
  //   unidadesTerminadas: Number(0),
  //   unidadesEnProceso: Number(0),
  //   porcentajeDeAvanceMateriaPrima: Number(0),
  //   porcentajeDeAvanceManoDeObra: Number(0),
  //   porcentajeDeAvanceCIF: Number(0),
  //   costoTotalDeMateriaPrima: Number(0),
  //   costoTotalManoDeObra: Number(0),
  //   costosTotalCIF: Number(0),
  //   unidadesEquivalentesManoDeObra: function () {
  //     if (this.unidadesEnProceso === 0) {
  //       return 0;
  //     }
  //     return (
  //       Math.floor(
  //         equivalentes.unidadesEnProceso *
  //           equivalentes.porcentajeDeAvanceManoDeObra
  //       ) / 100
  //     );
  //   },
  //   unidadesEquivalentesMateriaPrima: function () {
  //     if (this.unidadesEnProceso === 0) {
  //       return 0;
  //     }
  //     return (
  //       Math.floor(
  //         equivalentes.unidadesEnProceso *
  //           equivalentes.porcentajeDeAvanceMateriaPrima
  //       ) / 100
  //     );
  //   },
  //   unidadesEquivalentesCIF: function () {
  //     if (this.unidadesEnProceso === 0) {
  //       return 0;
  //     }
  //     return Number(
  //       Math.floor(
  //         equivalentes.unidadesEnProceso * equivalentes.porcentajeDeAvanceCIF
  //       ) / 100
  //     );
  //   },
  //   unidadesEquivalentesAProductosCIF: function () {
  //     return this.unidadesTerminadas + this.unidadesEquivalentesCIF();
  //   },
  //   unidadesEquivalentesAProductosManoDeObra: function () {
  //     return this.unidadesTerminadas + this.unidadesEquivalentesManoDeObra();
  //   },
  //   unidadesEquivalentesAProductosMateriaPrima: function () {
  //     return this.unidadesTerminadas + this.unidadesEquivalentesMateriaPrima();
  //   },
  //   costoUnitarioDeMateriaPrima: function () {
  //     if (this.costoTotalDeMateriaPrima === 0) {
  //       return 0;
  //     } else {
  //       return Number(
  //         (
  //           this.costoTotalDeMateriaPrima /
  //           this.unidadesEquivalentesAProductosMateriaPrima()
  //         ).toFixed(2)
  //       );
  //     }
  //   },
  //   costoUnitarioManodeobra: function () {
  //     if (this.costoTotalManoDeObra === 0) {
  //       return 0;
  //     } else {
  //       return Number(
  //         (
  //           this.costoTotalManoDeObra /
  //           this.unidadesEquivalentesAProductosManoDeObra()
  //         ).toFixed(2)
  //       );
  //     }
  //   },
  //   costosUnitariosCIF: function () {
  //     if (this.costosTotalCIF === 0) {
  //       return 0;
  //     } else {
  //       return Number(
  //         (
  //           this.costosTotalCIF / this.unidadesEquivalentesAProductosCIF()
  //         ).toFixed(2)
  //       );
  //     }
  //   },
  //   costoUnitarioDelProceso: function () {
  //     return Number(
  //       (
  //         this.costoUnitarioDeMateriaPrima() +
  //         this.costoUnitarioManodeobra() +
  //         this.costosUnitariosCIF()
  //       ).toFixed(2)
  //     );
  //   },
  //   TotalInformeDeCostos: function () {
  //     return (
  //       this.unidadesTerminadas * this.costoUnitarioDelProceso() +
  //       (this.unidadesEquivalentesAProductosMateriaPrima() *
  //         this.costoUnitarioDeMateriaPrima() +
  //         this.unidadesEquivalentesAProductosManoDeObra() *
  //           this.costoUnitarioManodeobra() +
  //         this.unidadesEquivalentesAProductosCIF() * this.costosUnitariosCIF())
  //     );
  //   },
  // };
  const container = document.createElement("div");
  container.style.display = "inline-flex";
  container.style.width = "100%";

  const div = document.createElement("div");
  const frameIndex = document.querySelector(".frame-index")!;
  (frameIndex as HTMLElement).style.width = "90%";
  div.style.zIndex = "100";
  div.style.width = "60%";
  div.style.height = "29.8rem";
  div.style.overflow = "auto";
  div.innerHTML = `
        <section class="card" >
            <div class="card-body">
                <div class="form-group">
                    <label for="unidades">Unidades Terminadas</label>
                    <input  type="number" id="unidades" class="form-control" value="${data.unidadesTerminadas}"/>
                </div>
                <div class="form-group">
                    <label for="proceso">Unidades en proceso</label>
                    <input  type="number" id="proceso" class="form-control" value="${data.unidadesEnProceso}"/>
                </div>
                <div class="form-group">
                    <label for="avance">Porcentaje de avance materia Prima:</label>
                    <input  type="number" id="avanceM" class="form-control"  min="1" max="100" value="${data.porcentajeDeAvanceMateriaPrima}"/>
                </div>
                <div class="form-group">
                    <label for="avance">Porcentaje de avance mano de Obra:</label>
                    <input  type="number" id="avanceO" class="form-control"  min="1" max="100" value="${data.porcentajeDeAvanceManoDeObra}"/>
                </div>
                <div class="form-group">
                    <label for="avance">Porcentaje de avance CIF:</label>
                    <input  type="number" id="avanceC" class="form-control"  min="1" max="100" value="${data.porcentajeDeAvanceCIF}"/>
                </div>
            </div>
            <button class="btn btn-primary">Saved<button>
        </section>
    `;
  div.querySelector("button")!.addEventListener("click", (e) => {
    e.stopPropagation();
    if (
      Number((div!.querySelector("#avanceM") as HTMLInputElement).value) >
        100 &&
      Number((div!.querySelector("#avanceO") as HTMLInputElement).value) >
        100 &&
      Number((div!.querySelector("#avanceC") as HTMLInputElement).value) > 100
    ) {
      alert("EL numero ingresado es mayor que 100");
      return;
    }
    data.porcentajeDeAvanceMateriaPrima = Number(
      (div!.querySelector("#avanceM") as HTMLInputElement).value
    );
    data.porcentajeDeAvanceManoDeObra = Number(
      (div!.querySelector("#avanceO") as HTMLInputElement).value
    );
    data.porcentajeDeAvanceCIF = Number(
      (div!.querySelector("#avanceC") as HTMLInputElement).value
    );
    data.unidadesTerminadas = Number(
      (div!.querySelector("#unidades") as HTMLInputElement).value
    );
    data.unidadesEnProceso = Number(
      (div!.querySelector("#proceso") as HTMLInputElement).value
    );
    const view = container.querySelector(".view");
    const producion_view = viewProduction(data);

    if (view) {
      view.replaceWith(viewProduction(data));
      producion_view
        .querySelector("#metodoP")!
        .addEventListener("click", () => {
          Operacion(true);
          document.querySelector(".frame-index")!.appendChild(InformeF());
        });
    }
  });
  const producion_view = viewProduction(data);
  container.appendChild(div);
  container.appendChild(producion_view);
  frameIndex.appendChild(container);
  producion_view.querySelector("#metodoP")!.addEventListener("click", () => {
    Operacion(true);
    document.querySelector(".frame-index")!.appendChild(InformeF());
  });
};
