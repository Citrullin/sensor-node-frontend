import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';

import reducer from './reducer';
import saga from './saga';
import NodeGroupList from './NodeGroupList';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'node-group', reducer });
const withSaga = injectSaga({ key: 'node-group', saga });

export default compose(withReducer, withSaga, withConnect)(NodeGroupList);
export { mapDispatchToProps };
