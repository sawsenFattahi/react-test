import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { routes } from '../config';

export default () => (
  <Alert color="warning">
    <p>bad url</p>
    <Link to={routes.home}>
      <h1>back to home</h1>
    </Link>
  </Alert>
);
