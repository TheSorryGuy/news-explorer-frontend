import "../pages/index.css";
import Popup from '../js/Popup';
import FormValidator from '../js/FormValidator';

const popupForm = document.querySelector('.popup');
const entryButton = document.querySelector('.header__button');

const validator = new FormValidator(popupForm)
const popup = new Popup(popupForm, validator);

function openPopup() {
  popup.open();
};

validator.setEventListeners();
popup.popupEventListeners();

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