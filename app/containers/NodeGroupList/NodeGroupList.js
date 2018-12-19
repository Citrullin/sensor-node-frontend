
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class NodeGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet>
          <title>Node Group</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <h1>Node Group</h1>
        </div>
      </article>
    );
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
