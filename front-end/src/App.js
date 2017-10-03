import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

// import NavBar from './components/NavBar';
import MainView from './components/MainView';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* <NavBar /> */}
            <MainView />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
