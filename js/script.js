// ====================================================================
//
// const cars = [
//   {
//     model: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     model: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     model: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     model: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     model: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// const carForm = document.querySelector('.js-form');
// const cardList = document.querySelector('.js-card-list');

// console.log(carForm);
// console.log(cardList);

// function createMarkup(arr) {
//   const markup = arr.map(({ model, type, price, img }) => {
//     return `<li>
//         <img src="${img}" alt="${type}" width="300">
//         <h2>${model}</h2>
//         <h3>${type}</h3>
//         <p>${price}</p>
//       </li>`;
//   });
//   // console.log(markup);
//   return markup.join('');
// }

// createMarkup(cars);
// console.log(createMarkup(cars));
// cardList.insertAdjacentHTML('afterbegin', createMarkup(cars));

// ====================================================================

const cars = [
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];
const carForm = document.querySelector('.js-form');
const carList = document.querySelector('.js-card-list');

function createMarkup(arr) {
  const markup = arr.map(
    ({ model, type, price, img }) =>
      `<li>
  <h2>${model}</h2>
  <h3>${type}</h3>
  <img src="${img}" alt="${type}" width=300px>
  <p>${price}</p>
</li>`,
  );
  return markup.join('');
}

createMarkup(cars);
carList.insertAdjacentHTML('afterbegin', createMarkup(cars));

carForm.addEventListener('submit', handlerSubmitForm);

function handlerSubmitForm(evt) {
  evt.preventDefault();
  const { query, type } = evt.currentTarget.elements;
  const key = type.value;
  const inputValue = query.value;

  const searchCars = cars.filter(el => {
    console.log(`el[key] - ${el[key]}`, `inputValue - ${inputValue}`);
    return el[key].toLowerCase() === inputValue.toLowerCase();
  });
  carList.innerHTML = createMarkup(searchCars);
}
