import axios from "axios";
const ownKey = "672881e9685e55ca9ad62a56d6e2d51b";

let getWeatherData = async (cityName, callBack) => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric&appid=" +
    ownKey;

  try {
    const res = await axios(url);
    if (res.status === 200 && res.statusText === "OK") {
      //console.log(res)
      callBack(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getWeatherData;
/*http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=672881e9685e55ca9ad62a56d6e2d51b        */
