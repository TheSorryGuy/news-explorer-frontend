export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }
  open() {
    this.popup.classList.add('popup_is-opened');
    this.popup.querySelector('.popup-entry__close').addEventListener('click', this.close.bind(this));
    this.popup.querySelector('.popup-entry__switcher').addEventListener('click', this.switch.bind(this));
  }
  switch() {
    if (this.popup.querySelector('.popup-entry__title').textContent === 'Вход') {
      this.popup.querySelector('.popup-entry__title').textContent = 'Регистрация';
      this.popup.querySelector('.popup-entry__submit').textContent = 'Зарегистрироваться';
      this.popup.querySelector('.popup-entry__switcher').textContent = 'Войти';
      this.popup.querySelector('.popup-entry__container').classList.add('popup-entry__container_long');
      setTimeout(() => this.popup.querySelector('.popup-entry__additional-field').classList.add('popup-entry__additional-field_opened'), 180);
      return;
    }
    if (this.popup.querySelector('.popup-entry__title').textContent === 'Регистрация') {
      this.popup.querySelector('.popup-entry__title').textContent = 'Вход';
      this.popup.querySelector('.popup-entry__submit').textContent = 'Войти';
      this.popup.querySelector('.popup-entry__switcher').textContent = 'Зарегистрироваться';
      this.popup.querySelector('.popup-entry__container').classList.remove('popup-entry__container_long');
      setTimeout(() => this.popup.querySelector('.popup-entry__additional-field').classList.remove('popup-entry__additional-field_opened'), 100);
      return;
    }
  }
  close() {
    this.popup.classList.remove('popup_is-opened')
  }
}