import { call, put, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import AuthApi from '../Services/AuthApi';
import AuthActions, { AuthTypes } from '../Redux/AuthRedux';

const authApi = AuthApi.create();

function* login({ payload }) {
  try {
    const response = yield authApi.login(payload);
    if (response.ok) {
      yield put({
        type: AuthTypes.LOGIN_SUCCESS,
        user: response.data,
      });
      // Have an action to redirect after login
      yield put(NavigationActions.navigate({ routeName: 'Profile' }));
    } else {
      yield put({
        type: AuthTypes.LOGIN_FAILURE,
        error: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: AuthTypes.LOGIN_FAILURE,
      error,
    });
  }
}

export function* authSagas() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, login);
}
