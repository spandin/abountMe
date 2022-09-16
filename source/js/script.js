const logoBlock = document.querySelector('.header-nav__logo')

const subLogo = document.createElement('div')
subLogo.innerHTML = 'frontend dev.'
logoBlock.append(subLogo)

subLogo.style.cssText = 'font-size: 20px; text-align: right;'
