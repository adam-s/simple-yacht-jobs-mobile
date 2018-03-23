import { call, put, takeLatest, select } from 'redux-saga/effects';
import R from 'ramda';

import JobsApi from '../Services/JobsApi';
import JobsActions, { JobsTypes } from '../Redux/JobsRedux';

const jobsApi = JobsApi.create();

function* getTableStateInfo() {
  const state = yield select();
  const { tableState, tempTableState } = state.jobs;
  const dirty = !R.equals(tableState, tempTableState);
  return {
    tableState,
    tempTableState,
    dirty,
  };
}

function* fetchJobsIndex() {
  try {
    const tableStateInfo = yield getTableStateInfo();
    const tableState = tableStateInfo.tempTableState;
    const response = yield jobsApi.fetchJobsIndex(tableState); // Api call here
    const { metadata, records } = response.data;
    yield put({
      type: JobsTypes.JOBS_INDEX_SUCCESS,
      metadata,
      records,
    });
    // Update the tableState value with the tempTableStateValue
    if (tableStateInfo.dirty) {
      yield put({
        type: JobsTypes.JOBS_UPDATE_TABLE_STATE,
        tableState,
      });
    }
  } catch (error) {
    yield put({
      type: JobsTypes.JOBS_INDEX_FAILURE,
      error,
    });
  }
}

function* toggleFilter() {
  const state = yield select();
  // Check if filter is closed
  if (state.jobs.filterIsVisible === false) {
    const tableStateInfo = yield getTableStateInfo();
    // Check if the form is dirty
    if (tableStateInfo.dirty) {
      // Trigger a request jobs index action
      yield put({
        type: JobsTypes.JOBS_INDEX_REQUEST,
      });
    }
  }
}

export function* jobsSagas() {
  yield takeLatest(JobsTypes.JOBS_INDEX_REQUEST, fetchJobsIndex);
  yield takeLatest(JobsTypes.JOBS_TOGGLE_FILTER, toggleFilter);
}
