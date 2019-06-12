import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { ADD_DATA_SAGA } from './actionTypes';
import { initData } from './actionCreators';

function* addDataSaga () {
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/mock');
    const action = initData(res.data.array);
    yield put(action);
  } catch (error) {
    alert(error)
  }
};

// es6 generator函数
function* Sagas() {
  yield takeEvery(ADD_DATA_SAGA, addDataSaga);
}

export default Sagas;