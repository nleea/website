import { view } from "../struct";
import { FrameCosto } from "../frame-costo/index";
export const Operacion = (op: boolean) => {
  const main = document.getElementById("main-project")!;
  const frameIndex = document.querySelector(".frame-index")!;
  main.removeChild(frameIndex);
  const newElement = document.createElement("div");
  newElement.className = frameIndex.className;
  newElement.classList.add("animated");
  newElement.classList.add("flash");
  newElement.innerHTML = `
    <section>
        <button>Atras</button>
        <hr/>
        <a class="btn btn-danger w-100" id="deleted">Borrar<a>
    </section>
  `;
  if (!op) {
    newElement.querySelector("button")!.addEventListener("click", () => {
      const data = newElement.lastElementChild!;
      if ((data as HTMLElement).dataset.a === undefined) {
        (data as HTMLElement).dataset.a = prompt(
          "Cual es el Nombre del archivo"
        )!;
        if ((data as HTMLElement).dataset.a !== "null") {
          (data as HTMLElement).style.width = "100%";
          view.push(data);
        }
      }
      newElement.remove();
      FrameCosto("#main-project", null);
    });
  } else {
    newElement.querySelector("button")!.addEventListener("click", () => {
      newElement.replaceWith(frameIndex);
    });
  }
  newElement.querySelector("#deleted")!.addEventListener("click", () => {
    const data = newElement.lastElementChild!;
    if ((data as HTMLElement).dataset.a !== undefined) {
      let info = (data as HTMLElement).dataset.a!;
      let index = view.findIndex((v) => {
        return (v as HTMLElement).dataset.a === info;
      });
      console.log(view);
      view.splice(index, 1);
      console.log(view, "-", index);
    }
    newElement.remove();
    FrameCosto("#main-project", null);
  });
  main.appendChild(newElement);
};
