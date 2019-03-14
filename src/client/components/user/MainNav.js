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
import TranslateModal from './TranslateModal';

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal_open: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  translation = (data, word) => {
    this.setState({ 
      modal_open: true, 
      en_word: word,
      es_word: data })
  }

  closeTranslate = () => {
    this.setState({ modal_open: false })
  }

  render() {
    return (
      <div className={ this.props.className }>
        { this.state.modal_open && (
          <TranslateModal closeTranslate={ this.closeTranslate } en_word={ this.state.en_word } es_word={ this.state.es_word } />
          )}
        <Navbar light expand='md' color='light' className='ml-auto' >
          <Link to='/' className='navbar-brand'>
            ladle
          </Link>
          <SearchBar data={ this.props.data } translation={ this.translation } />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { this.props.currentUser.id ?
              <Nav className='ml-auto' navbar>
                <NavItem className='ml-auto'>
                  <NavLink  exact to='/' activeClassName='active' className='nav-link' >
                    Hello, { `${this.props.currentUser.first_name}`}
                  </NavLink>
                </NavItem>
                <NavItem className='ml-auto'>
                  <NavLink to='/game' activeClassName='active' className='nav-link'>
                    Game
                  </NavLink>
                </NavItem>
                <NavItem className='ml-auto'>
                  <NavLink exact to='/' activeClassName='active' className='nav-link' onClick={this.props.handleLogoutClick }>
                    Logout
                  </NavLink>
                </NavItem>
                { this.props.currentUser.is_admin ?
                  <UncontrolledDropdown nav inNavbar className='ml-auto'>
                    <DropdownToggle nav caret className='ml-auto text-right'>
                      Admin
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem className='ml-auto'>
                        <NavLink to='/admin/dashboard' activeClassName='active' className='nav-link text-center'>
                          Dashboard
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem className='ml-auto'>
                        <NavLink to='/admin/words' activeClassName='active' className='nav-link text-center'>
                          Words
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem className='ml-auto'>
                        <NavLink to='/admin/users' activeClassName='active' className='nav-link text-center'>
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
                  <NavItem className='ml-auto'>
                    <NavLink to='/login' className='nav-link'>
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem className='ml-auto'>
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