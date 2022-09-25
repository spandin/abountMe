window.addEventListener('load', (e) => {
    console.log(e.type + ' page');
})

// Burger Nav
const burgerMenu = document.querySelector('.header-menu__burger')
const menuList = document.querySelector('.header-menu__list')

burgerMenu.addEventListener('click', (e) => {
    console.log('Burger menu');
    document.body.classList.toggle('lock')
    burgerMenu.classList.toggle('active')
    menuList.classList.toggle('active')
})

// Плавная прокрутка
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

//Довнлоад блокировщик
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