// Seleciona os elementos
const disco = document.getElementById('img-disco');
const audio = document.getElementById('music-audio');
const musicName = document.getElementById('music-name');
const back = document.getElementById('rewind');
const playAndPause = document.getElementById('play-pause');
const advance = document.getElementById('foward');
const volumeSlider = document.getElementById('volume-slider');

// Configurações iniciais
const totalMusic = 11; // Supondo que há 10 músicas no total
let isPlaying = false; // Estado inicial da música
let musicNumber = 1; // Número inicial da música

// Array com os títulos das músicas
const musicTitles = [
  "Ainda Vai Dar Ruim",
  "Chora",
  "Doces Lembranças",
  "Eu Quero é Diversão",
  "Isso A Globo Não Mostra",
  "Mãe",
  "Minha Timidez",
  "Quanto Mais A Gente Briga",
  "Status Preferido",
  "Traição A Queima Roupa",
  "Novo Elo"
];

// Função para tocar a música
function playMusic() {
  playAndPause.classList.remove("bi-play-circle-fill");
  playAndPause.classList.add("bi-pause-circle-fill");
  audio.play();
  isPlaying = true;
}

// Função para pausar a música
function pauseMusic() {
  playAndPause.classList.remove("bi-pause-circle-fill");
  playAndPause.classList.add("bi-play-circle-fill");
  audio.pause();
  isPlaying = false;
}

// Função para tocar ou pausar a música
playAndPause.addEventListener('click', function() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

// Função para retroceder a música
back.addEventListener('click', function() {
  if (musicNumber > 1) {
    musicNumber--;
  } else {
    musicNumber = totalMusic;
  }
  updateMusic();
});

// Função para avançar a música
advance.addEventListener('click', function() {
  if (musicNumber < totalMusic) {
    musicNumber++;
  } else {
    musicNumber = 1;
  }
  updateMusic();
});

// Função para atualizar a música
function updateMusic() {
  // Atualiza a fonte do áudio e da imagem, e o nome da música conforme a lógica do projeto
  audio.src = `./audios/musica${musicNumber}.mp3`;
  disco.src = `./img/disco${musicNumber}.jpg`;
  musicName.textContent = musicTitles[musicNumber - 1]; // Atualiza o nome da música
  // Reinicia a reprodução se a música estava tocando
  if (isPlaying) {
    audio.play();
  }
}

// Função para ajustar o volume com o slider
volumeSlider.addEventListener('input', function() {
  audio.volume = volumeSlider.value;
});

// Inicia a primeira música
updateMusic();


// Fechando e Abrindo o Modal
const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('.modal .close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
};

// Abrir o modal automaticamente ao carregar a página
window.addEventListener('load', function() {
  Modal.open();
});

// Fechar o modal ao clicar no botão de fechar
Modal.buttonClose.addEventListener('click', function() {
  Modal.close();
});

// Adicionando a função para fechar o Modal com a tecla ESC
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    Modal.close();
  }
});