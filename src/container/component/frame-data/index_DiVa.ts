import { data } from "../struct";
import { DiAb } from "../frame-view/DiAb";
export const DiVa = () => {
  // const DiVaData: dataDiAb = {
  //   DmanodeObra: 489610.01,
  //   DmateriaPrima: 1079190.5,
  //   Dcombustible: 1200,
  //   Dmantenimiento: 244805.26,
  //   Dluz: 49756.08,
  //   Dvario: 19584.42,
  //   Aimpuestos: 195824,
  //   Aseguros: 3000,
  //   Amateriales: function () {
  //     return this.DmateriaPrima + 2100;
  //   },
  //   AmanoDeObra: function () {
  //     return this.DmanodeObra + 4500;
  //   },
  //   AcontrolDeCalidad: 2100,
  //   Amantenimiento: 2850,
  //   AmaquinariaEquipo: 1800,
  //   Acombustible: 1200,
  //   Amas: 350 + 1050,
  //   Total: function () {
  //     return (
  //       this.AcontrolDeCalidad +
  //       this.Amantenimiento +
  //       this.AmanoDeObra() +
  //       this.Amateriales() +
  //       this.Aimpuestos +
  //       this.Aseguros +
  //       this.Dluz +
  //       this.AmaquinariaEquipo +
  //       this.Acombustible +
  //       this.Amas
  //     );
  //   },
  //   precio: 56,
  //   modelproducidas: 1164600,
  //   ventasUnidades: function () {
  //     return this.modelproducidas * this.precio;
  //   },
  //   totalNeto: function () {
  //     return Number((this.ventasUnidades() - this.Total()).toFixed(3));
  //   },
  // };
  const container = document.createElement("div");
  container.style.display = "inline-flex";
  container.style.width = "100%";
  const div = document.createElement("div");
  const frameIndex = document.querySelector(".frame-index")!;
  (frameIndex as HTMLElement).style.width = "90%";
  div.style.zIndex = "100";
  div.style.width = "65%";
  div.style.height = "29.8rem";
  div.className = "card";
  div.style.overflow = "auto";
  div.innerHTML = `
    <div class="card-body">
        <div class="form-group">
            <label for="Dmanodeobra">Mano de Obra</label>
            <input  type="number" id="Dmanodeobra" class="form-control" value="${data.manoDeObreDirecta}"/>
        </div>
        <div class="form-group">
            <label for="DmateriaPrima">Materia Prima</label>
            <input  type="number" id="DmateriaPrima" class="form-control" value="${data.materiaPrimaDirecta}"/>
        </div>
        <div class="form-group">
            <label for="Dcombustible">Combustible</label>
            <input  type="number" id="Dcombustible" class="form-control" value="${data.Dcombustible}"/>
        </div>
        <div class="form-group">
            <label for="Dmantenimiento">Matenimiento</label>
            <input  type="number" id="Dmantenimiento" class="form-control" value="${data.Dmantenimiento}"/>
        </div>
        <div class="form-group">
            <label for="Dluz">Luz </label>
            <input  type="number" id="Dluz" class="form-control" value="${data.Dluz}"/>
        </div>
        <div class="form-group">
            <label for="Dvario">Vairio</label>
            <input  type="number" id="Dvario" class="form-control" value="${data.Dvario}"/>
        </div>
        <div class="form-group">
            <label for="Aimpuestos">Unidades Para la venta</label>
            <input  type="number" id="Aimpuestos" class="form-control" value="${data.Aimpuestos}"/>
        </div>
        <div class="form-group">
            <label for="Aseguros">Seguros</label>
            <input  type="number" id="Aseguros" class="form-control" value="${data.Aseguros}"/>
        </div>
        <div class="form-group">
            <label for="AcontrolDeCalidad">Control de Calidad</label>
            <input  type="number" id="AcontrolDeCalidad" class="form-control" value="${data.AcontrolDeCalidad}"/>
        </div>
        <div class="form-group">
            <label for="Amantenimiento">Mantenimiento</label>
            <input  type="number" id="Amantenimiento" class="form-control" value="${data.Amantenimiento}"/>
        </div>
        <div class="form-group">
            <label for="AmaquinariaEquipo">Maquinaria Equipo</label>
            <input  type="number" id="AmaquinariaEquipo" class="form-control" value="${data.AmaquinariaEquipo}"/>
        </div>
        <div class="form-group">
            <label for="Acombustible">Combustible</label>
            <input  type="number" id="Acombustible" class="form-control" value="${data.Acombustible}"/>
        </div>
        <div class="form-group">
            <label for="precio">Precio</label>
            <input  type="number" id="precio" class="form-control" value="${data.precio}"/>
        </div>
        <div class="form-group">
            <label for="modelproducidas"># de unidades Producidas</label>
            <input  type="number" id="modelproducidas" class="form-control" value="${data.modelproducidas}"/>
        </div>
        <button class="btn btn-primary" >Save<button>
    </div>
  `;
  div.querySelector("button")!.addEventListener("click", (e) => {
    e.stopPropagation();
    data.manoDeObreDirecta = Number(
      (div.querySelector("#Dmanodeobra") as HTMLInputElement).value
    );
    data.materiaPrimaDirecta = Number(
      (div.querySelector("#DmateriaPrima") as HTMLInputElement).value
    );
    data.Dmantenimiento = Number(
      (div.querySelector("#Dmantenimiento") as HTMLInputElement).value
    );
    data.Dluz = Number((div.querySelector("#Dluz") as HTMLInputElement).value);
    data.Dvario = Number(
      (div.querySelector("#Dvario") as HTMLInputElement).value
    );
    data.Aseguros = Number(
      (div.querySelector("#Aseguros") as HTMLInputElement).value
    );
    data.AcontrolDeCalidad = Number(
      (div.querySelector("#AcontrolDeCalidad") as HTMLInputElement).value
    );
    data.Amantenimiento = Number(
      (div.querySelector("#Amantenimiento") as HTMLInputElement).value
    );
    data.AmaquinariaEquipo = Number(
      (div.querySelector("#AmaquinariaEquipo") as HTMLInputElement).value
    );

    data.precio = Number(
      (div.querySelector("#precio") as HTMLInputElement).value
    );
    data.modelproducidas = Number(
      (div.querySelector("#modelproducidas") as HTMLInputElement).value
    );
    let view = container.querySelector(".view");
    if (view) {
      view.replaceWith(DiAb(data));
    }
  });
  const diab = DiAb(data);
  container.appendChild(div);
  container.appendChild(diab);
  frameIndex.appendChild(container);
};
