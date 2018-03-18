import React, { Component, Fragment } from 'react';
import { Row, Col, InputGroup, Input } from 'reactstrap';
import { WithcheckAssetType } from '../Hocs';
import ContactItem from './ContactItem';
import ArticleItem from './ArticleItem';
import Loading from './Loading';
import { ContactForm } from './Forms';
import { fakeRequest, searchInArrayOfObj } from '../utils';

const genericListItem = {
  contact: {
    Component: ContactItem,
    keyPath: 'APNR'
  },
  article: {
    Component: ArticleItem,
    keyPath: 'ARTIKEL'
  }
};

const HeaderControl = ({ handleSearch, handleAddNew, assetType }) => {
  return (
    <Fragment>
      <Row style={{ margin: 'auto' }}>
        <Col md={{ size: 4 }}>
          <InputGroup style={{ marginBottom: '20px' }}>
            <Input onChange={handleSearch} placeholder="search" />
          </InputGroup>
        </Col>
        <ContactForm handleAddNew={handleAddNew} assetType={assetType} />
      </Row>
    </Fragment>
  );
};

class AssetList extends Component {
  state = {
    loading: true,
    data: [],
    filteredData: [],
    searchKey: ''
  };

  componentDidMount = async () => {
    const { assetType } = this.props.match.params;
    const data = await fakeRequest({ assetType, delay: 500 });
    this.setState({
      loading: false,
      data
    });
  };

  handleSearch = ({ target: { value } }) => {
    this.setState(({ data }) => ({
      searchKey: value,
      filteredData: searchInArrayOfObj(data, value)
    }));
  };

  handleAddNew = ({ id, vorname, nachname, email, lieferant }) =>
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          APNR: id,
          LIEFERANT: lieferant,
          VORNAME: vorname,
          NACHNAME: nachname,
          EMAIL: email
        }
      ]
    }));

  renderAssetList = ({ assetType, data }) => {
    const { Component, keyPath } = genericListItem[assetType];

    return (
      <Fragment>
        <HeaderControl
          handleAddNew={this.handleAddNew}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          assetType={assetType}
        />
        {data.map(item => (
          <Component key={item[keyPath]} {...{ ...item, assetType }} />
        ))}
      </Fragment>
    );
  };

  render() {
    const { assetType } = this.props.match.params;
    const { loading, data, filteredData, searchKey } = this.state;
    const dataToRender = searchKey ? filteredData : data;

    return loading ? (
      <Loading />
    ) : (
      this.renderAssetList({ assetType, data: dataToRender })
    );
  }
}

export default WithcheckAssetType(AssetList);
