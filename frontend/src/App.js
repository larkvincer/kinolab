import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
