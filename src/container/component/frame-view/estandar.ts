import { Idata } from "../struct";
export const EstandarView = (data: Idata) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.innerHTML = `
    <div class="card-body">
        <h1>Costos Estandar</h1>
            <h2>Materia Prima </h2>
            <p style="${
              data.MPvariacionP() < 0
                ? "background-color:red"
                : data.MPvariacionP() === 0
                ? ""
                : "background-color:green"
            }" >Precio: ${data.MPvariacionP()}</p>
            <p style="${
              data.MPcantidad() < 0
                ? "background-color:red"
                : data.MPcantidad() === 0
                ? ""
                : "background-color:green"
            }">Cantidad: ${data.MPcantidad()} </p>
            <h2>Mano de Obra Directa</h2>
            <p style="${
              data.MOsalario() < 0
                ? "background-color:red"
                : data.MOsalario() === 0
                ? ""
                : "background-color:green"
            }">Salario: ${data.MOsalario()}</p>
            <p style="${
              data.MOtiempo() < 0
                ? "background-color:red"
                : data.MOtiempo() === 0
                ? ""
                : "background-color:green"
            }">Tiempo: ${data.MOtiempo()}</p>
            <h2>Contracto de Servicios</h2>
            <p style="${
              data.SDprecio() < 0
                ? "background-color:red"
                : data.SDprecio() === 0
                ? ""
                : "background-color:green"
            }">Precio: ${data.SDprecio()}</p>
            <p style="${
              data.SDcantidad() < 0
                ? "background-color:red"
                : data.SDcantidad() === 0
                ? ""
                : "background-color:green"
            }">Cantidad: ${data.SDcantidad()}</p>
            <h2>CIF</h2>
            <p style="${
              data.CIFcapacidad() < 0
                ? "background-color:red"
                : data.CIFcapacidad() === 0
                ? ""
                : "background-color:green"
            }">Capacidad: ${data.CIFcapacidad()}</p>
            <p style="${
              data.CIFpresupuesto() < 0
                ? "background-color:red"
                : data.CIFpresupuesto() === 0
                ? ""
                : "background-color:green"
            }">Presupuesto: ${data.CIFpresupuesto()}</p>
            <p style="${
              data.CIFeficiencia() < 0
                ? "background-color:red"
                : data.CIFeficiencia() === 0
                ? ""
                : "background-color:green"
            }">Eficiencia: ${data.CIFeficiencia()}</p>
            <p style="${
              data.CIFcantidad() < 0
                ? "background-color:red"
                : data.CIFcantidad() === 0
                ? ""
                : "background-color:green"
            }">Cantidad: ${data.CIFcantidad()}</p>
            <hr/>
              <h2>Ver las Formulas</h2>
              <button class="btn btn-primary" style="width:10rem;">Formulas</button>

    </div>
  `;
  view.style.width = "auto";

  return view;
};
