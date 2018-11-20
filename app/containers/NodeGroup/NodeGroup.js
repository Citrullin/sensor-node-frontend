
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class NodeGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render(){
    return(
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="NodeGroup" />
        </Helmet>
        <div>

        </div>
      </article>
    )
  }
}

NodeGroup.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])
};
