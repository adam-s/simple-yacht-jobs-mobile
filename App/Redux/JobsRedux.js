import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  jobsIndexRequest: null,
  jobsIndexSuccess: ['jobs'],
  jobsIndexFailure: ['error'],
  jobsUpdateTableState: ['tableState'],
  jobsToggleFilter: null,
});

export const JobsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  records: [],
  metadata: {},
  error: null,
  fetching: false,
  tableState: {
    jobType: '',
    latitude: 26.1224386,
    longitude: -80.13731740000001,
    name: 'Fort Lauderdale, FL, USA',
    position: '',
    type: '',
  },
  filterIsVisible: false,
});

// Reducers
const jobsIndexRequest = state => state.merge({ fetching: true });

const jobsIndexSuccess = (state, { records, metadata }) =>
  state.merge({
    fetching: false,
    error: null,
    records,
    metadata,
  });

const jobsIndexFailure = (state, { error }) =>
  state.merge({ fetching: false, error });

const jobsUpdateTableState = (state, { tableState }) => {
  console.log(tableState);
  return state.merge({ tableState });
}

const jobsToggleFilter = state => state.merge({ filterIsVisible: !state.filterIsVisible });

// Create reduce
export const reducer = createReducer(INITIAL_STATE, {
  [Types.JOBS_INDEX_REQUEST]: jobsIndexRequest,
  [Types.JOBS_INDEX_SUCCESS]: jobsIndexSuccess,
  [Types.JOBS_INDEX_FAILURE]: jobsIndexFailure,
  [Types.JOBS_UPDATE_TABLE_STATE]: jobsUpdateTableState,
  [Types.JOBS_TOGGLE_FILTER]: jobsToggleFilter,
});

