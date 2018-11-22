/**
 * Get the available node groups
 */

import { put, takeLatest } from 'redux-saga/effects';
import { nodeGroupLoaded } from 'containers/App/actions';

import { LOAD_NODE_GROUPS } from 'containers/App/constants';
/**
 * Node Groups
 */
export function getNodeGroups() {
  let nodeGroups = [
    {
      name: "This is a group",
      id: 123324
    }
  ];

  put(nodeGroupLoaded(nodeGroups));
}

export default function* nodeGroupData() {
  yield takeLatest(LOAD_NODE_GROUPS, getNodeGroups);
}
