import { createStore } from "redux";

// 초기상태
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션
const increase = () => ({
  type: "INCREASE",
});

const decrease = () => ({
  type: "DECREASE",
});

const changeText = (text) => ({
  type: "CHANGE_TEXT",
  text,
});

const addToList = (item) => ({
  type: "ADD_TO_LIST",
  item,
});

// 리듀서
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "ADD_TO_LIST":
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);
console.log(store.getState());

// 디스패치
store.dispatch(increase());
console.log(store.getState());

store.dispatch(decrease());
console.log(store.getState());

store.dispatch(changeText("안녕하세요"));
console.log(store.getState());

store.dispatch(addToList({ id: 1, text: "와우" }));
console.log(store.getState());
