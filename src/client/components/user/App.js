import React, { Component } from 'react'
import { 
  Switch, 
  Route,
  Redirect } from "react-router-dom";
import { 
  StyledAppContainer,
  StyledMainNav,
  StyledFooter } from '../styles/appStyles'
import Home from './Home'
import Game from './Game'
import Login from './Login'
import SignUp from './SignUp'
import AdminDash from '../admin/AdminDash'
import AdminWords from '../admin/AdminWords'
import AdminUsers from '../admin/AdminUsers'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordData: {},
      currentUser: {}
    }
  }

  setCurrentUser = userObj => {
    let obj = userObj.data;
    let achievements = [];
    obj.forEach(element => {
      achievements.push({ id: element.achievement_id, name: element.achievement_name, description: element.achievement_description })
    })
    this.setState({
      currentUser: {
        achievements: achievements,
        id: userObj.data[0].id,
        first_name: userObj.data[0].first_name,
        last_name: userObj.data[0].last_name,
        username: userObj.data[0].username,
        is_admin: userObj.data[0].is_admin,
        is_new: userObj.data[0].is_new
      }
    })
  }

  getWordData = () => {
    axios.get("http://localhost:8080/api/words/all")
    .then((response) => {
      this.setState({wordData: [...response.data]});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getWordData()
  }

  handleLogoutClick = () => {
    this.setState({ currentUser: {
      achievements: null,
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      is_admin: null,
      is_new: null
    }});
  }

  render() {
    return (
      <div>
        <StyledAppContainer>
          <StyledMainNav handleLogoutClick={ this.handleLogoutClick } data={ this.state.wordData } currentUser={this.state.currentUser}/>
            <div>
              <Switch>
                <Route path='/' exact component={ props => <Home currentUser={this.state.currentUser} { ...props } /> }/>
                <Route path='/game' component={ props => <Game data={this.state.currentUser} {...props} /> }/>
                <Route path='/login' component={ props => <Login setCurrentUser={ this.setCurrentUser } { ...props } /> }/>
                <Route path='/signup' component={ props => <SignUp setCurrentUser={ this.setCurrentUser } { ...props } /> }/>
                <Route path='/admin/dashboard' component={ props => <AdminDash data={this.state.wordData} {...props } /> } />
                <Route path='/admin/words' component={ AdminWords } />
                <Route path='/admin/users' component={ props => <AdminUsers currentUser={ this.state.currentUser } { ...props } /> }/>
                <Redirect to='/' />
              </Switch>
            </div>
          </StyledAppContainer>
        <StyledFooter />
      </div>
    );
  }
}

export default App
