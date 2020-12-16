const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');
//const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuLeft.classList.add('show');
        menuRight.classList.add('show');
        //navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuLeft.classList.remove('show');
        menuRight.classList.remove('show');
        //navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}