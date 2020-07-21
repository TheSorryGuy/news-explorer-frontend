import "../pages/index.css";
import Popup from '../js/Popup';

const popup = document.querySelector('.popup');
const entryButton = document.querySelector('.header__button');

const popupSwitch = new Popup(popup);

function openPopup() {
  popupSwitch.open();
}

entryButton.addEventListener('click', openPopup);