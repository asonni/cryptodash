import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const CustomElement = styled.div`
  color: green;
  font-size: 30px;
`;

const BlueElement = CustomElement.extend`
  color: blue;
`;

class App extends Component {
  render() {
    return (
      <div>
        <CustomElement>Hello</CustomElement>
        <BlueElement>Hello Blue</BlueElement>
      </div>
    );
  }
}

export default App;
