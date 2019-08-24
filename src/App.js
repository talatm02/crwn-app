import React from 'react';
import './App.css';
import  HomePage  from "./pages/homepage/homepage.component";
import { Route, Link } from 'react-router-dom';

const Dummy = (props) => {
  console.log(props);
  return (<div>
    <h1>Dummy</h1>
    <Link to="/" >Back </Link>
    <Link to={`${props.match.url}/13`} > 13 </Link>
    <Link to={`${props.match.url}/14`} > 14 </Link>
    </div>)
}

const DummyDetails = (props) => {
  console.log(props);
  return (<div>
      <h1>Detail: {props.match.params.id}</h1>
      <Link to='/dummy' > back </Link>
    </div>)
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dummy" component={Dummy} />
      <Route path="/dummy/:id" component={DummyDetails} />
    </div>
    // <div>
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
