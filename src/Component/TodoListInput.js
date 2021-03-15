import { Button, InputBase } from '@material-ui/core';
import { React, Component } from 'react';

class TodoListinput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
    }
  }

  handleChange = (e) => { //input에 값 입력시 작동하는 이벤트 state의 값을 바꿔줌.
    this.setState({ Title: e.target.value });
  }

  render() {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", height: "10%" }}>
        <input className={"InputTextStyle"} value={this.state.Title} onChange={this.handleChange} placeholder={"할일을 입력해주세요."}
          onKeyPress={(ev) => { //엔터 입력시 작동하는 이벤트
            if (ev.key === 'Enter') {
              if (this.state.Title.replace(/ /g, "").length !== 0) {
                this.props.onClickInput(this.state.Title);
                this.setState({ Title: "" });
              } else alert("빈값은 입력하실수 없습니다.");
              ev.preventDefault();
            }
          }} />
      </div>
    )
  }
}

export default TodoListinput;
