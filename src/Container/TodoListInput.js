import TodoListInput from "../Component/TodoListInput";
import { connect } from 'react-redux';

function mapReduxDispatchToReactProps(dispatch) {
    return {
        //할일을 입력하면 작동하는 이벤트.
        onClickInput: function (Title) {
            dispatch({ type: 'InputData', Title: Title });
        }
    }
}

//react-redux의 connect 함수를 사용하여 래핑 컴포넌트를 만듦.
export default connect(null, mapReduxDispatchToReactProps)(TodoListInput);