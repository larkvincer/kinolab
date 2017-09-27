import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AddMovie from './components/AddMovie';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <Route path="/addmovie" component={AddMovie}/>
        </div>
      </Router>
    );
  }
}

export default App;
