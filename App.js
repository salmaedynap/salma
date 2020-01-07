import React, {Component, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Content from './Content'

 
//import Form from './Forms'
class App extends Component {
  
  render() {
    return (
      <div>
      <Header/>
      <Content/>
      </div>
    );
  }
}


export default App;
