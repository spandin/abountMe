window.addEventListener('load', (e) => {
    console.log('Page ' + e.type + 'ed');
})

// Burger Nav
const burgerMenu = document.querySelector('.header-menu__burger')
const menuList = document.querySelector('.header-menu__list')

burgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('_lock')
    burgerMenu.classList.toggle('_active')
    menuList.classList.toggle('_active')
})

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch')
    menuList.addEventListener('click', (e) => {
        if (e.target.closest('.header-nav__link')) {
            document.body.classList.remove('_lock')
            burgerMenu.classList.toggle('_active')
            menuList.classList.toggle('_active')
        }
    })
    
} else {
    document.body.classList.add('_pc')
    menuList.addEventListener('click', (e) => {
        if (e.target.closest('.header-nav__link')) {
            document.body.classList.remove('_lock')
            burgerMenu.classList.toggle('_active')
            menuList.classList.toggle('_active')
        }
    })
}

// Smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Add locked img
const img = document.querySelectorAll('img'); 
let img_array = [...img]; 
img_array.forEach((i) => {
    i.classList.add('locked')
});

// Download block
(function () {
    "use strict";

    var el = document.createElement('div');
    el.style.cssText = 'pointer-events:auto';

    if (el.style.pointerEvents !== 'auto') {
        el = null;

        var _lock = function (evt) {
            evt = evt || window.event;
            var el = evt.target || evt.srcElement;
            if (el && /\slocked\s/.test(' ' + el.className + ' ')) {
                if (evt.stopPropagation) {
                    evt.preventDefault();
                    evt.stopPropagation();
                } else {
                    evt.returnValue = true;
                    evt.cancelBubble = true;
                }
            }
        };

        if (document.addEventListener) {
            document.addEventListener('mousedown', _lock, false);
            document.addEventListener('contextmenu', _lock, false);
        } else {
            document.attachEvent('onmousedown', _lock);
            document.attachEvent('oncontextmenu', _lock);
        }
    }
})();