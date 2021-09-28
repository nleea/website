import { metodoPuntoAlto } from "../struct";
export const puntoAltoView = (data: metodoPuntoAlto) => {
  const view = document.createElement("div");
  view.className = "card";
  view.classList.add("view");
  view.style.overflow = "auto";
  view.style.width = "100%";
  view.innerHTML = `
  <h1>Punto Alto - Punto Bajo</h1>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Horas trabajadas</th>
      <th scope="col">Valor mano de Obra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Julio</th>
      <td>${data.HorasJulio}</td>
      <td>${data.CostoJulio}</td>
    </tr>
    <tr>
      <th scope="row">Agosto</th>
      <td>${data.HorasAgosto}</td>
      <td>${data.CostoAgosto}</td>
    </tr>
    <tr>
      <th scope="row">Septiembre</th>
      <td>${data.HorasSeptiembre}</td>
      <td>${data.CostoSeptiembre}</td>
    </tr>
  </tbody>
</table>
    <hr/>
<table class="table">
<thead>
  <tr>
    <th scope="col">Punto</th>
    <th scope="col">Valor mano de Obra</th>
    <th scope="col">Horas trabajadas</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">Alto</th>
    <td>${data.Mayor("costos")}</td>
    <td>${data.Mayor("")}</td>
  </tr>
  <tr>
    <th scope="row">Bajo</th>
    <td>${data.Menor("costos")}</td>
    <td>${data.Menor("")}</td>
  </tr>
  <tr>
    <th scope="row">Diferencia</th>
    <td>${(data.Mayor("costos") - data.Menor("costos")).toFixed(5)}</td>
    <td>${(data.Mayor("") - data.Menor("")).toFixed(5)}</td>
  </tr>
</tbody>
</table> 
     <p><strong>Tasa Variable:</strong> ${data.TasaVariable()}</p>   
     <h3>Nivel mas Alto: ${data.NivelMasAlto()}</h3>
     <h3>Nivel mas Bajo: ${data.NivelMasBajo()}</h3>
  `;
  return view;
};
