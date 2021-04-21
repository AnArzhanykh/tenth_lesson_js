import menu from '../menu.json'
import itemsTemplate from '../templates/templating.hbs'


const markup = itemsTemplate(menu);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup)
