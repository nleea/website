import { ProrrateoView } from "../frame-view/prorrateo";
import { data } from "../struct";
export const Prorrateo = () => {
  // const data = {
  //   totalCIF: 0,
  //   produccionJulio: 0,
  //   produccionAgosto: 0,
  //   produccionSeptiembre: 0,
  //   materiaj: 0,
  //   manoj: 0,
  //   materiag: 0,
  //   manog: 0,
  //   materias: 0,
  //   manos: 0,
  //   Total: function () {
  //     return (
  //       this.manoj +
  //       this.manog +
  //       this.manos +
  //       this.materiaj +
  //       this.materiag +
  //       this.materias
  //     );
  //   },
  //   coeficienteCIF: function () {
  //     if (this.totalCIF == 0) {
  //       return 0;
  //     }
  //     return Number(this.totalCIF / this.Total());
  //   },
  //   CIFprorrateadosJ: function () {
  //     return Math.floor((this.materiaj + this.manoj) * this.coeficienteCIF());
  //   },
  //   CIFprorrateadosA: function () {
  //     return Math.floor((this.materiag + this.manog) * this.coeficienteCIF());
  //   },
  //   CIFprorrateadosS: function () {
  //     return Math.floor((this.materias + this.manos) * this.coeficienteCIF());
  //   },
  //   costoTotalPj: function () {
  //     return Math.floor(this.materiaj + this.manoj + this.CIFprorrateadosJ());
  //   },
  //   costoTotalPa: function () {
  //     return Math.floor(this.materiag + this.manog + this.CIFprorrateadosA());
  //   },
  //   costoTotalPs: function () {
  //     return Math.floor(this.materias + this.manos + this.CIFprorrateadosS());
  //   },
  //   costoUnitarioj: function () {
  //     if (this.costoTotalPj() === 0) {
  //       return 0;
  //     }
  //     return Math.floor(this.costoTotalPj() / this.produccionJulio);
  //   },
  //   costoUnitarioa: function () {
  //     if (this.costoTotalPa() === 0) {
  //       return 0;
  //     }
  //     return Math.floor(this.costoTotalPa() / this.produccionAgosto);
  //   },
  //   costoUnitarios: function () {
  //     if (this.costoTotalPs() === 0) {
  //       return 0;
  //     }
  //     return Math.floor(this.costoTotalPs() / this.produccionSeptiembre);
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
<div class="card">
    <div class="card-body">
    <hr/>
    <div class="form-group">
        <label for="produccionj">Produccion Julio</label>
        <input  type="number" id="produccionj" class="form-control" value="${data.produccionJulio}"/>
    </div>
    <div class="form-group">
        <label for="producciona">Produccion Agosto</label>
        <input  type="number" id="producciona" class="form-control" value="${data.produccionAgosto}"/>
    </div>
    <div class="form-group">
        <label for="produccions">Produccion Septiembre</label>
        <input  type="number" id="produccions" class="form-control" value="${data.produccionSeptiembre}"/>
    </div>
    <hr/>
        <h2>Costo Primo de Produccion</h2>
        <h3>Julio</h3>
    <div class="form-group">
        <label for="materiaj">Materia Prima Directa</label>
        <input  type="number" id="materiaj" class="form-control" value="${data.materiaj}"/>
    </div>
    <div class="form-group">
        <label for="manoj">Mano de Obra</label>
        <input  type="number" id="manoj" class="form-control" value="${data.manoj}"/>
    </div>
        <h3>Agosto</h3>
    <div class="form-group">
        <label for="materiag">Materia Prima</label>
        <input  type="number" id="materiag" class="form-control" value="${data.materiag}"/>
    </div>
    <div class="form-group">
        <label for="manog">Mano de Obra</label>
        <input  type="number" id="manog" class="form-control" value="${data.manog}"/>
    </div>
        <h3>Septiembre</h3>
    <div class="form-group">
        <label for="materias">Materia Prima</label>
        <input  type="number" id="materias" class="form-control" value="${data.materias}"/>
    </div>
    <div class="form-group">
        <label for="manos">Mano de Obra</label>
        <input  type="number" id="manos" class="form-control" value="${data.manos}"/>
    </div>
    <button class="btn btn-primary" >Save</button>
    </div>
</div>
  `;
  div.querySelector("button")!.addEventListener("click", (e) => {
    e.stopPropagation();
    data.produccionJulio = Number(
      (div.querySelector("#produccionj")! as HTMLInputElement).value
    );
    data.produccionAgosto = Number(
      (div.querySelector("#producciona")! as HTMLInputElement).value
    );
    data.produccionSeptiembre = Number(
      (div.querySelector("#produccions")! as HTMLInputElement).value
    );
    data.materiaj = Number(
      (div.querySelector("#materiaj")! as HTMLInputElement).value
    );
    data.manoj = Number(
      (div.querySelector("#manoj")! as HTMLInputElement).value
    );
    data.materiag = Number(
      (div.querySelector("#materiag")! as HTMLInputElement).value
    );
    data.manog = Number(
      (div.querySelector("#manog")! as HTMLInputElement).value
    );
    data.materias = Number(
      (div.querySelector("#materias")! as HTMLInputElement).value
    );
    data.manos = Number(
      (div.querySelector("#manos")! as HTMLInputElement).value
    );
    const view = container.querySelector(".view");
    if (view) {
      view.replaceWith(ProrrateoView(data));
    }
  });
  container.appendChild(div);
  container.appendChild(ProrrateoView(data));
  frameIndex.appendChild(container);
};
