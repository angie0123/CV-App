import React, { Component } from 'react';
import Education from './Education';
import Subheading from './Subheading';

class EducationList extends Component {
  render() {
    const educationAll = this.props.info.map((ed) => {
      const { schoolName, titleOfStudy, dateOfStudyStart, dateofStudyEnd } = ed;
      return (
        <li key={ed.id}>
          <Education
            id={ed.id}
            inputChangeHandler={this.props.inputChangeHandler}
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudyStart={dateOfStudyStart}
            dateofStudyEnd={dateofStudyEnd}
          />
        </li>
      );
    });
    return (
      <>
        <Subheading text="Education" />
        <ul>{educationAll}</ul>
      </>
    );
  }
}

export default EducationList;
