import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  loginFailure: ['error'],
});

export const LoginTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  email: null,
  errors: null,
  fetching: false,
});

export const request = state => state.merge({ fetching: true });

export const success = (state, response) => {
  console.log('success', response);
  return state;
};

export const failure = (state, response) => {
  const { data } = response;
  return state.merge({ fetching: false, errors: data });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
});
