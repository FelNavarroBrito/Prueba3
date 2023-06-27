const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
const body = document.body;

modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
