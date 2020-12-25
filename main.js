window.addEventListener('load', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const navMenu = document.querySelector('#nav-menu');
    let opened = false;

    menuBtn.addEventListener('click', () => {
        opened = !opened;
        opened ? (menuBtn.classList.remove('fa-bars')|| menuBtn.classList.add('fa-times')) : (menuBtn.classList.remove('fa-times')|| menuBtn.classList.add('fa-bars'));
        navMenu.classList.toggle('nav-mobile-menu-active');
    });
});