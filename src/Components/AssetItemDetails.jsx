import React from 'react';
import { Row, Col } from 'reactstrap';
import { WithAssetItemDetails } from '../Hocs';

const renderGenericDetails = details =>
  [...Object.keys(details)].map((itemKey, index) => (
    <Row key={index} style={{ background: index % 2 === 0 ? 'gray' : '#fff' }}>
      <Col md={{ size: 3 }}>
        <b>{itemKey}</b>
      </Col>
      <Col md={{ size: 9, offset: 0 }}>
        <span style={{ float: 'right' }}>{details[itemKey]}</span>
      </Col>
    </Row>
  ));

const AssetItemDetails = props => {
  const { details } = props;

  if (!details) return <h1>no data details for this id.</h1>;
  return renderGenericDetails(details);
};

export default WithAssetItemDetails(AssetItemDetails);
