import React from 'react';
import General from './General';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
const Form = (props) => {
  const { general, education, experience } = props.CV;
  const {
    addItemHandler,
    deleteItemHandler,
    inputChangeHandler,
    submitHandler,
  } = props.handlers;
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
      <div className="button submit" onClick={submitHandler}>
        Submit
      </div>
    </form>
  );
};

export default Form;
