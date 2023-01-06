'use strict'

let menu = document.querySelector('.header__burger'),
    btn = document.querySelector('.btn'),
    lst = document.querySelector('.header__menu')
    
    // Menu-burger: open/close

    menu.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        lst.classList.toggle('show');
    })