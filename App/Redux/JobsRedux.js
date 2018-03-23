import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  jobsIndexRequest: null,
  jobsIndexSuccess: ['records', 'metadata'],
  jobsIndexFailure: ['error'],
  jobsUpdateTableState: ['tableState'],
  jobsUpdateTempTableState: ['tempTableState'],
  jobsToggleFilter: null,
});

export const JobsTypes = Types;
export default Creators;

const tableStateDefault = {
  jobType: '',
  latitude: 26.112,
  longitude: -80.1373,
  name: 'Fort Lauderdale, FL, USA',
  position: '',
  type: '',
};

export const INITIAL_STATE = Immutable({
  records: [],
  metadata: {},
  error: null,
  fetching: false,
  tableState: tableStateDefault,
  tempTableState: tableStateDefault,
  filterIsVisible: false,
});

// Reducers
const jobsIndexRequest = (state) => {
  return state.merge({ fetching: true });
};

const jobsIndexSuccess = (state, { records, metadata }) => {
  return state.merge({
    fetching: false,
    error: null,
    records,
    metadata,
  });
};

const jobsIndexFailure = (state, { error }) =>
  state.merge({ fetching: false, error });

const jobsUpdateTableState = (state, { tableState }) =>
  state.merge({ tableState });

const jobsUpdateTempTableState = (state, { tempTableState }) =>
  state.merge({ tempTableState });

const jobsToggleFilter = state => state.merge({ filterIsVisible: !state.filterIsVisible });

// Create reduce
export const reducer = createReducer(INITIAL_STATE, {
  [Types.JOBS_INDEX_REQUEST]: jobsIndexRequest,
  [Types.JOBS_INDEX_SUCCESS]: jobsIndexSuccess,
  [Types.JOBS_INDEX_FAILURE]: jobsIndexFailure,
  [Types.JOBS_UPDATE_TABLE_STATE]: jobsUpdateTableState,
  [Types.JOBS_UPDATE_TEMP_TABLE_STATE]: jobsUpdateTempTableState,
  [Types.JOBS_TOGGLE_FILTER]: jobsToggleFilter,
});
