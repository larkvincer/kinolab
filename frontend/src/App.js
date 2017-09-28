import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './containers/MainPage';
import AddMovie from "./containers/AddMovie";
import Movie from "./containers/Movie";
import ImportMovie from './containers/ImportMovie';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/movie/add" component={AddMovie}/>
            <Route exact path="/movie/import" component={ImportMovie}/>
            <Route exact path="/movie/id/:id" component={Movie} />
            <Route exact path="/" component={MainPage} />
            <Route render={ () => (<div>Not found!!!</div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
