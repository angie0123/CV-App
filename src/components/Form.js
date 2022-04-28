import React, { Component } from 'react';
import General from './General';
import Experience from './Experience';
import EducationList from './EducationList';
class Form extends Component {
  render() {
    const { general, education, experience } = this.props.info;
    const { name, email, phone, description } = general;
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
        <EducationList info={education} />
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
