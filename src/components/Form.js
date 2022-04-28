import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
  render() {
    const { general, education, experience } = this.props.info;
    const { name, email, phone, description } = general;
    const { schoolName, titleOfStudy, dateOfStudyStart, dateofStudyEnd } =
      education;
    const { companyName, positionTitle, tasks, dateStart, dateEnd } =
      experience;
    return (
      <form>
        <General
          inputChangeHandler={this.props.inputChangeHandler}
          name={name}
          email={email}
          phone={phone}
          description={description}
        />
        <Education
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          dateOfStudyStart={dateOfStudyStart}
          dateofStudyEnd={dateofStudyEnd}
        />
        <Experience
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
