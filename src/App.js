import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import SignInSignOutPage from './pages/signinsignoutpage/signinsignoutpage.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import  setCurrentUser  from './redux/user/user.action'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //on use object change
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      }
      else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (this.props.currentUser ? (<HomePage />) : (<SignInSignOutPage />))} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => (this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignOutPage />))} />
        </Switch>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route exact path="/shop" component={ShopPage} />
//         <Route  path="/signin" component={SignInSignOutPage} />
//       </Switch>
//     </div>
//   );
// }

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
