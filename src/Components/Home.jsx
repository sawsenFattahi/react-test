import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { routes } from '../config';

const linkStyle = {
  textDecoration: 'none',
  fontSize: '2rem'
};

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Row className="home text-center">
          <Col>
            <Link
              style={linkStyle}
              className="home-link"
              to={`${routes.assetList}/contact`}
            >
              contacts
            </Link>
          </Col>
          <Col>
            <Link
              style={linkStyle}
              className="home-link"
              to={`${routes.assetList}/article`}
            >
              articles
            </Link>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Home;
