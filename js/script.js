const contentElem = document.querySelector('.content');
const btnRestart = document.querySelector('.button');

btnRestart.addEventListener('click', handlerRestart);
contentElem.addEventListener('click', handlerClick);

const KEY_LS_X = 'History X';
const KEY_LS_O = 'History O';
const KEY_LS_CURRENT_PLAYER = 'Current Player';

const historyX = JSON.parse(localStorage.getItem(KEY_LS_X)) ?? [];
const historyO = JSON.parse(localStorage.getItem(KEY_LS_O)) ?? [];
let player = localStorage.getItem(KEY_LS_CURRENT_PLAYER) ?? 'X';

function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  contentElem.innerHTML = markup;
  // contentElem.insertAdjacentHTML("afterbegin", markup);
}
createMarkup();

function continueGame() {
  for (const item of contentElem.children) {
    if (historyX.includes(item.dataset.id)) {
      item.textContent = 'X';
    } else if (historyO.includes(item.dataset.id)) {
      item.textContent = 'O';
    }
  }
}
continueGame();

function handlerClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.textContent) {
    //!evt.target.classList.contains("item")
    return;
  }
  evt.target.textContent = player;
  const id = evt.target.dataset.id;
  if (player === 'X') {
    historyX.push(id); // подія Х
    localStorage.setItem(KEY_LS_X, JSON.stringify(historyX));
  } else {
    historyO.push(id); // подія О
    localStorage.setItem(KEY_LS_O, JSON.stringify(historyO));
  }

  player = player === 'X' ? 'O' : 'X';
  localStorage.setItem(KEY_LS_CURRENT_PLAYER, player);
}

function handlerRestart() {
  createMarkup();
  player = 'X';
  localStorage.removeItem(KEY_LS_X);
  localStorage.removeItem(KEY_LS_O);
  localStorage.removeItem(KEY_LS_CURRENT_PLAYER);
  historyX.splice(0, historyX.length);
  historyO.splice(0, historyO.length);
}
