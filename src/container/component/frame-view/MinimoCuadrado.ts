import { MetodoDeMinimoI } from "../struct";
export const MinimoCuadrado = (data: MetodoDeMinimoI) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.style.width = "100%";
  view.innerHTML = `
  <div class="card-body">
  <h1>Punto Alto - Punto Bajo</h1>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Horas trabajadas(x)</th>
      <th scope="col">Valor mano de Obra(y)</th>
      <th scope="col">X * Y</th>
      <th scope="col">X^2</th>
      <th scope="col">Y^2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Julio</th>
      <td>${data.HorasJulio}</td>
      <td>${data.CostoJulio}</td>
      <td>${data.CjulioXHjulio()}</td>
      <td>${data.HorasJulio2()}</td>
      <td>${data.CostoJulio2()}</td>
    </tr>
    <tr>
      <th scope="row">Agosto</th>
      <td>${data.HorasAgosto}</td>
      <td>${data.CostoAgosto}</td>
      <td>${data.CagostoXHagosto()}</td>
      <td>${data.HorasAgosto2()}</td>
      <td>${data.CostoAgosto2()}</td>
    </tr>
    <tr>
      <th scope="row">Septiembre</th>
      <td>${data.HorasSeptiembre}</td>
      <td>${data.CostoSeptiembre}</td>
      <td>${data.CseptiembreXHseptiembre()}</td>
      <td>${data.HorasSeptiembre2()}</td>
      <td>${data.CostoSeptiembre2()}</td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td>${data.TotalHoras()}</td>
      <td>${data.TotalCostos()}</td>
      <td>${data.TotalCXH()}</td>
      <td>${data.TotalX2()}</td>
      <td>${data.TotalY2()}</td>
    </tr>
  </tbody>
</table>
  <hr/>
    <p>SCDx: ${data.OperacionX()}</p>
    <p>SCDy: ${data.OperacionY()}</p>
    <p>SCDxy: ${data.OperacionXxY()}</p>
  <hr/>
  <p><strong>Tasa Variable:<strong> ${data.TasaVariable()}</p>
  <p><strong>Porcion Costo Fijo: ${data.PorcionCosto()}</strong></p>
  <p><strong>Coeficiente De Relacion: ${data.CoeficienteDeRelacion().toFixed(2)}</strong></p>
  </div>
  `;
  return view;
};
