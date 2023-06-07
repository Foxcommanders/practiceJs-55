// ====================================================================
//const instruments = [{
//   id: 1,
//   img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg',
//   name: 'Молоток',
//   price: 150
// }, {
//   id: 2,
//   img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
//   name: 'Перфоратор',
//   price: 3000
// }, {
//   id: 3,
//   img: 'https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg',
//   name: 'Рівень',
//   price: 2000
// }]

// //відмалювати картки з продуктами, до кожної картки додати кнопку купити.
// //Після кліку по картці відобразити (об'єкт в масив) куплені товари/

// const newInstruments = instruments.map(({id, img, name, price})=>{
//   return `<li data-id="${id}" >
//   <img src="${img}" alt="${name}" width = "300">
//   <p>${name}</p>
//   <span>${price}</span>
//   <button type="button" class="buy-btn">Buy</button>
// </li>`
// }).join('');

// const ulCardList = document.querySelector('.card-list');

// ulCardList.insertAdjacentHTML('afterbegin', newInstruments);
// ulCardList.addEventListener('click', handlerCardListClick);

// const basket = [];

// function handlerCardListClick(evt){
//   //console.log(evt.target.value);
//   //console.log(evt.target.classList.contains('buy-btn'));
//   if(!evt.target.classList.contains('buy-btn')) {
//     return
//   };
//   //console.log(evt.target.closest('li'));
//   const eventCurrentLi =  evt.target.closest('li');
//   //console.dir(eventCurrentLi);
//   const productId = eventCurrentLi.dataset.id
//   //console.log(productId);
//   const idCard = instruments.find(({id})=>{
//     return id ===Number(productId);
//  })
//  basket.push(idCard);
//   //console.log(idCard);
//   console.log(basket);
// }

// //console.log(newInstruments);

// // 1. Перебрати даний масив.
// // 2. На кожній ітерації створити шаблон однієї картки.
// // 3. Об'єднати у єдиний рядок.
// // 4. Створити контейнер у HTML (ul).
// // 5. Отримати даний контейнер у js файлі, звертання за класом.
// // 6. Додати у контейнер нашу розмітку.
// // 6.1. li
// // 6.1.1 додати data атрибут id
// // 6.2. img
// // 6.3  p
// // 6.4 span
// // 6.7 button купити (додати клас)
// // 6.8 Додаємо прослуховувач події (по кліку) на контейнер та реалізуємо делегування подій при умові співпадіння класу і події
// // 6.9 Витягнути ідентифікатор з кнопки, по якій клікнули.
// // 6.10 Співставити ідентифікатор кнопки з об'єктом початквого масиву
// //  та перемістити цей об'єкт до нового масиву(передцим створити загатовку даного масиву).
// // 6.11 показати масив (вивести у консолі)
