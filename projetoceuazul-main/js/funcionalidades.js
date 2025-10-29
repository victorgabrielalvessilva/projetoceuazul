// Menu hamburger

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-list');

hamburger.addEventListener('click', ativarmenu())

function ativarmenu() {
    nav.classList.toggle('.active')
}