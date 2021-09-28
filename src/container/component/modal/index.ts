const bac = (document.querySelector(".backdrop") as HTMLElement)!;
import { frameData } from "../frame-data/index";
import { Menu } from "../frame-menu/index";
import "./modal.css";
import { Operacion } from "../frame-op/index";
import { Producion } from "../frame-data/index_producion";
import { Prorrateo } from "../frame-data/index_prorrateo";
import { Estandar } from "../frame-data/index_estandar";
import { DiVa } from "../frame-data/index_DiVa";
import { FiVa } from "../frame-data/index_FiVa";
import { estadoCV } from "../frame-data/index_estado_costoVentas";
import { Balance } from "../frame-view/Balance";
import { data } from "../struct";
export const Modal = () => {
  const optionsMenu = Menu();
  bac.appendChild(optionsMenu);
  bac.style.display = "block";
  bac.addEventListener("click", (e) => {
    e.stopPropagation();
    bac.style.display = "none";
    if (bac.hasChildNodes()) {
      bac.removeChild(bac.firstElementChild!);
    }
  });
  optionsMenu.querySelector("#costos")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    frameData();
  });
  optionsMenu.querySelector("#producion")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    Producion();
  });
  optionsMenu.querySelector("#prorrateo")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    Prorrateo();
  });
  optionsMenu.querySelector("#estandar")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    Estandar();
  });
  optionsMenu.querySelector("#diab")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    DiVa();
  });
  optionsMenu.querySelector("#fijos")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    FiVa();
  });
  optionsMenu.querySelector("#estado")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    estadoCV();
  });
  optionsMenu.querySelector("#balance")!.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.remove();
    bac.style.display = "none";
    Operacion(false);
    const frameIndex = document.querySelector(".frame-index")!;
    (frameIndex as HTMLElement).style.width = "90%";
    frameIndex.appendChild(Balance(data));
  });
};
