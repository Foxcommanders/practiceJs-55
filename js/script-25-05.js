//====================== 41-v3
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (name === potionName) {
//         potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

//======================

// // Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// // Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// // а ті обє'кти в яких айді співпав видалити з масиву.
// // (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
//     id: 'apple',
//     qty: 1,
//   },
//   {
//     id: 'lemon',
//     qty: 2,
//   },
//   {
//     id: 'banana',
//     qty: 3,
//   },
//   {
//     id: 'apple',
//     qty: 6,
//   },
//   {
//     id: 'apple',
//     qty: 8,
//   },
//   {
//     id: 'lemon',
//     qty: 19,
//   },
//   {
//     id: 'pineapple',
//     qty: 1,
//   },
// ];

// function getUnic(products) {
//   for (let i = 0; i < products.length; i += 1) {
//     for (let j = products.length - 1; j > i; j -= 1) {
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//       }
//     }
//   }
// }
// getUnic(products);
// console.log(products);

// // function getUnic(products) {
// //     for (let i = 0; i < products.length; i++) {

// //         for (let j = i + 1; j < products.length; j++) {
// //             // console.log("Наступний", products[j]);
// //             if (products[i].id === products[j].id) {
// //                 products[i].qty += products[j].qty
// //                 // console.log("продукти які співпали", products[j]);
// //                 products.splice(j, 1)
// //                 j -= 1
// //             }
// //         }
// //         // console.log("поточний", products[i]);
// //     }

// // }

// // const products2 = [{
// //     id: 'sku1',
// //     qty: 1,
// // }, {
// //     id: 'sku2',
// //     qty: 2,
// // }, {
// //     id: 'sku3',
// //     qty: 3,
// // }, {
// //     id: 'sku1',
// //     qty: 6,
// // }, {
// //     id: 'sku1',
// //     qty: 8,
// // }, {
// //     id: 'sku2',
// //     qty: 19,
// // }, {
// //     id: 'sku4',
// //     qty: 1,
// // }]

// // getUnic(products2);
// // console.log(products2);

//======================

// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}
// function fn(buyers, cases) {
//   const obj = {};
//   for (let i = 1; i <= cases; i += 1) {
//     obj[i] = 0;
//   }
//   for (const buyer of buyers) {
//     const values = Object.values(obj);
//     const min = Math.min(...values);
//     const idx = values.indexOf(min) + 1; //компенсація індексу до каси 0:1
//     obj[idx] += buyer;
//   }
//   return obj;
// }
// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));

//======================

// // Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість раз яку вона дублюється буде значенням ключа
// // const str = 'absdabsrgbadgtdswwbetflg';
// // Результат на який очікуємо
// // const obj = {
// //     a: 3,
// //     b: 4,
// //     s: 2,
// //     // ...
// // }
