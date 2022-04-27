import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
  render() {
    return (
      <form>
        <General />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default Form;
