import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import { routes } from '../config';

const ContactItem = props => {
  const {
    APNR: id,
    VORNAME: firstName,
    NACHNAME: lastName,
    LIEFERANT,
    assetType
  } = props;

  return (
    <Col md={{ size: '6', offset: 0 }} className="contact">
      <Card body outline>
        <CardTitle>
          {firstName} {lastName}
        </CardTitle>
        <CardText>{LIEFERANT || 'data not available'}</CardText>
        <center>
          <Link to={`${routes.assetItemDetails}/${assetType}/${id}`}>
            <Button outline color="primary">
              details
            </Button>
          </Link>
        </center>
      </Card>
    </Col>
  );
};

export default ContactItem;
