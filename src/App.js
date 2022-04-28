import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CV: {
        general: {
          name: '',
          email: '',
          phone: '',
          description: '',
        },
        education: [
          {
            schoolName: '',
            titleOfStudy: '',
            dateOfStudyStart: '',
            dateOfStudyEnd: '',
            id: 0,
          },
        ],
        experienceList: [],
        experience: {
          companyName: '',
          positionTitle: '',
          tasks: '',
          dateStart: '',
          dateEnd: '',
        },
      },
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    const [section, name, id] = event.target.name.split(' ');
    const newState = id
      ? {
          CV: {
            ...this.state.CV,
            [section]: this.state.CV[section].map((item) => {
              if (+item.id === +id) {
                item[name] = event.target.value;
              }
              return item;
            }),
          },
        }
      : {
          CV: {
            ...this.state.CV,
            [section]: {
              ...this.state.CV[section],
              [name]: event.target.value,
            },
          },
        };
    this.setState(newState);
    console.log(newState);
  }

  render() {
    return (
      <Form info={this.state.CV} inputChangeHandler={this.inputChangeHandler} />
    );
  }
}

export default App;
