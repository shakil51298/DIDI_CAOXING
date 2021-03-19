import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import DestinationCheck from './Components/DestinationCheck/DestinationCheck';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
export const userContext = createContext()

function App() {
  const [loggedInUser,setLoggedInuser]= useState([])
  return (
    <userContext.Provider className="App" value={[loggedInUser,setLoggedInuser]}>
      <Router>
        <Header/>
        <Switch>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route  path="/blog">
            <Blog/>
          </Route>
          <Route  path="/contact">
            <Contact/>
          </Route>
          <PrivateRoute  path="/destination">
            <DestinationCheck/>
          </PrivateRoute>
          <Route  path="/login">
            <Login/>
          </Route>
          <PrivateRoute  path="/:Vehicle">
            <DestinationCheck/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
