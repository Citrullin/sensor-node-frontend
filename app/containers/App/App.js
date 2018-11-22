/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NodeGroupList from 'containers/NodeGroupList/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - Sensor Node"
      defaultTitle="Sensor Node"
    >
      <meta name="description" content="" />
    </Helmet>
    <Header />
    <main>
      <div className="o-background-bright-lighter o-full-height">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/node-groups" component={NodeGroupList} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
