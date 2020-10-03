import React from 'react';
import ReactNotifications from 'react-notifications-component';
import logo from './logo.svg';
import './App.css';
import CreateReview from './components/create-review'


function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello team Canary!
        </p>
      </header>
    </div>
  );
}

export default App;
