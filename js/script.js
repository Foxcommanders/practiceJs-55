const elements = {
  weekDay: document.querySelector('.date-day'),
  monthDay: document.querySelector('.date'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  clock: document.querySelector('.digital-clock'),
  arrowSeconds: document.querySelector('.clock-seconds__arrow'),
  arrowMin: document.querySelector('.clock-minutes__arrow'),
  arrowHour: document.querySelector('.clock-hours__arrow'),
};

const namesOfDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'Пятниця',
  'Субота',
];

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

setInterval(() => {
  const date = new Date();
  const todayDate = date.getDate();
  const currday = date.getDay();
  const currMonth = date.getMonth();
  const currentYear = date.getFullYear();

  elements.weekDay.textContent = namesOfDay[currday];
  elements.monthDay.textContent = todayDate;
  elements.month.textContent = namesOfMonth[currMonth];
  elements.year.textContent = currentYear;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const clock = `${hours.toString().padStart(2, '0')} : ${minutes
    .toString()
    .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

  elements.clock.textContent = clock;

  const secondDeg = (360 / 60) * seconds;
  elements.arrowSeconds.style.transform = `rotate(${secondDeg}deg)`;

  const minutDeg = (360 / 60) * minutes;
  elements.arrowMin.style.transform = `rotate(${minutDeg}deg)`;

  const hoursDeg = (360 / 12) * hours + minutes * 0.33;
  elements.arrowHour.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
