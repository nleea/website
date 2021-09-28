import { FrameCosto } from "../component/frame-costo/index";
const overlay = document.querySelector(".overlay")!;
const init = document.querySelector(".log-in")!;
import "../login/index.css";
import { index_view } from "../component/index_view";
localStorage.setItem("usuario", "prueba");
localStorage.setItem("contraseña", "123");
init.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  const usuario = (overlay.querySelector("#txt-input") as HTMLInputElement)!
    .value;
  const contraseña = (overlay.querySelector("#pwd") as HTMLInputElement)!.value;
  const localUsuario = localStorage.getItem("usuario");
  const localContraseña = localStorage.getItem("contraseña");
  if (usuario === localUsuario && contraseña === localContraseña) {
    overlay.remove();
    FrameCosto("main", index_view());
  } else {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.classList.add("text-center");
    div.setAttribute("role", "alert");
    div.innerText = "Contraseña o Usuario Invalido";
    div.style.fontSize = "20px";
    main!.insertAdjacentElement("afterbegin", div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }
});
