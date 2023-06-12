// ====================================================================
// const cars = [
//   {
//     brand: 'Honda',
//     model: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     brand: 'BMW',
//     model: 'X5',
//     price: 19000,
//     img: 'https://i.infocar.ua/img/mats/11150/ins/1614846802162.jpg',
//   },
//   {
//     brand: 'Audi',
//     model: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     brand: 'BMW',
//     model: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     brand: 'Audi',
//     model: 'A6',
//     price: 25000,
//     img: 'https://i.gaw.to/vehicles/photos/40/28/402805-2022-audi-a6.jpg?640x400',
//   },
//   {
//     brand: 'Honda',
//     model: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     brand: 'Volvo',
//     model: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
//   {
//     brand: 'Audi',
//     model: 'RSQ8',
//     price: 180000,
//     img: 'https://static.apostrophe.ua/uploads/image/7a832f54750de46acc3269ef2e0d8b26.jpg',
//   },
// ];

// // Відмалювати картки авто, базова стилізація карток(по три в рядку).
// // Делегування на список.
// // При кліку на картку необхідно відкрити модальне вікно з детальною інфо по авто.

// // План дій
// // 1. Додати контейнер для списку.
// // 2. Ініціалізувати цей список в JS.
// // 3. Створити розмітку картки(карток) з класами за допомогою методу Map та шаблонних рядків.
// // 3.1.Вміст картки: зображення та марку авто.
// // 4. Додати розмітку в список в html.
// // 5. Додати стилізацію карток.
// // 6. Додати прослуховувача на список на подію клік.
// // 7. Делегувати подію по кліку на пункт списку.
// // 8. Додати необхідну бібліотеку basicLightbox.
// // 9. Створити модальне вікно, з можливістю його запуску по кліку на пункт списку.
// // 10. Додати в модальне вікно повну інформацію по авто.

// const listAllAuto = document.querySelector(".js-list");

// const markupAutoList = cars
//   .map(
//     ({ brand, model, img }) =>
//       `<li class="item"><img src="${img}" alt="${model}" width='300'><h2>${brand}</h2></li>`
//   )
//   .join("");
// listAllAuto.insertAdjacentHTML("afterbegin", markupAutoList);
// listAllAuto.addEventListener("click", handlerOpenModal);

// function handlerOpenModal(evt) {
//   if (evt.target === evt.currentTarget) {
//     return;
//   } else {
//   }
// }
// console.log(listAllAuto);

// .list-auto {
//   display: flex;
//   list-style: none;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   width: 1100px;
//   gap: 20px;
// }
// .item {
//   border: 2px solid aqua;
// }

///////////////////////////////////////////////////////////////////////////

// План дій
// 1. Додати контейнер для списку.
// 2. Ініціалізувати цей список в JS.
// 3. Створити розмітку картки
// 3.1.Вміст картки: зображення та марку авто.
// + 4. Додати розмітку в список в html.
// + 5. Додати стилізацію карток.
// + 6. Додати прослуховувача на список на подію клік.

// 7. Делегувати подію по кліку на пункт списку.
// 8. Додати необхідну бібліотеку basicLightbox.
// 9. Створити модальне вікно, з можливістю його запуску по кліку на пункт списку.
// 10. Додати в модальне вікно повну інформацію по авто.

const cars = [
  {
    id: 1,
    brand: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 2,
    brand: 'BMW',
    model: 'X5',
    price: 19000,
    img: 'https://i.infocar.ua/img/mats/11150/ins/1614846802162.jpg',
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    brand: 'BMW',
    model: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    brand: 'Audi',
    model: 'A6',
    price: 25000,
    img: 'https://i.gaw.to/vehicles/photos/40/28/402805-2022-audi-a6.jpg?640x400',
  },
  {
    id: 6,
    brand: 'Honda',
    model: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 7,
    brand: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    id: 8,
    brand: 'Audi',
    model: 'RSQ8',
    price: 180000,
    img: 'https://static.apostrophe.ua/uploads/image/7a832f54750de46acc3269ef2e0d8b26.jpg',
  },
];

const listAllAuto = document.querySelector('.js-list');

const markupAutoList = cars
  .map(
    ({ brand, model, img, id }) =>
      `<li class="item" data-id='${id}'><img src="${img}" alt="${model}" width='300'><h2>${brand}</h2></li>`,
  )
  .join('');

listAllAuto.insertAdjacentHTML('afterbegin', markupAutoList);
listAllAuto.addEventListener('click', handlerOpenModal);

function handlerOpenModal(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentId = evt.target.closest('li').dataset.id;
  const currentAuto = cars.find(({ id }) => id === Number(currentId));

  const { brand, model, price, img } = currentAuto;

  const modalAuto = basicLightbox.create(`
    <div style="background-color:#fff;"><img width="400" src="${img}" alt="${brand} ${model}"><h3>${brand}</h3><h4>${model}</h4><p>$${price}</p></div>
  `);
  modalAuto.show();
}
