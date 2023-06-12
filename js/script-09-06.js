// const contentElem = document.querySelector('.content');

// function creatMarcup() {
//   let markup = '';
//   for (let i = 0; i < 9; i += 1) {
//     markup += '<div class="item"></div>';
//   }
//   console.log(markup);
//   contentElem.insertAdjacentHTML('afterbegin', markup);
// }
// creatMarcup();

// contentElem.addEventListener('click', handlerClick);
// function handlerClick(evt) {
//   if (!evt.target.classList.contains('item')) {
//     return;
//   }

//   console.log(evt.target.classList.contains('item'));
// }

// ====================================================================

let player = 'X';

const contentElem = document.querySelector('.content');

function creatMarcup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }

  // contentElem.insertAdjacentHTML("afterbegin", markup);
  contentElem.innerHTML = markup;
}
creatMarcup();

contentElem.addEventListener('click', handlerClick);
function handlerClick(evt) {
  if (!evt.target.classList.contains('item') || evt.target.textContent) {
    return;
  }

  evt.target.textContent = player;

  player = player === 'X' ? 'O' : 'X';

  const id = evt.target.dataset.id;
}

const btnRestart = document.querySelector('.btn');

btnRestart.addEventListener('click', handlerRestart);

function handlerRestart(evt) {
  creatMarcup();
  player = 'X';
}
