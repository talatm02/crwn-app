import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import  HomePage  from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import SignInSignOutPage from './pages/signinsignoutpage/signinsignoutpage.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route  path="/signin" component={SignInSignOutPage} />
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

export default App;
