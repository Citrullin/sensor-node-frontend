import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  nodeGroupList: ''
});

function nodeGroupListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default nodeGroupListReducer;
