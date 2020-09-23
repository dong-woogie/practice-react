import * as postsAPI from "../api/posts";
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById,
} from "../utils/asyncUtils";
import { takeLatest, getContext, takeEvery, select } from "redux-saga/effects";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const GO_TO_HOME = "GO_TO_HOME";
const PRINT_STATE = "PRINT_STATE";
//redux-thunk를 사용할 때
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

//redux-thunk로 history api 사용하기
// export const goToHome = () => (dispatch, getState, { history }) => {
//   history.push("/");
// };

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, meta: id, payload: id });
export const goToHome = () => ({ type: GO_TO_HOME });
export const printState = () => ({ type: PRINT_STATE });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

function* goToHomeSage() {
  const history = yield getContext("history");
  history.push("/");
}
function* printStateSaga() {
  const postsState = yield select((state) => state.posts);
  console.log(postsState);
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsSaga);
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GO_TO_HOME, goToHomeSage);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    default:
      return state;
  }
}
