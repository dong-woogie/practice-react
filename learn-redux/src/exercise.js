import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case DECREASE: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case CHANGE_TEXT: {
      return {
        ...state,
        text: action.text,
      };
    }
    case ADD_TO_LIST: {
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    }
    // default:
    //   throw new Error(`Unhandled action type ${action.type}`);
    default:
      return state;
  }
};

const store = createStore(reducer);

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: CHANGE_TEXT, text: "하이우기?" });
store.dispatch({ type: ADD_TO_LIST, item: { id: 2, value: "ㅎㅎ" } });

window.store = store;
