const titleElements = document.querySelectorAll(".title");

// Adiciona um evento de clique a cada elemento "title"
titleElements.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("clicked");
    const corpo = title.nextElementSibling;

    corpo.classList.toggle("opened");
  });
});
