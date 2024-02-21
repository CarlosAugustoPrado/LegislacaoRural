const searchInput = document.getElementById("js-searchInput");
const cards = document.querySelectorAll(".card-lei");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const corpo = card.querySelector(".corpo");
    corpo.style.display = corpo.style.display === "block" ? "none" : "block";
  });
});

searchInput.addEventListener("input", function () {
  const searchTerms = this.value.trim().toLowerCase().split(/\s+/);

  cards.forEach((card) => {
    const title = card.querySelector(".title h2").textContent.trim().toLowerCase();
    const description = card.querySelector(".corpo").textContent.trim().toLowerCase();
    let match = false;

    // Verificar se cada termo da pesquisa está presente no título ou na descrição
    searchTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        match = true;
      }
    });

    if (match) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

function startSpeechRecognition() {
  const recognition = new webkitSpeechRecognition() || SpeechRecognition();
  recognition.lang = "pt-BR";

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    searchInput.dispatchEvent(new Event("input")); // Aciona o evento input manualmente
  };

  recognition.start();
}

const voiceSearchButton = document.querySelector(".btn-voice-search");
voiceSearchButton.addEventListener("click", function () {
  startSpeechRecognition();
});
