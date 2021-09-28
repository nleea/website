import { EstandarView } from "../frame-view/estandar";
import { Operacion } from "../frame-op/index";
import { estandarF } from "../frame-formulas/formula_estandar";
import { data } from "../struct";
export const Estandar = () => {
  // const dataEstandar = {
  //   MprecioReal: 0,
  //   MprecioEstandar: 0,
  //   McantidadReal: 0,
  //   McantidadEstandar: 0,
  //   OsalarioReal: 0,
  //   OsalarioEstandar: 0,
  //   OtiempoReal: 0,
  //   OtiempoEstandar: 0,
  //   SprecioReal: 0,
  //   SprecioEstandar: 0,
  //   ScantidadReal: 0,
  //   ScantidadEstandar: 0,
  //   Caplicado: 0,
  //   Cpresupuestado: 0,
  //   Creal: 0,
  //   ChorasAplicadas: 0,
  //   ChorasReales: 0,
  //   CtasaVariables: 0,
  //   CIreal: 0,
  //   MPvariacionP: function () {
  //     return (this.MprecioReal - this.MprecioEstandar) * this.McantidadReal;
  //   },
  //   MPcantidad: function () {
  //     return (
  //       (this.McantidadReal - this.McantidadEstandar) * this.MprecioEstandar
  //     );
  //   },
  //   MOsalario: function () {
  //     return (this.OsalarioReal - this.OsalarioReal) * this.OtiempoReal;
  //   },
  //   MOtiempo: function () {
  //     return (this.OtiempoReal - this.OtiempoEstandar) * this.OsalarioEstandar;
  //   },
  //   SDprecio: function () {
  //     return (this.SprecioReal - this.SprecioEstandar) * this.ScantidadReal;
  //   },
  //   SDcantidad: function () {
  //     return (
  //       (this.ScantidadReal - this.ScantidadEstandar) * this.SprecioEstandar
  //     );
  //   },
  //   CIFcapacidad: function () {
  //     return this.Caplicado - this.Cpresupuestado;
  //   },
  //   CIFpresupuesto: function () {
  //     return this.Cpresupuestado - this.Creal;
  //   },
  //   CIFeficiencia: function () {
  //     return (this.ChorasAplicadas - this.ChorasReales) * this.CtasaVariables;
  //   },
  //   CIFcantidad: function () {
  //     return (this.ChorasReales - this.CtasaVariables) * this.CIreal;
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
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="realmp">Precio Real MP</label>
                <input  type="number" id="realmp" class="form-control" value="${data.MprecioReal}"/>
            </div>
            <div class="form-group">
                <label for="estandarmp">Precio Estandar MP</label>
                <input  type="number" id="estandarmp" class="form-control" value="${data.MprecioEstandar}"/>
            </div>
            <div class="form-group">
                <label for="estandarmo">Salario Estandar MO</label>
                <input  type="number" id="estandarmo" class="form-control" value="${data.OsalarioEstandar}"/>
            </div>
            <div class="form-group">
                <label for="tiempormo">Tiempo Real Trabajado MO</label>
                <input  type="number" id="tiempormo" class="form-control" value="${data.OtiempoReal}"/>
            </div>
            <div class="form-group">
                <label for="tiempoemo">Tiempo Estandar MO</label>
                <input  type="number" id="tiempoemo" class="form-control" value="${data.OtiempoEstandar}"/>
            </div>
            <div class="form-group">
                <label for="realsd">Precio Real SD</label>
                <input  type="number" id="realsd" class="form-control" value="${data.SprecioReal}"/>
            </div>
            <div class="form-group">
                <label for="estandarsd">Precio Estandar SD</label>
                <input  type="number" id="estandarsd" class="form-control" value="${data.SprecioEstandar}"/>
            </div>
            <div class="form-group">
                <label for="cantidadsd">Cantidad Real SD</label>
                <input  type="number" id="cantidadrsd" class="form-control" value="${data.ScantidadReal}"/>
            </div>
            <div class="form-group">
                <label for="cantidadesd">Cantidad Estanda SD</label>
                <input  type="number" id="cantidadesd" class="form-control" value="${data.ScantidadEstandar}"/>
            </div>
            <div class="form-group">
                <label for="presupuestados">CIF Presupuestados</label>
                <input  type="number" id="presupuestados" class="form-control" value="${data.Cpresupuestado}"/>
            </div>
            <div class="form-group">
                <label for="realcif">CIF Real</label>
                <input  type="number" id="realcif" class="form-control" value="${data.Creal}"/>
            </div>
            <div class="form-group">
                <label for="horasa">CIF Horas Aplicadas</label>
                <input  type="number" id="horasa" class="form-control" value="${data.ChorasAplicadas}"/>
            </div>
            <div class="form-group">
                <label for="horasr">CIF Horas Reales</label>
                <input  type="number" id="horasr" class="form-control" value="${data.ChorasReales}"/>
            </div>
            <div class="form-group">
                <label for="tasa">Tasa Variables CIF </label>
                <input  type="number" id="tasa" class="form-control" value="${data.CtasaVariables}"/>
            </div>
            <div class="form-group">
                <label for="civ">CIV Real</label>
                <input  type="number" id="civ" class="form-control" value="${data.CIreal}"/>
            </div>
            <button class="btn btn-primary">Save</button>
        </div>
    </div>
  `;
  div.querySelector("button")!.addEventListener("click", (e) => {
    e.stopPropagation();
    data.MprecioReal = Number(
      (div.querySelector("#realmp")! as HTMLInputElement).value
    );
    data.MprecioEstandar = Number(
      (div.querySelector("#estandarmp")! as HTMLInputElement).value
    );
    data.OsalarioEstandar = Number(
      (div.querySelector("#estandarmo")! as HTMLInputElement).value
    );
    data.OtiempoEstandar = Number(
      (div.querySelector("#tiempormo")! as HTMLInputElement).value
    );
    data.OtiempoReal = Number(
      (div.querySelector("#tiempoemo")! as HTMLInputElement).value
    );
    data.SprecioReal = Number(
      (div.querySelector("#realsd")! as HTMLInputElement).value
    );
    data.SprecioEstandar = Number(
      (div.querySelector("#estandarsd")! as HTMLInputElement).value
    );
    data.ScantidadReal = Number(
      (div.querySelector("#cantidadrsd")! as HTMLInputElement).value
    );
    data.ScantidadEstandar = Number(
      (div.querySelector("#cantidadesd")! as HTMLInputElement).value
    );
    data.Cpresupuestado = Number(
      (div.querySelector("#presupuestados")! as HTMLInputElement).value
    );
    data.Creal = Number(
      (div.querySelector("#realcif")! as HTMLInputElement).value
    );
    data.ChorasAplicadas = Number(
      (div.querySelector("#horasa")! as HTMLInputElement).value
    );
    data.ChorasReales = Number(
      (div.querySelector("#horasr")! as HTMLInputElement).value
    );
    data.CtasaVariables = Number(
      (div.querySelector("#tasa")! as HTMLInputElement).value
    );
    data.CIreal = Number(
      (div.querySelector("#civ")! as HTMLInputElement).value
    );
    const view = container.querySelector(".view");
    const estandarView = EstandarView(data);

    if (view) {
      view.replaceWith(estandarView);
      estandarView.querySelector("button")!.addEventListener("click", () => {
        Operacion(true);
        document.querySelector(".frame-index")!.appendChild(estandarF());
      });
    }
  });
  const estandarView = EstandarView(data);
  container.appendChild(div);
  container.appendChild(estandarView);
  frameIndex.appendChild(container);
  estandarView.querySelector("button")!.addEventListener("click", () => {
    Operacion(true);
    document.querySelector(".frame-index")!.appendChild(estandarF());
  });
};
