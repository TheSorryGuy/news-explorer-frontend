import './pages/saved-page.css';
import Menu from './js/Menu';

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button')

const menu = new Menu(header, menuButton);

menu.setListeners();
