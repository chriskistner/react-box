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
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

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

  toggleStar = async (id) => {
    try {
        await axios.patch(`${url}/messages/`, {messageIds: [id], command: 'star'});
        this.getMessages();
    }catch(err) {
        console.log(err)
    }
};

toggleSelection = (id) => {
  const updatedInbox = [...this.state.inbox]
  const result = updatedInbox.find(e => e.id === id)
  if (result) {
    // console.log(result)
    result.selected = !result.selected
    this.setState({
      inbox: updatedInbox
    })
  } 
};

selectAll = () => {
  const updatedInbox = [...this.state.inbox];
  const result = updatedInbox.map(target => target.selected = true);
  console.log(result);
  this.setState({
    inbox: updatedInbox
  })
}

componentDidMount() {
  this.getMessages();
};

  render() {
    return (
      <div className="App">
        <header className="container">
          <ToolBar selectAll ={this.selectAll} />
        </header>
        <main className = "container">
          <InBox inBox={this.state.inbox} toggleSelection={this.toggleSelection} toggleStar={this.toggleStar}/>
        </main>
      </div>
    );
  }
}

export default App;
