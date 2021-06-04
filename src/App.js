import React, { Component } from "react";
import "./App.css";
import { GrSearch } from "react-icons/gr";
import getWeatherData from "./Services/Service";
//import axios from 'axios'

//const ownKey='672881e9685e55ca9ad62a56d6e2d51b';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "noida",
      cName: "",
      windSpeed: "",
      main: "",
      description: "",
      icon: "",
      feels_like: "",
      grnd_level: "",
      humidity: "",
      pressure: "",
      sea_level: "",
      temp: "",
      temp_max: "",
      temp_min: "",
    };
  }

  handleCityName = (e) => {
    //console.log(e.target.value);
    this.setState({
      cityName: e.target.value,
    });
  };

  handleSearch = (e) => {
    getWeatherData(this.state.cityName, (data) => {
      //console.log("hmm",data);
      this.setState({
        cName: data.name,
        country: data.sys.country,
        windSpeed: data.wind.speed,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feels_like: data.main.feels_like,
        grnd_level: data.main.grnd_level,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sea_level: data.main.sea_level,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
      });

      this.setState({ cityName: "" });
      //console.log(this.state)
    });
  };
  componentWillMount() {
    getWeatherData(this.state.cityName, (data) => {
      //console.log("hmm",data);
      this.setState({
        cName: data.name,
        country: data.sys.country,
        windSpeed: data.wind.speed,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feels_like: data.main.feels_like,
        grnd_level: data.main.grnd_level,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sea_level: data.main.sea_level,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
      });

      this.setState({ cityName: "" });
      //console.log(this.state)
    });
  }
  render() {
    let url = `http://openweathermap.org/img/w/` + this.state.icon + `.png`;
    return (
      <>
        <div className="header_container">
          <h1>Weather App</h1>
        </div>
        <div className="city_container">
          <h1>Weather</h1>
          <div className="inp-container">
            <input
              type="text"
              placeholder="Enter City Name"
              value={this.state.cityName}
              onChange={this.handleCityName}
            />
            <GrSearch onClick={this.handleSearch} />
          </div>
          <div className="city-cont">
            {this.state.cName + " " + this.state.country}
          </div>
          <img src={url} alt="weather-icon" />

          <p className="temperature">
            {this.state.temp}
            <sup>o</sup>C
          </p>
          <hr></hr>
          <span className="min-max-temp   temperature">
            {this.state.temp_min}
            <sup>o</sup>C{" "}
          </span>
          <span className="min-max-temp temperature">
            {" "}
            {this.state.temp_max} <sup>o</sup>C{" "}
          </span>
          <p className="temp-description">{this.state.description}</p>
        </div>
      </>
    );
  }
}
