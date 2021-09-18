import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx'

import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      // unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged(). 
      // This method returns another method: firebase.unsubscribe().
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {  
    //  When unsubscribeFromAuth() is called inside the componentWillUnmount(), 
    // it now has the value of firebase.unsubscribe(), which executes, closing the session.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin'>{SignInAndSignUpPage}</Route>
          </Switch>
      </div>
    );
  }
}

export default App;
