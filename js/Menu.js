export default class Menu {
  constructor(container, popup, button) {
      this.container = container;
      this.popup = popup;
      this.button = button;
  }
  setListeners(){
    this.container.querySelector('.header__menu-button').addEventListener('click', this.switch.bind(this));
  }
  switch() {
    if (window.getComputedStyle(this.button).display !== 'none') {
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
      // this.container.classList.toggle('header_fixed');
      setTimeout(() => this.container.classList.toggle('header_dark'), 20);
      this.container.querySelector('.header__menu').classList.toggle('header__menu_opened');
    }
  }
}
