
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class NodeGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.props.onComponentLoaded();
  }

  render(){
    const { loading, error, repos } = this.props;

    return(
      <div className="node-group-list">
        <Helmet>
          <title>Node Group</title>
          <meta name="description" content="NodeGroup" />
        </Helmet>
        <div>
          <h1>Node Group</h1>
        </div>
      </div>
    )
  }
}

NodeGroup.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  nodeGroups: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onComponentLoaded: PropTypes.func
};
