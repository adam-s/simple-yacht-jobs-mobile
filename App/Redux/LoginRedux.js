import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  loginFailure: ['error'],
  loginClearRequestErrors: null,
});

export const LoginTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  email: null,
  requestErrors: {},
  fetching: false,
});

export const request = state => state.merge({ fetching: true });

export const success = (state, response) => {
  console.log('success', response);
  return state;
};

export const failure = (state, { error }) => {
  return state.merge({ fetching: false, requestErrors: error });
};

export const clearRequestErrors = state => state.merge({ requestErrors: {} });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGIN_CLEAR_REQUEST_ERRORS]: clearRequestErrors,
});
