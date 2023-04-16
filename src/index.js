import './style.css';
import defaultExport from '../modules/class.js';

const scoresList = document.querySelector('.scoresList');
window.addEventListener('load', () => {
  async function fillDom() {
    scoresList.innerHTML = await defaultExport.addListToDom();
  }
  fillDom();
});
window.addEventListener('click', (e) => {
  if (e.target.id === 'refresh') {
    window.location.reload();
  } else if (e.target.id === 'submit') {
    defaultExport.addItemToAPI();
  }
});