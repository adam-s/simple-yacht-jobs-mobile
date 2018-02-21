import { call, put, takeLatest } from 'redux-saga/effects';

import CrewApi from '../Services/CrewApi';
import CrewActions, { CrewTypes } from '../Redux/CrewRedux';

const crewApi = CrewApi.create();

function * fetchCrewIndex() {
  try {
    const response = yield crewApi.fetchCrewIndex();//Api call here
    const { metadata, records } = response.data;
    yield put({
      type: CrewTypes.CREW_INDEX_SUCCESS,
      metadata,
      records
    });
  } catch (error) {
    yield put({
      type: CrewTypes.CREW_INDEX_FAILURE,
      error
    });
  }
}

export function * crewSagas() {
  yield takeLatest(CrewTypes.CREW_INDEX_REQUEST, fetchCrewIndex);
}
