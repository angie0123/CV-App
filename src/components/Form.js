import React, { Component } from 'react';
import General from './General';
import Experience from './Experience';
import EducationList from './EducationList';
class Form extends Component {
  render() {
    const { general, education, experience } = this.props.CV;
    const { addItemHandler, deleteItemHandler, inputChangeHandler } =
      this.props.handlers;
    const { name, email, phone, description } = general;
    const { companyName, positionTitle, tasks, dateStart, dateEnd } =
      experience;

    return (
      <form>
        <General
          inputChangeHandler={inputChangeHandler}
          name={name}
          email={email}
          phone={phone}
          description={description}
        />
        <EducationList
          inputChangeHandler={inputChangeHandler}
          educationArray={education}
          addItemHandler={addItemHandler}
          deleteItemHandler={deleteItemHandler}
        />
        <Experience
          inputChangeHandler={inputChangeHandler}
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
