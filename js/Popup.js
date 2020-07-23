export default class Popup {
  constructor(popup, validator) {
    this.popup = popup;
    this.validator = validator;
  }
  popupEventListeners() {
    this.popup.querySelector('.popup-entry__close').addEventListener('click', this.close.bind(this));
    this.popup.querySelector('.popup-entry__switcher').addEventListener('click', this.switch.bind(this));
  }
  open() {
    this.popup.classList.add('popup_is-opened');
    this.validator.setSubmitState();
  }
  switch() {
    if (this.popup.querySelector('.popup-entry__title').textContent === 'Вход') {
      this.popup.querySelector('.popup-entry__title').textContent = 'Регистрация';
      this.popup.querySelector('.popup-entry__submit').textContent = 'Зарегистрироваться';
      this.popup.querySelector('.popup-entry__switcher').textContent = 'Войти';
      this.popup.querySelector('.popup-entry__container').classList.add('popup-entry__container_long');
      this.popup.querySelector('.popup-entry__additional-field').classList.add('popup-entry__additional-field_opened');
      this.validator.setSubmitState();
      return;
    }
    if (this.popup.querySelector('.popup-entry__title').textContent === 'Регистрация') {
      this.popup.querySelector('.popup-entry__title').textContent = 'Вход';
      this.popup.querySelector('.popup-entry__submit').textContent = 'Войти';
      this.popup.querySelector('.popup-entry__switcher').textContent = 'Зарегистрироваться';
      this.popup.querySelector('.popup-entry__container').classList.remove('popup-entry__container_long');
      this.popup.querySelector('.popup-entry__additional-field').classList.remove('popup-entry__additional-field_opened');
      this.validator.setSubmitState();
      return;
    }
  }
  close() {
    this.popup.classList.remove('popup_is-opened')
  }
}