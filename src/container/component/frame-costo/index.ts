import { view } from "../struct";
import { Modal } from "../modal/index";
import { Operacion } from "../frame-op/index";
import "./index.css";
export const FrameCosto = (tag: string, element: HTMLElement | null) => {
  const add = document.querySelector(tag)!;
  let section: HTMLElement | null = null;
  if (add.id === "main-project") {
    section = document.createElement("div");
    section.className = "frame-index";
    section.innerHTML = `
          <section class="frame-center animated fadeInRight">
              <div class="frame-center-title animated bounce">
                  <h1>Projectos</h1>
                  <hr />
              </div>
            <div class="frame-center-opp" id="newProject"><p>nuevo Projecto</p></div>
          </section>
    `;
    const insert = section.querySelector(".frame-center")!;
    (view as HTMLElement[]).map((c) => {
      let button = document.createElement("button");
      button.className = "animated fadeInRightBig";
      button.className = "frame-center-opp";
      button.textContent = `${c.dataset.a}`;
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        Operacion(false);
        document.querySelector(".frame-index")!.append(c);
      });
      insert.append(button);
    });
    (section as HTMLElement)
      .querySelector("#newProject")!
      .addEventListener("click", () => {
        Modal();
      });
  } else {
    section = document.createElement("section");
    section.innerHTML = `
  <div class="animated fadeIn" id="main-project">
      <div class="frame-index">
          <section class="frame-center animated fadeInRight" style="overflow:auto;" >
              <div class="frame-center-title animated bounce">
                  <h1>Projectos</h1>
                  <hr />
              </div>
          </section>
      </div>
  </div>
    `;
    element!.querySelector("#save")!.addEventListener("click", () => {
      let project = document.createElement("div");
      project.className = "frame-center-opp";
      project.id = "newProject";
      project.innerHTML = "<p>nuevo Projecto</p>";
      project.classList.add("animated");
      project.classList.add("fadeInRight");
      element!.replaceWith(project);
      (section as HTMLElement)
        .querySelector("#newProject")!
        .addEventListener("click", () => {
          Modal();
        });
    });
    section.firstElementChild!.firstElementChild!.firstElementChild!.appendChild(
      element!
    );
  }
  if (section) {
    add.appendChild(section);
  }
};
