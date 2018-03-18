import React, { Component } from 'react';
import { Col, Input, Label, FormGroup } from 'reactstrap';
import PopUp from '../PopUp';
import { validate, getClassNameValue } from '../../utils';

export default class ContactForm extends Component {
  initialState = {
    id: undefined,
    vorname: undefined,
    nachname: undefined,
    email: undefined,
    lieferant: undefined
  };

  state = this.initialState;

  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  resetForm = () => this.setState(this.initialState);

  render() {
    const { handleAddNew, assetType } = this.props;
    const { id, vorname, nachname, email, lieferant } = this.state;
    const isFormValid =
      validate('id', id) &&
      validate('vorname', vorname) &&
      validate('nachname', nachname) &&
      validate('email', email) &&
      validate('lieferant', lieferant);

    return (
      <Col>
        <PopUp
          buttonLabel={`add new ${assetType}`}
          assetType={assetType}
          handleAddNew={handleAddNew}
          isFormValid={!!isFormValid}
          formState={this.state}
          resetForm={this.resetForm}
        >
          <FormGroup>
            <Label>APNR</Label>
            <Input
              className={getClassNameValue('id', id)}
              type="text"
              name="id"
              placeholder="APNR"
              onChange={this.handleChange}
              value={id || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>VORNAME</Label>
            <Input
              className={getClassNameValue('vorname', vorname)}
              type="text"
              name="vorname"
              placeholder="VORNAME"
              onChange={this.handleChange}
              value={vorname || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>NACHNAME</Label>
            <Input
              className={getClassNameValue('nachname', nachname)}
              type="text"
              name="nachname"
              placeholder="VORNAME"
              onChange={this.handleChange}
              value={nachname || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>EMAIL</Label>
            <Input
              className={getClassNameValue('email', email)}
              type="text"
              name="email"
              placeholder="EMAIL"
              onChange={this.handleChange}
              value={email || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>LIEFERANT</Label>
            <Input
              className={getClassNameValue('lieferant', lieferant)}
              type="text"
              name="lieferant"
              placeholder="LIEFERANT"
              onChange={this.handleChange}
              value={lieferant || ''}
            />
          </FormGroup>
        </PopUp>
      </Col>
    );
  }
}
