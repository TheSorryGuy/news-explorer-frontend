import "../pages/index.css";
import Popup from '../js/Popup';
import FormValidator from '../js/FormValidator';
import Menu from '../js/Menu';

const popupForm = document.querySelector('.popup');
const entryButton = document.querySelector('.header__button');
const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button')

const validator = new FormValidator(popupForm)
const menu = new Menu(header, popupForm, menuButton);
const popup = new Popup(popupForm, validator, menu);


function openPopup() {
  popup.open();
};

validator.setEventListeners();
popup.popupEventListeners();

menu.setListeners();
entryButton.addEventListener('click', openPopup);



// make todo list


// gh pages
// webpack script for gh deploy
// everything into src
// readme
// fix plugin versions
// DONE form placeholders
// form validation
// form submit
// alt fonts
// alt img
// popup adaptive
// tablet menu