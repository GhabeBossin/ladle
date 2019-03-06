import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
// import SearchBar from './SearchBar.js'

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen  : !this.state.isOpen
    });
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className={ this.props.className }>
        <Navbar light expand="md" className="shadow-sm">
          <Link to="/" className="navbar-brand">
            ladle
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {/* STRETCH:
              <NavItem>
                <SearchBar />
              </NavItem>
              */}
              {/* conditional render greeting based on currentUser */}
              <NavItem className="nav-link">Hello {this.props.currentUser.first_name}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/login" className="nav-link">Logout</NavLink>
                  </DropdownItem>
                  { this.props.currentUser.is_admin
                    ?
                    <div>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink to="/admin/dashboard" className="nav-link">Admin</NavLink>
                      </DropdownItem>
                    </div>
                    : null
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav