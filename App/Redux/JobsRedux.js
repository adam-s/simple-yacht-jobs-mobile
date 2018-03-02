import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  jobsIndexRequest: null,
  jobsIndexSuccess: ['jobs'],
  jobsIndexFailure: ['error']
});

export const JobsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  records: [],
  metadata: {},
  error: null,
  fetching: false
});

// Reducers
export const jobsIndexRequest = (state) => state.merge({ fetching: true });

export const jobsIndexSuccess = (state, { records, metadata }) => {
  return state.merge({ fetching: false, error: null, records, metadata });
}

export const jobsIndexFailure = (state, { error }) =>
  state.merge({ fetching: false, error });

// Create reduce
export const reducer = createReducer(INITIAL_STATE, {
  [Types.JOBS_INDEX_REQUEST]: jobsIndexRequest,
  [Types.JOBS_INDEX_SUCCESS]: jobsIndexSuccess,
  [Types.JOBS_INDEX_FAILURE]: jobsIndexFailure
})
