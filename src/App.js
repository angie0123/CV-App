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
        educationList: [],
        education: {
          schoolName: '',
          titleOfStudy: '',
          dateofStudyStart: '',
          dateofStudyEnd: '',
        },
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
    const [section, name] = event.target.name.split(' ');
    this.setState({
      CV: {
        ...this.state.CV,
        [section]: {
          ...this.state.CV[section],
          [name]: event.target.value,
        },
      },
    });
  }

  render() {
    return (
      <Form info={this.state.CV} inputChangeHandler={this.inputChangeHandler} />
    );
  }
}

export default App;
