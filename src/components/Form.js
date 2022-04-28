import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
  render() {
    const { general, education, experience } = this.props.info;
    const { name, email, phone, description } = general;
    const { companyName, positionTitle, tasks, dateStart, dateEnd } =
      experience;

    const educationAll = education.map((ed) => {
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
      <form>
        <General
          inputChangeHandler={this.props.inputChangeHandler}
          name={name}
          email={email}
          phone={phone}
          description={description}
        />
        <ul>{educationAll}</ul>
        <Experience
          inputChangeHandler={this.props.inputChangeHandler}
          companyName={companyName}
          positionTitle={positionTitle}
          tasks={tasks}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      </form>
    );
  }
}

export default Form;
