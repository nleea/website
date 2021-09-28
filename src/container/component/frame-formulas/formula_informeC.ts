export const InformeF = () => {
    const view = document.createElement("div");
    view.className = "card";
    view.classList.add("view");
    view.style.overflow = "auto";
    view.style.width = "100%";
    view.innerHTML = `
        <div class="card-body">
                <h1>Formulas Informe De Costos</h1>
                    <h2>Materia Prima</h2>
                        <p>Unidades en proceso<p>
                        <p>Porcentaje de avance</p>
                        <p>Unidades Equivalentes * Porcentaje de Avance</p>
                        <p>Unidades equivalentes a productos terminados (Unidades Terminadas + Unidades Equivalentes)</p>
                        <p>Costo unitario de materia prima: Costo Total de Materia Prima / # de unidades Terminadas</p>
                    <h2>Mano de Obra</h2>
                        <p>Unidades en proceso<p>
                        <p>Porcentaje de avance</p>
                        <p>Unidades Equivalentes * Porcentaje de Avance</p>
                        <p>Unidades equivalentes a productos terminados (Unidades Terminadas + Unidades Equivalentes)</p>
                        <p>Costo unitario de mano de obra : Costo Total de Mano de Obra / # de unidades Terminadas</p>
                    <h2>CIF</h2>
                        <p>Unidades en proceso<p>
                        <p>Porcentaje de avance</p>
                        <p>Unidades Equivalentes * Porcentaje de Avance</p>
                        <p>Unidades equivalentes a productos terminados (Unidades Terminadas + Unidades Equivalentes)</p>
                        <p>Costo unitario de CIF : Costo Total de CIF / # de unidades Terminadas</p>
                    <h2>Costo Unitario del Proceso</h2>
                        Costos unitario del Proceso = Costos unitarios de materia prima + Costo unitario de mano de obra + Costo unitario de costos indirectos de fabricación
        </div>
     `;
    return view;
  };
  