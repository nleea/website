import { data } from "./struct";
export const index_view = () => {
  let section = null;
  section = document.createElement("div");
  section.className = "card";
  section.style.overflow = "auto";
  section.innerHTML = `
  <div class="card-body">
              <div class="form-group">
              <label for="materias">Materias primas</label>
              <input  type="number" id="materiast" class="form-control" value="${data.materiaPrimaDirecta}"/>
            </div>
            <div class="form-group">
              <label for="mano">Mano de Obra</label>
              <input  type="number" id="mano" class="form-control" value="${data.manoDeObreDirecta}"/>
            </div>
            <div class="form-group">
              <label for="CIF">C.I.F</label>
              <input  type="number" id="CIF" class="form-control" value="${data.CIF}"/>
            </div>
            <div class="form-group">
              <label for="ventas">Gatos de ventas</label>
              <input  type="number" id="ventas" class="form-control" value="${data.gastosDeVentas}"/>
            </div>
            <div class="form-group">
              <label for="abministracion">Gastos de abministracion</label>
              <input  type="number" id="abministracion" class="form-control" value="${data.gastosDeAbministracion}"/>
            </div>
            <div class="form-group">
              <label for="Financiamiento">Financiamiento</label>
              <input  type="number" id="Financiamiento" class="form-control" value="${data.Financiamiento}"/>
            </div>
            <div class="form-group">
              <label for="unidades">unidades Producidas</label>
              <input  type="number" id="unidades" class="form-control" value="${data.unidadesProducidas}"/>
            </div>
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
                    <h3>Julio</h3>
                <div class="form-group">
                    <label for="materiaj">Materia Prima</label>
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
                <hr/>
                <div class="form-group">
                                <label for="unidades">Unidades Terminadas</label>
                                <input  type="number" id="unidadest" class="form-control" value="${data.unidadesTerminadas}"/>
                            </div>
                            <div class="form-group">
                                <label for="proceso">Unidades en proceso</label>
                                <input  type="number" id="proceso" class="form-control" value="${data.unidadesEnProceso}"/>
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
                        <input  type="number" id="manoi" class="form-control" value="${data.ManoDeObraIndirecta}"/>
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
                        <label for="impuestosv">Impuestos Fijo</label>
                        <input  type="number" id="impuestosD" class="form-control" value="${data.Dimpuesto}"/>
                    </div>
                    <div class="form-group">
                        <label for="impuestosv">Impuestos Variable</label>
                        <input  type="number" id="impuestosv" class="form-control" value="${data.Aimpuestos}"/>
                    </div>
                  <div class="form-group">
                        <label for="mantenimientov">Mantenimiento y Reaparacion Fijo</label>
                        <input  type="number" id="mantenimientod" class="form-control" value="${data.Amantenimiento}"/>
                  </div>
                  <div class="form-group">
                        <label for="mantenimientov">Mantenimiento y Reaparacion Variable</label>
                        <input  type="number" id="mantenimientov" class="form-control" value="${data.Dmantenimiento}"/>
                  </div>
                  <div class="form-group">
                        <label for="energiav">Luz Y energia Fija</label>
                        <input  type="number" id="energiad" class="form-control" value="${data.EnegiaElectrica}"/>
                  </div>
                  <div class="form-group">
                        <label for="energiav">Luz Y energia Variable</label>
                        <input  type="number" id="energiav" class="form-control" value="${data.Dluz}"/>
                  </div>
                  <div class="form-group">
                        <label for="combustiblev">Combustible Fijo </label>
                        <input  type="number" id="combustiblev" class="form-control" value="${data.Acombustible}"/>
                  </div>
                  <div class="form-group">
                        <label for="combustiblev">Combustible Variable</label>
                        <input  type="number" id="combustibleD" class="form-control" value="${data.Dcombustible}"/>
                  </div>
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
                    <button class="btn btn-primary" id="save">Saved</button>
      </div>
  `;
  section.querySelector("#save")!.addEventListener("click", (e) => {
    e.stopPropagation();
    data.materiaPrimaDirecta = Number(
      (document.getElementById("materiast") as HTMLInputElement).value
    );
    data.manoDeObreDirecta = Number(
      (document.getElementById("mano") as HTMLInputElement).value
    );
    data.CIF = Number(
      (document.getElementById("CIF") as HTMLInputElement).value
    );
    data.gastosDeVentas = Number(
      (document.getElementById("ventas") as HTMLInputElement).value
    );
    data.gastosDeAbministracion = Number(
      (document.getElementById("abministracion") as HTMLInputElement).value
    );
    data.Financiamiento = Number(
      (document.getElementById("Financiamiento") as HTMLInputElement).value
    );
    data.unidadesProducidas = Number(
      (document.getElementById("unidades") as HTMLInputElement).value
    );
    data.produccionJulio = Number(
      (document.querySelector("#produccionj")! as HTMLInputElement).value
    );
    data.produccionAgosto = Number(
      (document.querySelector("#producciona")! as HTMLInputElement).value
    );
    data.produccionSeptiembre = Number(
      (document.querySelector("#produccions")! as HTMLInputElement).value
    );
    data.materiaj = Number(
      (document.querySelector("#materiaj")! as HTMLInputElement).value
    );
    data.manoj = Number(
      (document.querySelector("#manoj")! as HTMLInputElement).value
    );
    data.materiag = Number(
      (document.querySelector("#materiag")! as HTMLInputElement).value
    );
    data.manog = Number(
      (document.querySelector("#manog")! as HTMLInputElement).value
    );
    data.materias = Number(
      (document.querySelector("#materias")! as HTMLInputElement).value
    );
    data.manos = Number(
      (document.querySelector("#manos")! as HTMLInputElement).value
    );
    data.unidadesTerminadas = Number(
      (document.querySelector("#unidadest") as HTMLInputElement).value
    );
    data.unidadesEnProceso = Number(
      (document.querySelector("#proceso") as HTMLInputElement).value
    );
    data.Dimpuesto = Number(
      (document.querySelector("#impuestosD") as HTMLInputElement).value
    );
    data.Acombustible = Number(
      (document.querySelector("#combustiblev") as HTMLInputElement).value
    );
    data.AcontrolDeCalidad = Number(
      (document.querySelector("#calidad") as HTMLInputElement).value
    );
    data.EnegiaElectrica = Number(
      (document.querySelector("#energiad") as HTMLInputElement).value
    );
    data.ManoDeObraIndirecta = Number(
      (document.querySelector("#manoi") as HTMLInputElement).value
    );
    data.Amantenimiento = Number(
      (document.querySelector("#mantenimiento") as HTMLInputElement).value
    );
    data.AmaquinariaEquipo = Number(
      (document.querySelector("#maquinaria") as HTMLInputElement).value
    );
    data.MaterialesIndirectos = Number(
      (document.querySelector("#materiales") as HTMLInputElement).value
    );
    data.Aseguros = Number(
      (document.querySelector("#seguros") as HTMLInputElement).value
    );
    data.Aimpuestos = Number(
      (document.querySelector("#impuestosv") as HTMLInputElement).value
    );
    data.Dmantenimiento = Number(
      (document.querySelector("#mantenimientov") as HTMLInputElement).value
    );
    data.Dluz = Number(
      (document.querySelector("#energiav") as HTMLInputElement).value
    );
    data.Dcombustible = Number(
      (document.querySelector("#combustibleD") as HTMLInputElement).value
    );
    data.MprecioReal = Number(
      (document.querySelector("#realmp")! as HTMLInputElement).value
    );
    data.MprecioEstandar = Number(
      (document.querySelector("#estandarmp")! as HTMLInputElement).value
    );
    data.OsalarioEstandar = Number(
      (document.querySelector("#estandarmo")! as HTMLInputElement).value
    );
    data.OtiempoEstandar = Number(
      (document.querySelector("#tiempormo")! as HTMLInputElement).value
    );
    data.OtiempoReal = Number(
      (document.querySelector("#tiempoemo")! as HTMLInputElement).value
    );
    data.SprecioReal = Number(
      (document.querySelector("#realsd")! as HTMLInputElement).value
    );
    data.SprecioEstandar = Number(
      (document.querySelector("#estandarsd")! as HTMLInputElement).value
    );
    data.ScantidadReal = Number(
      (document.querySelector("#cantidadrsd")! as HTMLInputElement).value
    );
    data.ScantidadEstandar = Number(
      (document.querySelector("#cantidadesd")! as HTMLInputElement).value
    );
    data.Cpresupuestado = Number(
      (document.querySelector("#presupuestados")! as HTMLInputElement).value
    );
    data.Creal = Number(
      (document.querySelector("#realcif")! as HTMLInputElement).value
    );
    data.ChorasAplicadas = Number(
      (document.querySelector("#horasa")! as HTMLInputElement).value
    );
    data.ChorasReales = Number(
      (document.querySelector("#horasr")! as HTMLInputElement).value
    );
    data.CtasaVariables = Number(
      (document.querySelector("#tasa")! as HTMLInputElement).value
    );
    data.CIreal = Number(
      (document.querySelector("#civ")! as HTMLInputElement).value
    );
    data.InvInicialMateria = Number(
      (document.querySelector("#inicial")! as HTMLInputElement).value
    );
    data.InventarioFinalMateriaPrima = Number(
      (document.querySelector("#final")! as HTMLInputElement).value
    );
    data.InventarioIniProductosPro = Number(
      (document.querySelector("#productos")! as HTMLInputElement).value
    );
    data.InventarioFinalDeProductos = Number(
      (document.querySelector("#productosf")! as HTMLInputElement).value
    );
    data.ProductosTerminadosIni = Number(
      (document.querySelector("#terminados")! as HTMLInputElement).value
    );
    data.ProductosTerminadosFin = Number(
      (document.querySelector("#terminadosf")! as HTMLInputElement).value
    );
  });
  return section;
};
