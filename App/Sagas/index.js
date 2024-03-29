import { takeLatest, all, fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { crewSagas } from './CrewSagas';
import { jobsSagas } from './JobsSagas';
import { authSagas } from './AuthSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    fork(crewSagas),
    fork(jobsSagas),
    fork(authSagas),
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ])
}
