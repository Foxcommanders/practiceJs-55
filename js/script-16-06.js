const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
const refs = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};
function serviceWeather(city, days) {
  return fetch(
    `${BASE_URL}?key=d80992e81a97459aaa4113001231606&q=${city}&days=${days}&lang=uk`,
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
refs.form.addEventListener('submit', handlerWeather);
function handlerWeather(evt) {
  evt.preventDefault();
  const userCity = evt.currentTarget.elements.city.value;
  const userDays = evt.currentTarget.elements.days.value;
  serviceWeather(userCity, userDays)
    .then(data => {
      refs.container.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch(error => console.log(error));
}
function createMarkup(array) {
  return array
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) =>
        `<li>
    <img src="${icon}" alt="${text}">
    <h3>${date}</h3>
    <h3>${text}</h3>
    <h3>${avgtemp_c}</h3>
</li>`,
    )
    .join('');
}
