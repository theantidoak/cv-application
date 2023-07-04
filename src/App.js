import React, { Component } from 'react';
import { Sidebar } from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: {
        url: '',
        editing: false,
      },
      contact: {
        address: 'as',
        number: '',
        email: '',
        website: '',
        editing: false
      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, section) {
    this.setState({
      [section]: { ...this.state[section], ...{ [e.currentTarget.id]: e.currentTarget.value } }
    });
  }

  handleClick(section) {
    const editing = this.state[section].editing ? { editing: false } : { editing: true };

    this.setState({
      [section]: { ...this.state[section], ...editing }
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar states={this.state} handleClick={this.handleClick} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
