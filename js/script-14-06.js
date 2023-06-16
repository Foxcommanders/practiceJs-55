// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log);

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log);

// console.log(6);

// setTimeout(() => console.log(7), 0);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// === Синхронний код > Мікропроцеси > Макропроцеси ===

// === Мікропроцеси ===
// 1 - Проміси || Promise
// 2 - Обзервер || IntersectionObserver || MutationObserver

// === Макропроцеси ===
// 1 - СетТаймаут || SetTimeout
// 2 - СетІнтервал || SetInterval
// 3 - СетІмідаейт || SetImmediate
// 4 - РеквестАнімейшнФрейм || reqestAnimationFrame

// console.log("Start - ", 1);
// setTimeout(() => {
//   console.log("SetTimeout - ", 2);
// }, 0);
// Promise.resolve("Promise - ").then((value) => {
//   console.log(value, 3);
// });
// console.time("For");
// // for (let i = 0; i < 399999; i += 1) {
// //   console.log("For - ", i);
// // }
// console.timeEnd("For");
// console.log("End - ", 4);

// Promise.resolve("").then(() => {
//   console.log("Before");
//   setTimeout(() => {
//     console.log("SetTimeout");
//   });
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const elements = {
  startBtn: document.querySelector('.js-start'),
  container: document.querySelector('.js-container'),
};

const templateWin = '<div>You are Winner !!</div>';
const templateLose = '<div>You are Loser !!</div>';

elements.startBtn.addEventListener('click', handlerClick);

function handlerClick(evt) {
  evt.target.disabled = true;
  const promises = Array.from(elements.container.children).map(_ =>
    createPromise(),
  );

  Promise.allSettled(promises).then(items =>
    items.forEach((elem, idx) => {
      elements.container.children[idx].textContent = '';
      setTimeout(() => {
        elements.container.children[idx].textContent =
          elem.reason || elem.value;
        if (idx === items.length - 1) {
          const winner = items.every(({ status }) => status === 'fulfilled');
          let instance;
          if (winner) {
            instance = basicLightbox.create(templateWin);
          } else {
            instance = basicLightbox.create(templateLose);
          }
          instance.show();
          evt.target.disabled = false;
        }
      }, 700 * idx);
    }),
  );
}
function createPromise() {
  const promise = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve('🤑');
    } else {
      reject('👹');
    }
  });
  return promise;
}
