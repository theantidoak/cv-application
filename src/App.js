import React, { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import { Mainpage } from './components/Mainpage';
import './styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: {
        url: '',
        editing: false
      },
      contact: {
        address: '1 Example Address',
        number: '(xxx) xxx - xxxx',
        email: 'example@example.com',
        website: 'www.example.com',
        editing: false
      },
      skill: {
        skills: ['skill 1', 'skill 2', 'skill 3'],
        editing: false
      },
      language: {
        languages: ['English', 'French', 'Spanish'],
        editing: false
      },
      about: {
        name: 'Your Name',
        position: 'Your Position',
        description: 'About You',
        editing: false
      },
      education: {
        schools: [
          {
            dates: '2012 - 2016',
            degree: 'Your Degree',
            school: 'Your School',
            location: 'City',
            awards: 'Awards/Minor'
          }
        ],
        keys: ['dates', 'degree', 'school', 'location', 'awards'],
        editing: false
      },
      experience: {
        jobs: [
          {
            dates: '2016 - 2018',
            position: 'Your Position',
            company: 'Your Company',
            location: 'City',
            description: 'Your Responsibilities'
          }
        ],
        keys: ['dates', 'position', 'company', 'location', 'description'],
        editing: false
      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateValue(obj, properties, target, i, remove) {
    const [current, ...property] = properties.split('.');

    if (remove) {
      const index = +target.id.slice(target.id.lastIndexOf('-') + 1);
      obj[current].splice(index, 1);
      return obj;
    }

    if (i != null) {
      const newObj = obj.keys ? Object.fromEntries(obj.keys.map((key) => [key, ''])) : '';
      obj[current].splice(obj[current].length, 0, newObj);
      return obj;
    }

    if (Array.isArray(obj) || (property.length < 1 && Array.isArray(obj[current]))) {
      const index = +target.id.slice(target.id.lastIndexOf('-') + 1);

      if (property.length < 1 && Array.isArray(obj[current])) {
        obj[current].splice(obj[current][index], 1, target.value);
        return obj;
      }

      if (property.length < 1 && obj[index].hasOwnProperty(current)) {
        obj.splice(index, 1, { ...obj[index], [current]: target.value })
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
        [current]: target.value
      };
    }

    return {
      ...obj,
      [current]: this.updateValue(obj[current], property.join('.'), target, i)
    }
  }

  handleChange(e, section, i=null, remove=null) {
    const properties = e.currentTarget.dataset.prop;

    this.setState({
      [section]: { ...this.updateValue(this.state[section], properties, e.currentTarget, i, remove) }
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
