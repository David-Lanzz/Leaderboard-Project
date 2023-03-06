import './style.css';
import defaultExport from '../modules/class.js';

const scoresList = document.querySelector('.scoresList');
window.addEventListener('load', () => {
  scoresList.innerHTML = defaultExport.addListToDom();
});