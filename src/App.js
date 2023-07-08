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
        address: '',
        number: '',
        email: '',
        website: '',
        editing: false
      },
      skill: {
        skills: [''],
        editing: false,
      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addToArray(e,section) {

  }

  handleChange(e, section, i=null) {
    const propVal = this.state[section][e.currentTarget.dataset.prop];
    let inputVal = e.currentTarget.value;
    
    if (Array.isArray(propVal)) {
      const index = i ? i : +e.currentTarget.id.slice(e.currentTarget.id.indexOf('-') + 1);
      propVal.splice(index, i ? 0 : 1, inputVal);
      inputVal = propVal;
    }

    this.setState({
      [section]: { ...this.state[section], ...{ [e.currentTarget.dataset.prop]: inputVal } }
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
