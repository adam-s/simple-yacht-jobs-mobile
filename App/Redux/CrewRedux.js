import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  crewIndexRequest: null,
  crewIndexSuccess: ['crew'],
  crewIndexFailure: ['error']
});

export const CrewTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  records: [],
  metadata: {},
  error: null,
  fetching: false
});

// Reducers
export const crewIndexRequest = (state) => state.merge({ fetching: true });

export const crewIndexSuccess = (state, { records, metadata }) => {
  return state.merge({ fetching: false, error: null, records, metadata });
}

export const crewIndexFailure = (state, { error }) =>
  state.merge({ fetching: false, error });

// Create reduce
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREW_INDEX_REQUEST]: crewIndexRequest,
  [Types.CREW_INDEX_SUCCESS]: crewIndexSuccess,
  [Types.CREW_INDEX_FAILURE]: crewIndexFailure
})

