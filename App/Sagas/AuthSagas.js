import { call, put, takeLatest } from 'redux-saga/effects';

import AuthApi from '../Services/AuthApi';
import LoginActions, { LoginTypes } from '../Redux/LoginRedux';

const authApi = AuthApi.create();

function* login(credentials) {
  try {
    const response = yield authApi.login(credentials);
    console.log('response', response);
    if (response.ok) {
      yield put({
        type: LoginTypes.LOGIN_SUCCESS,
        response,
      });
    } else {
      yield put({
        type: LoginTypes.LOGIN_FAILURE,
        error: response.data,
      });
    }
  } catch (error) {
    console.log('error', error);
    yield put({
      type: LoginTypes.LOGIN_FAILURE,
      error,
    });
  }
}

export function* authSagas() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, login);
}
