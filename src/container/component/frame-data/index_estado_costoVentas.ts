import { data } from "../struct";
import { CosVentasView } from "../frame-view/CosVentas";
export const estadoCV = () => {
  const container = document.createElement("div");
  container.style.display = "inline-flex";
  container.style.width = "100%";
  const div = document.createElement("div");
  const frameIndex = document.querySelector(".frame-index")!;
  (frameIndex as HTMLElement).style.width = "90%";
  div.style.zIndex = "100";
  div.style.width = "60%";
  div.style.height = "29.8rem";
  div.className = "card";
  div.style.overflow = "auto";
  div.innerHTML = `
    <div class="card-body">
        <div class="form-group">
            <label for="inicial">Inventario Inicia MP</label>
            <input  type="number" id="inicial" class="form-control" value="${data.InvInicialMateria}"/>
        </div>
         <div class="form-group">
            <label for="final">Inventario Final Materia Prima</label>
            <input  type="number" id="final" class="form-control" value="${data.InventarioFinalMateriaPrima}"/>
        </div>
        <div class="form-group">
            <label for="productos">Inventario Inicial De Productos</label>
            <input  type="number" id="productos" class="form-control" value="${data.InventarioIniProductosPro}"/>
        </div>
        <div class="form-group">
            <label for="productosf">Inventario Final De Productos</label>
            <input  type="number" id="productosf" class="form-control" value="${data.InventarioFinalDeProductos}"/>
        </div>
        <div class="form-group">
            <label for="terminados">Productos Terminados Inicial</label>
            <input  type="number" id="terminados" class="form-control" value="${data.ProductosTerminadosIni}"/>
        </div>
        <div class="form-group">
            <label for="terminadosf">Productos Terminados Final</label>
            <input  type="number" id="terminadosf" class="form-control" value="${data.ProductosTerminadosFin}"/>
        </div>
            <button class="btn btn-primary">Save</button>
    </div>
  `;
  div.querySelector("button")!.addEventListener("click", (e) => {
    e.stopPropagation();
    data.InvInicialMateria = Number(
      (div.querySelector("#inicial")! as HTMLInputElement).value
    );
    data.InventarioFinalMateriaPrima = Number(
      (div.querySelector("#final")! as HTMLInputElement).value
    );
    data.InventarioIniProductosPro = Number(
      (div.querySelector("#productos")! as HTMLInputElement).value
    );
    data.InventarioFinalDeProductos = Number(
      (div.querySelector("#productosf")! as HTMLInputElement).value
    );
    data.ProductosTerminadosIni = Number(
      (div.querySelector("#terminados")! as HTMLInputElement).value
    );
    data.ProductosTerminadosFin = Number(
      (div.querySelector("#terminadosf")! as HTMLInputElement).value
    );
    const view = container.querySelector(".view");
    if (view) {
      view.replaceWith(CosVentasView(data));
    }
  });
  const CosVentas = CosVentasView(data);
  container.appendChild(div);
  container.appendChild(CosVentas);
  frameIndex.appendChild(container);
};
