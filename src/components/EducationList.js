import React, { Component } from 'react';
import Education from './Education';
import Subheading from './Subheading';

class EducationList extends Component {
  render() {
    const { educationArray, addItemHandler, deleteItemHandler } = this.props;
    const educationList = educationArray.map((ed) => {
      const { schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyEnd } = ed;
      return (
        <li key={ed.id}>
          <Education
            id={ed.id}
            inputChangeHandler={this.props.inputChangeHandler}
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudyStart={dateOfStudyStart}
            dateOfStudyEnd={dateOfStudyEnd}
          />
        </li>
      );
    });
    return (
      <>
        <Subheading text="Education" />
        <ul>{educationList}</ul>
        <div
          className="button primary"
          name="education"
          onClick={addItemHandler}
        >
          Add
        </div>
        {educationArray.length > 0 && (
          <div
            className="button danger"
            name="education"
            onClick={deleteItemHandler}
          >
            Delete
          </div>
        )}
      </>
    );
  }
}

export default EducationList;
