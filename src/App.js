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

markAsRead = async () => {
  const inBox = this.state.inbox;
  const ids = inBox.filter(emails => emails.selected === true).map(email => email.id)
  try {
    await axios.patch(`${url}/messages/`, {messageIds: ids, command: 'read', read: true});
    this.getMessages();
  }catch(err) {
    console.log(err)
  }
}

markAsUnread = async () => {
  const inBox = this.state.inbox;
  const ids = inBox.filter(emails => emails.selected === true).map(email => email.id)
  try {
    await axios.patch(`${url}/messages/`, {messageIds: ids, command: 'read', read: false});
    this.getMessages();
  }catch(err) {
    console.log(err)
  }
}

toggleSelection = (id) => {
  const updatedInbox = [...this.state.inbox]
  const result = updatedInbox.find(e => e.id === id)
  if (result) {
    result.selected = !result.selected
    this.setState({
      inbox: updatedInbox
    })
  } 
};

unSelectAll = () => {
  const updatedInbox = [...this.state.inbox];
  updatedInbox.map(target => target.selected = false);
  this.setState({
    inbox: updatedInbox
  })
}

selectAll = () => {
  const updatedInbox = [...this.state.inbox];
  updatedInbox.map(target => target.selected = true);
  this.setState({
    inbox: updatedInbox
  })
}

handleSelectAll = () => {
  let allSel = false;
  for (const email of this.state.inbox) {
    if (!email.selected) {
      allSel = true
    }
  }
  allSel === true ? this.selectAll() : this.unSelectAll();
}

addLabel = async (value = null) => {
  const inBox = this.state.inbox;
  const ids = inBox.filter(emails => emails.selected === true).map(email => email.id);
  try {
    await axios.patch(`${url}/messages/`, {messageIds: ids, command: 'addLabel', label: value });
    this.getMessages();
  }catch(err) {
    console.log(err)
  }
};

removeLabel = async (value = null) => {
  const inBox = this.state.inbox;
  const ids = inBox.filter(emails => emails.selected === true).map(email => email.id);
  try {
    await axios.patch(`${url}/messages/`, {messageIds: ids, command: 'removeLabel', label: value });
    this.getMessages();
  }catch(err) {
    console.log(err)
  }
}

componentDidMount() {
  this.getMessages();
};

  render() {
    return (
      <div className="App">
        <header className="container">
          <ToolBar inBox={this.state.inbox} removeLabel={this.removeLabel} addLabel={this.addLabel} handleSelectAll ={this.handleSelectAll} markAsRead={this.markAsRead}/>
        </header>
        <main className = "container">
          <InBox inBox={this.state.inbox} toggleSelection={this.toggleSelection} toggleStar={this.toggleStar}/>
        </main>
      </div>
    );
  }
}

export default App;
