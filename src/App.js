import React, { Component } from 'react';
import './App.css';
import ToolBar from './ToolBar.js';
import InBox from './InBox.js'
import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inbox: []
    }
  }

  getMessages = async () => {
    try {
      const response = await axios.get(`${url}/messages`);
      this.setState({
        inbox: response.data
      })
    } catch(err) {
      console.log(err)
    }
  };

  componentDidMount() {
    this.getMessages();
  };

  render() {
    return (
      <div className="App">
        <header className="container">
          <ToolBar />
        </header>
        <main className = "container">
          <InBox inBox={this.state.inbox}/>
        </main>
      </div>
    );
  }
}

export default App;
