import React, { Component } from 'react';
import General from './General';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
class Form extends Component {
  render() {
    const { general, education, experience } = this.props.CV;
    const { addItemHandler, deleteItemHandler, inputChangeHandler } =
      this.props.handlers;
    const { name, email, phone, description } = general;

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
        <ExperienceList
          inputChangeHandler={inputChangeHandler}
          experienceArray={experience}
          addItemHandler={addItemHandler}
          deleteItemHandler={deleteItemHandler}
        />
      </form>
    );
  }
}

export default Form;
