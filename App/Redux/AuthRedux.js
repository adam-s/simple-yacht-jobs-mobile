import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';
import idx from 'idx';

const ROLE_ADMINISTRATOR = 'administrator';
const ROLE_AUTHENTICATED = 'authenticated';

const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
  authClearRequestErrors: null,
  authLogout: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  user: {},
  requestErrors: {},
  fetching: false,
});

export const request = (state) => {
  return state.merge({ fetching: true });
};

export const success = (state, { user }) => {
  return state.merge({ user, requestErrors: {}, fetching: false });
};

export const failure = (state, { error }) => {
  return state.merge({ fetching: false, requestErrors: error });
};

export const clearRequestErrors = state => state.merge({ requestErrors: {} });

export const logout = state => state.merge({ user: null });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.AUTH_CLEAR_REQUEST_ERRORS]: clearRequestErrors,
  [Types.AUTH_LOGOUT]: logout,
});

// Selectors
export const userRoles = state => state.auth && state.auth.user && state.auth.user.roles;

export const isAuthenticated = createSelector(
  userRoles,
  (roles) => {
    return Array.isArray(roles) && roles.includes(ROLE_AUTHENTICATED);
  },
);

export const isAdmin = createSelector(
  userRoles,
  roles => roles.includes(ROLE_ADMINISTRATOR),
);
