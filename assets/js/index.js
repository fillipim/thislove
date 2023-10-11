console.log("olá");

const form = document.getElementById("form");
const input = document.getElementById("input");
const toast = document.querySelector(".toast")

form && form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '') === "marianagodinhoalcantara") {
        toast.classList.add("show");
        setTimeout(function () {
            toast.classList.remove("show");
            window.location.assign("pages/poema.html")
        }, 5000);
    }
});

const button = document.getElementById("next");
const p = document.getElementsByTagName("p");

const textos = [
    "Minha princesa, parabéns pelo seu diazinho, não estou nem acreditando que estou comemorando mais um aniversário seu e com você. Está ficando mais velhinha e mais perto de casar comigo também kkkkkkkk.",
    "Sou muito grato a Deus por ter você na minha vida, você é a pessoa mais especial que eu poderia encontrar, e a mais amiga, a que sempre vai estar do meu lado.",
    "E quando eu tenho recaídas, me ajuda a superar o sentimento de estar sozinho, eu acho que Deus te criou pensando em mim, no quanto bem ia me fazer ter você.",
    "Eu te amo muito vidinha, muito mesmo, e a toda hora, não tenho nem palavras para expressar, eu oro muito a Deus para que dê tempo de eu casar com você e ter você pertinho aqui de mim.",
    "Eu admiro a mulher que você está se tornando, o quão cuidadora e dedicada, coloca o coração em tudo, é uma mulher forte e batalhadora, e cheia do espírito.",
    "E com o coração segundo a vontade de Deus, é um privilégio ter você na minha vida.",
    "Eu amo você, meu Amor.",
    "Você é incrivelmente incrível e todas as cores em uma só.",
    "E faz meus dias muito mais felizes."
]

let currentIndex = 0;

function showNextText() {
    if (currentIndex < textos.length) {
        p[0].classList.remove("show-text");
        setTimeout(() => {
            p[0].textContent = textos[currentIndex];
            currentIndex++;
            p[0].classList.add("show-text");
        }, 1000);
    } else {
        // Quando atingir o último índice, exiba o vídeo
        const videoContainer = document.getElementById("myAudio");
        videoContainer.style.display = "block";
    }
}

button.addEventListener('click', showNextText);

showNextText();