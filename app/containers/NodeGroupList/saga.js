/**
 * Get the available node groups
 */

import { put, takeLatest, call, select } from 'redux-saga/effects';
import * as api from 'api';
import { nodeGroupLoaded, nodeGroupLoadingError } from 'containers/App/actions';

import { makeSelectNodeGroupDetails } from 'containers/HomePage/selectors';
import { LOAD_NODE_GROUPS } from 'containers/App/constants';
/**
 * Node Groups
 */
export function* getNodeGroups() {
  try {
    // Call our request helper (see 'utils/request')
    const nodeGroups = yield call(api.NodeGroups.getList);
    yield put(nodeGroupLoaded(nodeGroups));
  } catch (err) {
    yield put(nodeGroupLoadingError(err));
  }
}

export function* getNodeGroupDetails(){
  try {
    const groupName = yield select(makeSelectNodeGroupDetails());
    const nodeGroups = yield call(api.NodeGroups.getDetails);
    yield put(nodeGroupLoaded(nodeGroups, groupName));
  } catch (err) {
    yield put(nodeGroupLoadingError(err));
  }
}

export default function* nodeGroupData() {
  yield takeLatest(LOAD_NODE_GROUPS, getNodeGroups);
  yield takeLatest();
}
