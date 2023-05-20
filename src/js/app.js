document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".element");
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png"
  );

  setInterval(() => {
    let currentElements = [];

    for (el of elements) {
      if (!el.hasChildNodes()) {
        currentElements.push(el);
      }
    }

    let random = Math.floor(Math.random() * currentElements.length);
    const element = currentElements[random];
    element.appendChild(image);
  }, 1000);
});
