class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    state = {
        isActive: 'is-active',
        isLock: 'is-lock'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                this.closeMenu()
            }
        })
        this.overlayElement.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.closeMenu()
            }
        })
    }

    closeMenu() {
        this.overlayElement.classList.remove(this.state.isActive)
        this.burgerButtonElement.classList.remove(this.state.isActive)
        document.documentElement.classList.remove(this.state.isLock)
    }

    onBurgerButtonClick = () => {
        this.overlayElement.classList.toggle(this.state.isActive)
        this.burgerButtonElement.classList.toggle(this.state.isActive)
        document.documentElement.classList.toggle(this.state.isLock)
    }
}


export default Header




// const header = document.querySelector('.header');
// const headerOverlay = document.querySelector('.header__overlay');
// const burgerButton = document.querySelector('.header__burger-button');

// const toggleOverlayAndBurgerButton = (overlay, button) => {
//     overlay.classList.toggle('is-active')
//     button.classList.toggle('is-active')
//     document.documentElement.classList.toggle('is-lock')
// }

// burgerButton.addEventListener('click', () => {
//     toggleOverlayAndBurgerButton(headerOverlay, burgerButton)
// })

