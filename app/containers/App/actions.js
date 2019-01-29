/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,

  LOAD_NODE_GROUPS,
  LOAD_NODE_GROUPS_SUCCESS,
  LOAD_NODE_GROUPS_ERROR,

  LOAD_NODE_GROUP_DETAILS,
  LOAD_NODE_GROUP_DETAILS_ERROR,
  LOAD_NODE_GROUP_DETAILS_SUCCESS
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}

export function loadNodeGroups(){
  return {
    type: LOAD_NODE_GROUPS
  };
}

export function nodeGroupLoaded(nodeGroups){
  return {
    type: LOAD_NODE_GROUPS_SUCCESS,
    nodeGroups
  }
}

export function nodeGroupLoadingError(error){
  return {
    type: LOAD_NODE_GROUPS_ERROR,
    error
  }
}

export function loadNodeGroupDetails(){
  return {
    type: LOAD_NODE_GROUP_DETAILS
  }
}

export function repoLoadingError(error) {
  return {
    type: LOAD_NODE_GROUP_DETAILS_ERROR,
    error
  };
}

export function nodeGroupDetailsLoaded(details){
  return {
    type: LOAD_NODE_GROUP_DETAILS_SUCCESS,
    details
  }
}
