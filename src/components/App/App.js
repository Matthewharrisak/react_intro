import React, { Component } from 'react';
import './App.css';
// import Header from '../header/header';
import Form from '../Form/Form'
// local state - local is on this App - its basically a variable - will always be an object

class App extends Component {
  // render is using JSX
  
  render() {
    return (
      <div className="App">
              {/* <Header/> */}
              <Form/>

      </div>
      
    );
  }
}

export default App;
