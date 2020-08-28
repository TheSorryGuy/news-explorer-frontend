import "./pages/index.css";
import Popup from './js/Popup';
import FormValidator from './js/FormValidator';
import Menu from './js/Menu';
import Article from './js/Article';

const popupForm = document.querySelector('.popup');
const entryButton = document.querySelector('.header__button');
const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button')

const errors = {
  emptyError: 'Это обязательное поле',
  nameLength: 'Имя должно содержать от 2 до 30 символов',
  passwordLength: 'Пароль должен содержать от 8 до 30 символов',
  emailPattern: 'Адрес электронной почты некорректен',
}

const validator = new FormValidator(popupForm, errors)
const menu = new Menu(header, menuButton, popupForm);
const popup = new Popup(popupForm, validator, menu);



function openPopup() {
  popup.open();
};

validator.setEventListeners();
popup.popupEventListeners();

menu.setListeners();
entryButton.addEventListener('click', openPopup);