import { delay, put, takeLatest, takeLeading } from "redux-saga/effects";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeLatest(INCREASE_ASYNC, increaseSaga); //맨 마지막 동작만 실행됨
  yield takeLeading(DECREASE_ASYNC, decreaseSaga); //맨 처음 동작만 실행됨
}

// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE: {
      return state + 1;
    }
    case DECREASE: {
      return state - 1;
    }
    default:
      return state;
  }
}
