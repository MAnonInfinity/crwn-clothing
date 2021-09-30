import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx'

import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged(). 
      // This method returns another method: firebase.unsubscribe().
      // this.setState({ currentUser: user });
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
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
    <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin'>{SignInAndSignUpPage}</Route>
          </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);  // the first argument of the first fxn of connect is `mapStateToProps` 
// & the second is `mapDispatchToProps`, in this case we don't need to mapStateToProps hence, we're passing null
