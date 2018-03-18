import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSave = () => {
    const { handleAddNew, formState, isFormValid, resetForm } = this.props;
    handleAddNew(formState);

    this.setState({ isFormValid });
    isFormValid && resetForm();
  };

  quit = () => {
    this.props.resetForm();
    this.toggle();
    this.setState({ isFormValid: false });
  };

  render() {
    const {
      className,
      buttonLabel,
      assetType,
      children,
      isFormValid: isFormValidFromProps
    } = this.props;
    const { isFormValid } = this.state;
    return (
      <div>
        <Button
          disabled={assetType === 'article'}
          color="primary"
          onClick={this.toggle}
        >
          {buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader toggle={this.toggle}>add new {assetType}</ModalHeader>
          <ModalBody>
            {isFormValid ? (
              `${assetType} added succesfully`
            ) : (
              <div>{children}</div>
            )}
          </ModalBody>
          <ModalFooter>
            {isFormValid ? (
              <Button color="primary" onClick={this.quit}>
                Ok
              </Button>
            ) : (
              <Button
                disabled={!isFormValidFromProps}
                color="primary"
                onClick={this.handleSave}
              >
                save
              </Button>
            )}
            {!isFormValid && (
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUp;
