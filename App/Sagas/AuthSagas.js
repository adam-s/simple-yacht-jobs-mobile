import { call, put, takeLatest } from 'redux-saga/effects';

import AuthApi from '../Services/AuthApi';
import LoginActions, { LoginTypes } from '../Redux/LoginRedux';

const authApi = AuthApi.create();

function* login(credentials) {
  try {
    const response = yield authApi.login(credentials);
    yield put({
      type: LoginTypes.LOGIN_SUCCESS,
      response,
    });
  } catch (error) {
    yield put({
      type: LoginTypes.LOGIN_ERROR,
      error,
    });
  }
}

export function* authSagas() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, login);
}
