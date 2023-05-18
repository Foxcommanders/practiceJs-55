//=====================================================
// Напишіть цикл for, який виконуватиме ітерацію від 0 до 15. Для кожної ітерації він перевірятиме, парне чи непарне поточне число, і виводитиме повідомлення на екран.

// for (let i = 0; i < 15; i += 1){
//     if (i % 2 === 0) {
//         console.log(i, "парне");
//     }
//     else{
//         console.log(i, "непарне");
//     }
// }

// for (let i = 0; i <= 15; i += 1){
//     switch (i % 2) {
//         case 0:
//             console.log(i, "парне");
//             break;
//         default:
//            console.log(i, "непарне");
//     }
// }

// for (let i = 0; i < 15; i += 1){
//     i % 2 === 0 ? console.log(i, "парне"): console.log(i, "непарне");
// }

// for (let i = 0; i < 15; i += 1){
//     console.log(i, i % 2 === 0 ? "парне": "непарне");
// }

//=====================================================

// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// let message = prompt();
// if (typeof message === 'string') {
//   //console.log(typeof message);
//   message = message.toLowerCase();
// }
// switch (message) {
//   case 'green':
//     console.log('GO');
//     break;
//   case 'yellow':
//     console.log('READY');
//     break;
//   case 'red':
//     console.log('STOP');
//     break;
//   default:
//     console.log('BE CAREFUL');
//     break;
// }

// //console.log(message);

//=====================================================

// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {
//   // step 1
//   const daySpeed = 7;
//   const naghtSpeed = 2;
//   let days = 0;
//   let total = 0;
//   while (total < depth) {
//     days += 1;
//     total += daySpeed;
//     if (total < depth) {
//       total -= naghtSpeed;
//     }
//   }
//   console.log(days);
// }
// calcDays(42); //виповзе за 8 днів
// calcDays(17); //виповзе за 3 дні
// calcDays(18); //виповзе за 4 дні

//=====================================================

// Просумувати всі елемнти рядку, якщо їх можливо привести до числа
//const str = '357g235';

const str = '357g235';
let TotalElements = 0;

for (i = 0; i < str.length; i += 1) {
  const num = Number(str[i]);

  if (!isNaN(num)) {
    TotalElements += num;
  }
}
console.log(TotalElements);
