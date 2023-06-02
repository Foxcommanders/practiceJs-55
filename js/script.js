// ====================================================================
// Потрібно створити картки продуктів
const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg',
    name: 'Молоток',
    price: 150,
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
    name: 'Перфоратор',
    price: 3000,
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg',
    name: 'Рівень',
    price: 2000,
  },
];

const listContainer = document.querySelector('.js-list');
console.log(listContainer);

const markUp = instruments.map(el => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const span = document.createElement('span');
  const title = document.createElement('h2');

  img.src = el.img;
  img.alt = el.name;
  img.width = 300;
  span.textContent = el.price;
  title.textContent = el.name;

  li.append(img, title, span);

  return li;
});

listContainer.append(...markUp);

// ====================================================================

const listContainer = document.querySelector('.js-list');
const markup = instruments
  .map(
    ({ img, name, price }) =>
      `<li>
        <img src="${img}" alt="${name}" width="300">
        <h2>${name}</h2>
        <span>${price}</span>
    </li>`,
  )
  .join('');
console.log(markup);
listContainer.insertAdjacentHTML('afterbegin', markup);

// ====================================================================

//const listContainer = document.querySelector('.js-list')
// listContainer.style.display = "flex";
// listContainer.style.listStyle = "none"

//listContainer.classList.add("list")
//listContainer.classList.remove("list")

// listContainer.classList.toggle("list")
// listContainer.classList.toggle("list")

// const markUp = instruments.map((el) => {

//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     const span = document.createElement('span')
//     const title = document.createElement('h2')

//     img.src = el.img
//     img.alt = el.name
//     img.width = 300
//     span.textContent = el.price
//     title.textContent = el.name

//     li.classList.add("item", "item-style")
//     span.classList.add("text")
//     title.classList.add("title")

//     li.append(img, title, span)

//     return li
// })

// listContainer.append(...markUp)

const listContainer = document.querySelector('.js-list');
const markup = instruments
  .map(
    ({ img, name, price }) =>
      `<li class="item item-style">
        <img src="${img}" alt="${name}" width="300">
        <h2 class="text">${name}</h2>
        <span class="title">${price}</span>
    </li>`,
  )
  .join('');
console.log(markup);
listContainer.insertAdjacentHTML('afterbegin', markup);
