import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './Components/Home';
import AssetList from './Components/AssetList';
import AssetItemDetails from './Components/AssetItemDetails';
import BadUrl from './Components/BadUrl';
import { routes } from './config';
import NavBar from './Components/NavBar';

export default () => (
  <Container>
    <NavBar />
    <div className="main">
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route
          exact
          path={`${routes.assetList}/:assetType`}
          component={AssetList}
        />
        <Route
          exact
          path={`${routes.assetItemDetails}/:assetType/:assetId`}
          component={AssetItemDetails}
        />
        <Route path="*" render={() => <BadUrl />} />
      </Switch>
    </div>
  </Container>
);
