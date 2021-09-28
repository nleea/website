import { Idata } from "../struct";
export const CosVentasView = (data: Idata) => {
  const div = document.createElement("div");
  div.style.zIndex = "100";
  div.style.width = "60%";
  div.style.height = "29.8rem";
  div.className = "card";
  div.classList.add("view");
  div.style.overflow = "auto";
  div.innerHTML = `
    <div class="card-body">
        <h1>Estado de Producción y venta</h1>
            <p>Inventario Inicial MP: ${data.InvInicialMateria}</p>
            <p>Compras de Materia Prima: ${data.materiaPrimaDirecta}</p>
            <p>Inventario Final Materia Prima: ${
              data.InventarioFinalMateriaPrima
            }</p>
            <p>Mano de Obra: ${data.manoDeObreDirecta}</p>
            <p>C.I.F: ${data.CIF}</p>
            <p>Inventario Inicial De Productos: ${
              data.InventarioIniProductosPro
            }</p>
            <p>Inventario Final De Productos: ${
              data.InventarioFinalDeProductos
            }</p>
            <p>Productos Terminados Inicial: ${data.ProductosTerminadosIni}</p>
            <p>Productos Terminados Final: ${data.ProductosTerminadosFin}</p>
            <p>Total Materia Prima Disponible: ${data.TotalMateriaPrimaDis()}</p>
            <p>Materia Prima Utilizada: ${data.MateriaPrimaUtilizada()}</p>
            <p>Costos Primos: ${data.costosPrimos()}</p>
            <p>Total Alicado a la Produccion: ${data.TotalAplicadoAlaProduccion()}</p>
            <p>Total: ${data.Total()}</p>
            <p><strong>Costo De Produccion: ${data.CostoDeProduccion()}</strong></p>
            <p>Productos Terminados Inicial: ${data.ProductosTerminadosIni}</p>
            <p>Productos Terminados Final: ${data.ProductosTerminadosFin}</p>
            <p>Total General: ${data.TotalV()}</p>
            <p><strong>Estado Produccion y Ventas: ${data.COstosPyV()}</strong></p>

    </div>
  `;
  div.style.width = "auto";
  return div;
};
