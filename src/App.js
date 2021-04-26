import React, { Component } from 'react';
import TodoListinput from './Container/TodoListInput';
import TodoListOutput from './Container/TodoListOutput';
import Rain from './Image/Rain.mp4';
import Snow from './Image/Snowfall.mp4';
import Sunny from './Image/Sunny.mp4';
import Clouds from './Image/Clouds.mp4';
import './Style/Component.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: new Date(),
      Hours: new Date().getHours(),
      Minutes: new Date().getMinutes(),
      Seconds: new Date().getSeconds(),
      WeatherVideo: '',
      WeatherTemp: '',
      WeatherIcon: '',
      CityName: ''
    }
  }

  componentWillMount() {
    this.TimeSetting();
  }

  componentDidMount() {
    this.weatherSetting();
    this.Interval = setInterval(() => {
      this.TimeSetting();
    }, 1000);
  }

  weatherSetting = () => {
    // 본래 아래의 코드로 위치정보를 가져온 후 날씨 API에 넣어서 현재위치의 날씨를 보여주려했지만
    // 무슨이유에서인지 날씨 API가 q=... 부분을 제거하면 400에러가 남.
    var latitude;
    var longitude;
    function location(pos) {
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;
    }
    navigator.geolocation.getCurrentPosition(location);
    setTimeout(() => {
      const apiKey = '603256df3e8c6937e084b42b21843524';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(url)
        .then(res => {
          const data = res.data;
          this.setState({ WeatherTemp: data.main.temp, WeatherIcon: data.weather[0].icon, CityName: data.name });
          switch (data.weather[0].main) {
            case "Clear":
              this.setState({ WeatherVideo: Sunny });
              break;
            case "Clouds":
              this.setState({ WeatherVideo: Clouds });
              break;
            case "Rain":
              this.setState({ WeatherVideo: Rain });
              break;
            case "Snow":
              this.setState({ WeatherVideo: Snow });
              break;
            default: break;
          }
        })
    }, 100);
  }

  componentWillUnmount() { //종료되면 반복하는것도 클리어시키기
    clearInterval(this.Interval)
  }

  TimeSetting = () => {
    let Hours = new Date().getHours() + "";
    let Minutes = new Date().getMinutes() + "";
    let Seconds = new Date().getSeconds() + "";

    if (Hours.length === 1) {
      Hours = "0" + Hours;
    }
    if (Minutes.length === 1) {
      Minutes = "0" + Minutes;
    }
    if (Seconds.length === 1) {
      Seconds = "0" + Seconds;
    }
    this.setState({ Hours: Hours, Minutes: Minutes, Seconds: Seconds });
  }

  render() {
    return (
      <div className={"App"} style={{ overflowY: "hidden" }}>
        <video src={this.state.WeatherVideo} autoPlay muted loop style={{ position: 'fixed', zIndex: -1, width: "1700px" }}>
        </video>
        <div className={"Main"}>
          <div className={"Main_Head"}>
            <h1 className={"Main_Weather"}>
              <span style={{ textAlign: "right" }}>{this.state.CityName}</span><img alt="" style={{ width: "5%", height: "5%" }} src={'https://openweathermap.org/img/wn/' + this.state.WeatherIcon + '@2x.png'} /><span>{this.state.WeatherTemp}°C</span>
            </h1>
            <h1 className={"Main_Title"}>
              {this.state.Hours}:{this.state.Minutes}:{this.state.Seconds}
            </h1>
          </div>
          <div className={"Main_Body"}>
            <TodoListinput />
            <TodoListOutput />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
