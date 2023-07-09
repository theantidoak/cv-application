import React, { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import { Mainpage } from './components/Mainpage';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: {
        url: '',
        editing: false
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
        editing: false
      },
      language: {
        languages: [''],
        editing: false
      },
      about: {
        name: '',
        position: '',
        description: '',
        editing: false
      },
      education: {
        schools: [
          {
            dates: '',
            degree: '',
            school: '',
            location: '',
            awards: ''
          }
        ],
        editing: false
      },
      experience: {
        jobs: [
          {
            dates: '',
            position: '',
            company: '',
            location: '',
            description: ''
          }
        ],
        editing: false
      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, section, i=null) {
    const propVal = this.state[section][e.currentTarget.dataset.prop];
    if (Array.isArray(propVal)) {
      const index = i ? i : +e.currentTarget.id.slice(e.currentTarget.id.indexOf('-') + 1);
      propVal.splice(index, i ? 0 : 1, typeof propVal[0] === 'object' ? { ...propVal[0] } : propVal[0].slice());
    }
    const inputVal = Array.isArray(propVal) ? propVal : e.currentTarget.value;

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
        <Mainpage states={this.state}handleClick={this.handleClick} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
