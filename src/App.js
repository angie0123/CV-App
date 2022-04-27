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
          dateOfStudyStart: '',
          dateOfStudyEnd: '',
        },
        experienceList: [],
        experience: {
          companyName: '',
          positionTitle: '',
          tasks: '',
          dateOfEmploymentStart: '',
          dateOfEmploymentEnd: '',
        },
      },
    };
  }

  render() {
    return <Form info={this.state.CV} />;
  }
}

export default App;
