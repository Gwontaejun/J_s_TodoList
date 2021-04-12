import React, { useState } from 'react';

/* 함수형 컴포넌트 형식 (Hooks) */
const TodoListinput = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => { //input에 값 입력시 작동하는 이벤트 state의 값을 바꿔줌.
    setTitle(e.target.value);
  }

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", height: "10%" }}>
      <input className={"InputTextStyle"} name="Title" value={title} onChange={handleChange} placeholder={"할일을 입력해주세요."}
        onKeyPress={(ev) => { //엔터 입력시 작동하는 이벤트
          if (ev.key === 'Enter') {
            if (title.replace(/ /g, "").length !== 0) {
              props.onClickInput(title);
              setTitle("");
            } else alert("빈값은 입력하실수 없습니다.");
            ev.preventDefault();
          }
        }} />
    </div>
  )
}


/* 클래스형 컴포넌트 형식 */
// class TodoListinput extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Title: "",
//     }
//   }

//   handleChange = (e) => { //input에 값 입력시 작동하는 이벤트 state의 값을 바꿔줌.
//     this.setState({ Title: e.target.value });
//   }

//   render() {
//     return (
//       <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", height: "10%" }}>
//         <input className={"InputTextStyle"} value={this.state.Title} onChange={this.handleChange} placeholder={"할일을 입력해주세요."}
//           onKeyPress={(ev) => { //엔터 입력시 작동하는 이벤트
//             if (ev.key === 'Enter') {
//               if (this.state.Title.replace(/ /g, "").length !== 0) {
//                 this.props.onClickInput(this.state.Title);
//                 this.setState({ Title: "" });
//               } else alert("빈값은 입력하실수 없습니다.");
//               ev.preventDefault();
//             }
//           }} />
//       </div>
//     )
//   }
// }

export default TodoListinput;
