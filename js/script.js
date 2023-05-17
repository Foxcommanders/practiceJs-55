//=====================================================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
// const totalMinutes = 1441;
// const hour = Math.floor(totalMinutes / 60);
// console.log(hour);
// const minutes = totalMinutes % 60;
// console.log(typeof minutes.toString());
// const result = `${hour.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")}`;
// console.log(result);

//=====================================================
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// const weight = '88,3';
// const height = '1.75';
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// const formatWeight = Number(weight.replace(",","."));
// const formatHeight = Number(height.replace(",","."));
// console.log(formatWeight)
// console.log(formatHeight)
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow?retiredLocale=uk
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// const BMI = Number((formatWeight / Math.pow(formatHeight,2)).toFixed(1));
// console.log(BMI)

//=====================================================
// // Напишіть скрипт, який буде обрізати рядок до 25 символа і додавати у кінець три крапки.
// // Працюй з наступними рядками попорядку:

// // "Vestibulum facilisis purus nec"
// // "Nunc sed turpis a felis in nunc fringilla"
// const str = "Vestibulum facilisis purus nec";
// //console.log(str.length);
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// //console.log(str.slice(0, 24) + "...");
// const formatStr = str.slice(0, 24) + "...";
// //console.log(formatStr.length);
// console.log(formatStr);

//=====================================================
// Є деякі рядки, які потрібно перевірити на вміст забороненого слова sale, і повернути результат перевірки. Слова в рядку можуть бути у довільному регістрі, наприклад sAlE. Якщо знайшли заборонене слово spam то повертайте true. Якщо в рядку відсутнє заборонене слово, повертайте false.
// Попорядку перевіряйте наступні рядки:

// "Latest technology news" - false
// "Get best sale offers now!" - true
// "Get best sale offers now!" - true

// const frase = "Latest technology news";
// const frase1 = "Get best sale offers now!";
// const frase2 = "Get best sale offers now!";

// const formatFrace = frase.toLowerCase();
// console.log(formatFrace);
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// const result = formatFrace.includes("sale");
// console.log(result);

const frase = "Latest technology news";
const frase1 = "Get best sale offers now!";
const frase2 = "Get best sale offers now!";

const result = frase2.toLowerCase().includes('sale');
console.log(result);