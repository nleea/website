import {  data, MetodoPuntoAlto, MetodoDeMinimo } from "../struct";
import { FiVas } from "../frame-view/fijoVariable";
import { Operacion } from "../frame-op/index";
import { puntoAltoView } from "../frame-view/puntoAlto";
import { MinimoCuadrado } from "../frame-view/MinimoCuadrado";
export const FiVa = () => {
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
  div.className = "card";
  div.innerHTML = `
    <div class="card-body">
        <h1>Costos Fijos de Produccion</h1>
        <div class="form-group">
            <label for="impuestos">Imppuestos</label>
            <input  type="number" id="impuestos" class="form-control" value="${data.Dimpuesto}"/>
        </div>
        <div class="form-group">
            <label for="seguros">Seguros</label>
            <input  type="number" id="seguros" class="form-control" value="${data.Aseguros}"/>
        </div>
        <div class="form-group">
            <label for="materiales">Materiales Indirectos</label>
            <input  type="number" id="materiales" class="form-control" value="${data.MaterialesIndirectos}"/>
        </div>
        <div class="form-group">
            <label for="mano">Mano de Obra Indirecta</label>
            <input  type="number" id="mano" class="form-control" value="${data.ManoDeObraIndirecta}"/>
        </div>
        <div class="form-group">
            <label for="calidad">Control de Calidad</label>
            <input  type="number" id="calidad" class="form-control" value="${data.AcontrolDeCalidad}"/>
        <div class="form-group">
            <label for="mantenimiento">Mantenimiento</label>
            <input  type="number" id="mantenimiento" class="form-control" value="${data.Amantenimiento}"/>
        </div>
        <div class="form-group">
            <label for="maquinaria">D. maquinaria y equipo</label>
            <input  type="number" id="maquinaria" class="form-control" value="${data.AmaquinariaEquipo}"/>
        </div>
        <div class="form-group">
            <label for="energia">Energia Electrica</label>
            <input  type="number" id="energia" class="form-control" value="${data.EnegiaElectrica}"/>
        </div>
        <div class="form-group">
            <label for="combustible">Combustible</label>
            <input  type="number" id="combustible" class="form-control" value="${data.Acombustible}"/>
        </div>
      <h1>Costos Variables</h1>
      <div class="form-group">
            <label for="impuestosv">Impuestos</label>
            <input  type="number" id="impuestosv" class="form-control" value="${data.Aimpuestos}"/>
      </div><div class="form-group">
            <label for="mantenimientov">Mantenimiento y Reaparacion</label>
            <input  type="number" id="mantenimientov" class="form-control" value="${data.Dmantenimiento}"/>
      </div>
      <div class="form-group">
            <label for="energiav">Luz Y energia</label>
            <input  type="number" id="energiav" class="form-control" value="${data.Dluz}"/>
      </div>
      <div class="form-group">
            <label for="combustiblev">Combustible</label>
            <input  type="number" id="combustiblev" class="form-control" value="${data.Dcombustible}"/>
      </div>
        <button class="btn btn-primary" >Save</button>
    </div>
  `;
  div.querySelector("button")!.addEventListener("click", (e) => {
    e.stopPropagation();
    data.Dimpuesto = Number(
      (div.querySelector("#impuestos") as HTMLInputElement).value
    );
    data.Acombustible = Number(
      (div.querySelector("#combustible") as HTMLInputElement).value
    );
    data.AcontrolDeCalidad = Number(
      (div.querySelector("#calidad") as HTMLInputElement).value
    );
    data.EnegiaElectrica = Number(
      (div.querySelector("#energia") as HTMLInputElement).value
    );
    data.ManoDeObraIndirecta = Number(
      (div.querySelector("#mano") as HTMLInputElement).value
    );
    data.Amantenimiento = Number(
      (div.querySelector("#mantenimiento") as HTMLInputElement).value
    );
    data.AmaquinariaEquipo = Number(
      (div.querySelector("#maquinaria") as HTMLInputElement).value
    );
    data.MaterialesIndirectos = Number(
      (div.querySelector("#materiales") as HTMLInputElement).value
    );
    data.Aseguros = Number(
      (div.querySelector("#seguros") as HTMLInputElement).value
    );
    data.Aimpuestos = Number(
      (div.querySelector("#impuestosv") as HTMLInputElement).value
    );
    data.Dmantenimiento = Number(
      (div.querySelector("#mantenimientov") as HTMLInputElement).value
    );
    data.Dluz = Number(
      (div.querySelector("#energiav") as HTMLInputElement).value
    );
    data.Dcombustible = Number(
      (div.querySelector("#combustiblev") as HTMLInputElement).value
    );
    const view = container.querySelector(".view");
    if (view) {
      let fiva = FiVas(data);
      fiva.querySelector("#metodoP")!.addEventListener("click", () => {
        Operacion(true);
        document
          .querySelector(".frame-index")!
          .appendChild(puntoAltoView(MetodoPuntoAlto));
      });
      view.replaceWith(fiva);
    }
  });
  container.appendChild(div);
  let fiva = FiVas(data);
  container.appendChild(fiva);
  frameIndex.appendChild(container);
  fiva.querySelector("#metodoP")!.addEventListener("click", () => {
    Operacion(true);
    document
      .querySelector(".frame-index")!
      .appendChild(puntoAltoView(MetodoPuntoAlto));
  });
  fiva.querySelector("#metodoM")!.addEventListener("click", () => {
    Operacion(true);
    document
      .querySelector(".frame-index")!
      .appendChild(MinimoCuadrado(MetodoDeMinimo));
  });
};
