import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

function reducer(state, action) {
    if (state === undefined) {
        return { TodoList: [], FinishList: [] }
    }

    //데이터 입력시 실행. TodoList의 배열에 Title을 concat으로 붙여줌.
    if (action.type === "InputData") {
        //데이터 입력시 TodoList에 이미 같은값이 있으면 alert을 띄워줌.
        if (state.TodoList.indexOf(action.Title) == -1) {
            return { ...state, TodoList: state.TodoList.concat(action.Title) }
        } else alert("해당값이 리스트에 있습니다.");
    }

    //데이터 삭제버튼 클릭시 실행. TodoList의 배열을 filter함수를 사용하여 해당 Title의 값을 걸러내어 state에 붙여줌.
    if (action.type === "DeleteData") {
        return { ...state, TodoList: state.TodoList.filter(Title => Title !== action.Title) }
    }

    //데이터 체크버튼 클릭시 실행. FinishData의 배열에 Title을 concat으로 붙여줌과 동시에 TodoList에 Title의 값을 filter로 걸러내어서 state에 붙여줌.
    if (action.type === "FinishData") {
        return { ...state, FinishList: state.FinishList.concat(action.Title), TodoList: state.TodoList.filter(Title => Title !== action.Title) }
    }

    //데이터 체크항목의 롤백버튼을 클릭시 실행. FinishData의 배열을 filter함수를 사용하여 해당 Title의 값을 걸러내어 state에 붙여주며 TodoList에 값을 넣어줌.
    if (action.type === "FinishDataRollback") {
        return { ...state, TodoList: state.TodoList.concat(action.Title), FinishList: state.FinishList.filter(Title => Title !== action.Title) }
    }

    //데이터 체크항목의 삭제버튼을 클릭시 실행. FinishData의 배열을 filter함수를 사용하여 해당 Title의 값을 걸러내어 state에 붙여줌.
    if (action.type === "FinishDataDelete") {
        return { ...state, FinishList: state.FinishList.filter(Title => Title !== action.Title) }
    }

    return state;
}


export default persistReducer(persistConfig, reducer);