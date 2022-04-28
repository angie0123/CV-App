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
  }

  render() {
    return <Form info={this.state.CV} />;
  }
}

export default App;
