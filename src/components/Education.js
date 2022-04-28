import React, { Component } from 'react';
import Subheading from './Subheading';
class Education extends Component {
  render() {
    const {
      schoolName,
      titleOfStudy,
      dateOfStudyStart,
      dateofStudyEnd,
      inputChangeHandler,
      id,
    } = this.props;
    return (
      <>
        <Subheading text="Education" />
        <input
          type="text"
          name={`education schoolName ${id}`}
          value={schoolName}
          placeholder="School name"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name={`education titleOfStudy ${id}`}
          value={titleOfStudy}
          placeholder="Title of study"
          onChange={inputChangeHandler}
        />
        <div className="dates-container">
          <div className="input-container">
            <label htmlFor="studyDateStart">Date Start</label>
            <input
              id="studyDateStart"
              type="date"
              name={`education dateOfStudyStart ${id}`}
              value={dateOfStudyStart}
              placeholder="Start date"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="input-container">
            <label htmlFor="studyDateEnd">Date End</label>
            <input
              id="studyDateEnd"
              type="date"
              name={`education dateOfStudyEnd ${id}`}
              value={dateofStudyEnd}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Education;
