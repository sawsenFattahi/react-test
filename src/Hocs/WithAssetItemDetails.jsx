import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Loading from '../Components/Loading';
import { fakeRequest } from '../utils';

const WithAssetItemDetails = WrappedComponent => {
  return class DetailsGetter extends Component {
    state = {
      loading: true,
      details: [],
      assetType: null
    };

    componentDidMount = async () => {
      const { assetType, assetId } = this.props.match.params;
      const details = await fakeRequest({
        assetType,
        assetId,
        delay: 1500,
        detail: true
      });
      this.setState({
        loading: false,
        details,
        assetType
      });
    };

    render() {
      const { loading, details, assetType } = this.state;
      return loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Row>
            <Col className="details-header">
              <b>{assetType}</b> details
            </Col>
          </Row>
          <WrappedComponent {...this.props} details={details} />
        </Fragment>
      );
    }
  };
};

export default WithAssetItemDetails;
