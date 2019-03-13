import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Navbar expand='md' color='light' className='ml-auto' >
          <Link to='/' className='navbar-brand'>
            ladle
          </Link>
          <SearchBar data={ this.props.data } />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { this.props.currentUser.id ?
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink  exact to='/' activeClassName='active' className='nav-link' >
                    Hello, { `${this.props.currentUser.first_name}`}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/game' activeClassName='active' className='nav-link'>
                    Game
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to='/' activeClassName='active' className='nav-link' onClick={this.props.handleLogoutClick }>
                    Logout
                  </NavLink>
                </NavItem>
                { this.props.currentUser.is_admin ?
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret >
                    Admin
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink to='/admin/dashboard' activeClassName='active' className='nav-link'>
                          Dashboard
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to='/admin/words' activeClassName='active' className='nav-link'>
                          Words
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to='/admin/users' activeClassName='active' className='nav-link'>
                          Users
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  : null
                }
                </Nav>
                :
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink to='/login' className='nav-link'>
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/signup' className='nav-link'>
                      Signup
                    </NavLink>
                  </NavItem>
                </Nav>
              }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav