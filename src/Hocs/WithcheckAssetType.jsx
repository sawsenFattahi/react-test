import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { routes } from '../config';

const availableAssets = ['contact', 'article'];

const WithcheckAssetType = WrappedComponent => {
  return class Checker extends Component {
    render() {
      const { assetType } = this.props.match.params;
      return !availableAssets.includes(assetType) ? (
        <Redirect to={routes.badUrl} />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default WithcheckAssetType;
