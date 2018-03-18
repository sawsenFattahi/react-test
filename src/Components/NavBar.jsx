import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { routes } from '../config';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link
            style={{
              textDecoration: 'none'
            }}
            to={routes.home}
          >
            easy asset
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href={`${routes.assetList}/contact`}
                  style={{
                    color: `${
                      pathname.includes('contact') ? '#007bff' : 'gray'
                    }`,
                    borderBottom: `${
                      pathname.includes('contact')
                        ? '2px solid #007bff'
                        : 'none'
                    }`
                  }}
                >
                  contacts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={`${routes.assetList}/article`}
                  style={{
                    color: `${
                      pathname.includes('article') ? '#007bff' : 'gray'
                    }`,
                    borderBottom: `${
                      pathname.includes('article')
                        ? '2px solid #007bff'
                        : 'none'
                    }`
                  }}
                >
                  articles
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navigation);
