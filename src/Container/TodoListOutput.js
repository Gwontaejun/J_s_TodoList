import TodoListOutput from "../Component/TodoListOutput";
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        //TodoList, FinishList props로 store의 TodoList 및 FinishList값을 넣어줌.
        TodoList: state.TodoList,
        FinishList: state.FinishList
    }
}
function mapReduxDispatchToReactProps(dispatch) {
    return {
        //할일 리스트의 삭제버튼 클릭 이벤트
        onClickDelete: function (Title) {
            dispatch({ type: 'DeleteData', Title: Title });
        },
        //할일 리스트의 완료버튼 클릭 이벤트
        onClickFinish: function (Title) {
            dispatch({ type: 'FinishData', Title: Title });
        },
        //완료 리스트의 롤백버튼 클릭 이벤트
        onClickFinishDataRollback: function (Title) {
            dispatch({ type: 'FinishDataRollback', Title: Title })
        },
        //완료 리스트의 삭제버튼 클릭 이벤트
        onClickFinishDataDelete: function (Title) {
            dispatch({ type: 'FinishDataDelete', Title: Title })
        }
    }
}

//react-redux의 connect 함수를 사용하여 래핑 컴포넌트를 만듦.
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TodoListOutput);