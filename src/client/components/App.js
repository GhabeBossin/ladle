import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom";
import StyledAppContainer from '../styles/appStyles'
import StyledMainNav from '../styles/mainNavStyles'
import StyledFooter from '../styles/footerStyles'
import Game from './Game'
import AdminDash from './admin/AdminDash'
import SignUp from './SignUp'
import Login from './Login'
import AdminWords from './admin/AdminWords'
import AdminUsers from './admin/AdminUsers'
import UserEdit from './admin/UserEdit'
import WordEdit from './admin/WordEdit'
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
    console.log("object for mappping", userObj)
    !userObj.data[0].achievements ? achievements = [] : obj.forEach(element => {
      achievements.push({ id: element.id, name: element.name, description: element.description })
    })
    this.setState({
      currentUser: {
        achievements: achievements,
        id: userObj.data[0].id,
        first_name: userObj.data[0].first_name,
        last_name: userObj.data[0].last_name,
        username: userObj.data[0].username,
        is_admin: userObj.data[0].is_admin,
        // is_new: userObj.data[0].is_new
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
    this.setState({ currentUser: {} })
    console.log(this.state.currentUser)
  }

  render() {
    return (
      <div>
        <StyledAppContainer>
          <StyledMainNav onClick={ this.handleLogoutClick } data={ this.state.wordData } currentUser={this.state.currentUser}/>
            <div>
              <Switch>
                <Route exact path="/" render={ props => <Game {...props} data={this.state.currentUser}  /> }/>
                <Route exact path="/login" component={ props => <Login setCurrentUser={ this.setCurrentUser } { ...props } /> }/>
                <Route exact path="/signup" component={ props => <SignUp setCurrentUser={ this.setCurrentUser } { ...props } /> }/>
                <Route exact path="/admin/dashboard" component={ AdminDash } />
                <Route exact path="/admin/words" component={ AdminWords } />
                <Route exact path="/admin/users" component={ AdminUsers } />
                <Route exact path="/admin/:es_word/edit" component={ WordEdit } />
                <Route exact path="/admin/:username/edit" component={ UserEdit } />
              </Switch>
            </div>
        </StyledAppContainer>
        <StyledFooter />
      </div>
    );
  }
}

export default App
