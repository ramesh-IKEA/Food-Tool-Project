import './App.css';
import React, { Component } from 'react';
import "./styles/index"
import './App.css'
import Header from './layout/header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'
class App extends Component{
  constructor() {
    super();
    this.state = {
        AuthStatus: true
    };
}
state = {
    AuthStatus: ''
}
render() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
