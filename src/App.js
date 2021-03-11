import { React, Component } from 'react';
import TodoListinput from './Container/TodoListInput';
import TodoListOutput from './Container/TodoListOutput';
import './Style/Component.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: new Date(),
      Hours: new Date().getHours(),
      Minutes: new Date().getMinutes(),
      Seconds: new Date().getSeconds(),
    }

    this.TimeSetting = this.TimeSetting.bind(this);
  }

  componentWillMount() {
    this.TimeSetting();
  }

  componentDidMount() {
    this.Interval = setInterval(() => {
      this.TimeSetting();
    }, 1000);
  }

  componentWillUnmount(){ //종료되면 반복하는것도 클리어시키기
    clearInterval(this.Interval)
  }

  TimeSetting() {
    let Hours = new Date().getHours() + "";
    let Minutes = new Date().getMinutes() + "";
    let Seconds = new Date().getSeconds() + "";

    console.log(Seconds);
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
      <div className={"App"}>
        <div className={"Main"}>
          <div className={"Main_Head"}>
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
