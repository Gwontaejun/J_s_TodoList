import { Button, ButtonGroup } from '@material-ui/core';
import { Check, History } from '@material-ui/icons';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { React, Component } from 'react';

class TodoListOutput extends Component {
  render() {
    return (
      <div className={"TodoListOutput"}>
        <h1 style={{ width: "100%", textAlign: "center", margin: "2%" }}>할일 리스트</h1>
        <div style={{ height: "40%", overflowY: "auto" }}>
          {this.props.TodoList.map((data, index) => {
            return (
              <div key={index} className={"ListStyle"}>
                <h2 style={{ margin: 0, width: "80%" }}>{index + 1}.{data}</h2>
                <div style={{ display: "flex", width: "20%", justifyContent: "flex-end" }}>
                  <button className={"ButtonStyle"} style={{ background: "#00be00", marginRight: "1%" }} onClick={(() => {
                    this.props.onClickFinish(data);
                  })}><Check /></button>
                  <button className={"ButtonStyle"} style={{ background: "#dc0000" }} onClick={(() => {
                    this.props.onClickDelete(data);
                  })}><DeleteForever /></button>
                </div>
              </div>
            )
          })}
        </div>
        <h1 style={{ width: "100%", textAlign: "center", margin: "2%" }}>완료 리스트</h1>
        <div style={{ height: "40%", overflowY: "auto" }}>
          {this.props.FinishList.map((data, index) => {
            return (
              <div key={index} className={"ListStyle"}>
                <h2 style={{ margin: 0, width: "80%" }}>{index + 1}.{data}</h2>
                <div style={{ display: "flex", width: "20%", justifyContent: "flex-end" }}>
                  <button className={"ButtonStyle"} style={{ background: "#00be00", marginRight: "1%" }} onClick={(() => {
                    this.props.onClickFinishDataRollback(data);
                  })}><History /></button>
                  <button className={"ButtonStyle"} style={{ background: "#dc0000" }} onClick={(() => {
                    this.props.onClickFinishDataDelete(data);
                  })}><DeleteForever /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TodoListOutput;
