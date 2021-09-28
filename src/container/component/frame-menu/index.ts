import "./info.css";
export const Menu = () => {
  const div = document.createElement("div");
  div.innerHTML = `
<section class="content-menu" >
    <div id="header">
    <nav> <!-- Aqui estamos iniciando la nueva etiqueta nav -->
      <ul class="nav">
        <li><a href="#" id="costos">Costos</a></li>
        <li><a href="#" id="prorrateo">Prorrateo</a></li>
        <li><a href="#" id="producion" >Producion equivalente y informe de costo</a></li>
        <li><a href="#" id="estandar">Costo Estandar</a></li>
        <li><a href="#" id="diab">Costos Directos y Absorbentes</a></li>
        <li><a href="#" id="fijos" >Costos Fijos, variables, Semivariables, mixtos y totales, método de puntos método de grafica de dispersión, método de regresión y método mínimo
        cuadrado</a></li>
        <li><a href="#" id="estado" >Estado de Producción y venta</a></li>
        <li><a href="#" id="balance" >Balance General</a></li>
      </ul>
    </nav>
  </div>
</section>
        `;
  return div;
};
