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

  updateValue(obj, properties, target, i) {
    const [current, ...property] = properties.split('.');

    if (Array.isArray(obj)) {
      const index = i ? i - 1 : +target.id.slice(target.id.lastIndexOf('-') + 1);
      if (property.length < 1 && obj[index].hasOwnProperty(current)) {

        obj.splice(i ? index + 1 : index,
          i ? 0 : 1, 
          {
            ...obj[index],
            [current]: i ? '' : target.value
          });

        return obj;
      }

      return {
        ...obj[index],
        [current]: this.updateValue(obj[index][current], property.join('.'), target, i)
      }
    }

    if (property.length < 1 && obj.hasOwnProperty(current)) {
      return {
        ...obj,
        [current]: i ? '' : target.value
      };
    }

    return {
      ...obj,
      [current]: this.updateValue(obj[current], property.join('.'), target, i)
    }
  }

  handleChange(e, section, i=null) {
    const properties = e.currentTarget.dataset.prop;

    this.setState({
      [section]: { ...this.updateValue(this.state[section], properties, e.currentTarget, i) }
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
