export default class Menu {
  constructor(container, button, popup = false ) {
      this.container = container;
      this.popup = popup;
      this.button = button;
  }
  setListeners(){
    this.container.querySelector('.header__menu-button').addEventListener('click', this.switch.bind(this));
  }
  switch() {
    console.log(this.button)
    if (window.getComputedStyle(this.button).display !== 'none') {
      if (this.popup) {
        if (this.popup.classList.contains('popup_is-opened')) {
          this.popup.classList.remove('popup_is-opened');
          this.container.querySelector('.header__menu-button').classList.toggle('header__menu-button_close');
          this.container.classList.toggle('header_fixed');
          return;
        }
        if (event.target.classList.contains('header__menu-button')) {
          this.container.querySelector('.header__menu-button').classList.toggle('header__menu-button_close');
          this.container.classList.toggle('header_fixed');
        }
      } else {
        this.container.querySelector('.header__menu-button').classList.toggle('header__menu-button_close');
      }
      setTimeout(() => this.container.classList.toggle('header_dark'), 20);
      this.container.querySelector('.header__menu').classList.toggle('header__menu_opened');
    }
  }
}
