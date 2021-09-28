export const CostosF = () => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.style.width = "100%";
  view.innerHTML = `
    <div class="card-body">
    <h1>Variables de Costos</h1>
        <p>Costos Primos: M.P.D + M.O.D </p>
        <p>Costos Conversion: M.O.D + C.I.F </p>
        <p>Costos Produccion: M.P.D + M.O.D + C.I.F</p>
        <p>Costos Operacion:Gastos de Venta + Gastos Abministrativos + Financiamiento </p>
        <p>Costos Total: Costos de Produccion + Gastos de operacion</p>
        <p>Costos Unitario: Costos Totas / Unidades Produccidas</p>
    </div>
 `;
  return view;
};
