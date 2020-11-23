import React from 'react'
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main'

class App extends React.Component{

  constructor (){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <Main/>
      </div>
    )
  }

}

export default App;
