import { Idata } from "../struct";
import "./Balance.css";
export const Balance = (data: Idata) => {
  const div = document.createElement("div");
  div.style.zIndex = "100";
  div.style.width = "100%";
  div.style.height = "29.8rem";
  div.className = "card";
  div.classList.add("view");
  div.style.overflow = "auto";
  div.innerHTML = `
        <div class="card-header w-100 text-center"><h1>Balance General</h1></div>
        <div class="card-body">
        <table class="steelBlueCols mx-auto">
        <thead>
        <tr>
        <th>ACTIVOS CORRIENTES</th>
        <th>ACTIVOS&nbsp;</th>
        <th>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</th>
        <th>PASIVOS&nbsp;</th>
        <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>VENTAS&nbsp;</td>
        <td>${data.ventas}</td>
        <td>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td>
        <td>PASIVOS CORRIENTES&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>TOTAL ACTIVOS&nbsp;</td>
        <td>65128000</td>
        <td>&nbsp;</td>
        <td>MATERIA PRIMA&nbsp;</td>
        <td>${data.materiaPrimaDirecta}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>MANO DE OBRA DIRECTA</td>
        <td>${data.manoDeObreDirecta}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>IMPUESTOS</td>
        <td>${data.Aimpuestos}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>MANTENIMIENTO Y REPARACIONES</td>
        <td>${data.Dmantenimiento}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>LUZ Y ENERGIA&nbsp;</td>
        <td>${data.Dluz}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;COMBUSTIBLE</td>
        <td>${data.Dcombustible}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>VARIOS&nbsp;</td>
        <td>${data.Dvario}</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>TOTAL PASIVOS CORRIENTES&nbsp;</td>
        <td>${data.TotalPasivoCorriente()}</td>
        </tr>
        <tr>
        <td>PATRIMONIO&nbsp;&nbsp;</td>
        <td>&nbsp;TOTAL&nbsp;</td>
        <td>${data.patrimonio()}</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>
        </div>
  `;
  return div;
};
