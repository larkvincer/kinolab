import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AddMovie from './components/AddMovie';
import Movie from './components/Movie.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/movie/add" component={AddMovie}/>
            <Route path="/movie/id/:id" component={Movie} />
            <Route path="/" component={MainPage} />
            <Route render={ () => (<div>Not found!!!</div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
