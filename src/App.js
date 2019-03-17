import React, { Component } from 'react';
import Title from './component/Titles/Titles';
import Form from './component/Form/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Title />
        <Form />


      </div>
    );
  }
}

export default App;
