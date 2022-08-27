const d = document;

const weatherApi = () => {
  const freshDate = () => {
    let result = "";
    let d = new Date();
    result += d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();
    return result;
  };

  const freshTime = () => {
    let result = "";
    let d = new Date();
    result = d.getHours();
    return result;
  };

  const $weatherDay = d.querySelector(".weather-day");
  const $weatherSchedule = d.querySelector(".weather-schedule");
  const $template = d.getElementById("template-weather").content;
  const $fragment = d.createDocumentFragment();

  const lat = -24.183467;
  const lon = -65.331201;
  const apiKey = "6dfaa2f5425bfc7e35bb7ee4678907bc";

  const $weatherTemperature = d.getElementById("weather-temperature");
  const $weatherMode = d.getElementById("weather-mode");

  const descriptionWeather = [
    {
      description: "cielo claro",
      icon: "☀️",
    },
    {
      description: "algo de nubes",
      icon: "⛅",
    },
    {
      description: "muy nuboso",
      icon: "☁️",
    },
  ];

  const today = new Date();

  $weatherDay.textContent = today.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  });

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=es&appid=${apiKey}&units=metric`
  )
    .then((data) => data.json())
    .then((res) => {
      const found = res.list.find(
        (el) =>
          el.dt_txt.slice(0, 10) === freshDate() &&
          freshTime() < Number(el.dt_txt.slice(11, 13))
      );

      $weatherTemperature.textContent = `${Math.round(found.main.temp)} °C`;
      $weatherMode.textContent = `${found.weather[0].description}`;

      const weatherDay = res.list.filter(
        (el) => el.dt_txt.slice(0, 10) === freshDate()
      );

      const findIcon = (description) => {
        const found = descriptionWeather.find(
          (el) => el.description === description
        );
        return found.icon;
      };

      weatherDay.forEach((item) => {
        $template.querySelector(".gap-temperature").textContent = `${Math.round(
          item.main.temp
        )} °C`;
        $template.querySelector(".gap-icon").textContent = findIcon(
          item.weather[0].description
        );
        $template.querySelector(".gap-time").textContent = item.dt_txt.slice(
          11,
          16
        );
        $template.querySelector(".gap-meridiem").textContent =
          Number(item.dt_txt.slice(11, 13)) < 12 ? "AM" : "PM";
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $weatherSchedule.appendChild($fragment);
    })
    .catch((error) => console.log(error));
};

export default weatherApi;
