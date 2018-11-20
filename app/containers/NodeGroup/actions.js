/**
 * NodeList
 */

import {LOAD_NODE_GROUP_LIST} from 'actions';

export function loadNodeGroup(name) {
  return {
    type: LOAD_NODE_GROUP_LIST,
    name
  };
}
