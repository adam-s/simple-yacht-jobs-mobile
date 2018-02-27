import { call, put, takeLatest } from 'redux-saga/effects';

import JobsApi from '../Services/JobsApi';
import JobsActions, { JobsTypes } from '../Redux/JobsRedux';

const jobsApi = JobsApi.create();

function * fetchJobsIndex() {
  try {
    const response = yield jobsApi.fetchJobsIndex();//Api call here
    const { metadata, records } = response.data;
    yield put({
      type: JobsTypes.JOBS_INDEX_SUCCESS,
      metadata,
      records
    });
  } catch (error) {
    yield put({
      type: JobsTypes.JOBS_INDEX_FAILURE,
      error
    });
  }
}

export function * jobsSagas() {
  yield takeLatest(JobsTypes.JOBS_INDEX_REQUEST, fetchJobsIndex);
}
