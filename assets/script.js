const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navegacion-principal');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('activo');
});