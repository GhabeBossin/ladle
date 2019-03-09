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
import SearchBar from './SearchBar.js'

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
    console.log("main nav", this.props)
    return (
      <div className={ this.props.className }>
        <Navbar light expand="md" className="shadow-sm">
          <Link to="/" className="navbar-brand">
            ladle
          </Link>
          {/* {
            this.props.currentUser.first_name ?
            <NavItem className='nav-link'>Hello{`, ${this.props.currentUser.first_name}`}
            </NavItem>
            : null
          } */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { this.props.currentUser.first_name ?
                <NavItem className='nav-link'>
                  Hello{`, ${this.props.currentUser.first_name}`}
                </NavItem>
                : null
              }
              { this.props.currentUser.first_name ?
                <NavItem>
                  <NavLink to="/login" className='nav-link'>Logout</NavLink>
                </NavItem>
                :
                <NavItem>
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </NavItem>
              }
              <NavItem>
                <SearchBar data={ this.props }/>
              </NavItem>

              { this.props.currentUser.is_admin ?
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Admin
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/admin/words" className="nav-link">Words</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/admin/users" className="nav-link">Users</NavLink>
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                : null
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav