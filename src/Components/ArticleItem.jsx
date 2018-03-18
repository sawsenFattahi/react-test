import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import { routes } from '../config';

const ArticleItem = ({ ARTIKEL: id, ARTGROUP: artGroupe, assetType }) => (
  <Col md={{ size: '3', offset: 0 }} className="article">
    <Card body outline>
      <CardTitle style={{ color: 'gray' }}>{id}</CardTitle>
      <CardText style={{ color: 'black' }}>
        {artGroupe || 'data not available'}
      </CardText>
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

export default ArticleItem;
