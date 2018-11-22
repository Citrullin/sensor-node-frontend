import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { makeSelectNodeGroup } from 'containers/App/selectors';
import { loadNodeGroups } from '../App/actions';

import NodeGroupList from './NodeGroupList';

const mapDispatchToProps = (dispatch) => ({
  onComponentLoaded: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadNodeGroups());
  }
});

const mapStateToProps = createStructuredSelector({
  nodeGroups: makeSelectNodeGroup()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'nodeGroup', reducer });
const withSaga = injectSaga({ key: 'nodeGroup', saga });

export default compose(withReducer, withSaga, withConnect)(NodeGroupList);
