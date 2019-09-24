import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
