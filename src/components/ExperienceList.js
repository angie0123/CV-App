import React from 'react';
import Experience from './Experience';
import Subheading from './Subheading';
const ExperienceList = (props) => {
  const {
    inputChangeHandler,
    addItemHandler,
    deleteItemHandler,
    experienceArray,
  } = props;

  const experienceList = experienceArray.map((exp) => {
    const { companyName, positionTitle, tasks, dateStart, dateEnd } = exp;
    return (
      <li key={exp.id}>
        <Experience
          id={exp.id}
          inputChangeHandler={inputChangeHandler}
          companyName={companyName}
          positionTitle={positionTitle}
          tasks={tasks}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      </li>
    );
  });
  return (
    <>
      <Subheading text="Experience" />
      <ul>{experienceList}</ul>
      <div
        className="button primary"
        name="experience"
        onClick={addItemHandler}
      >
        Add
      </div>
      {experienceArray.length > 0 && (
        <div
          className="button danger"
          name="experience"
          onClick={deleteItemHandler}
        >
          Delete
        </div>
      )}
    </>
  );
};

export default ExperienceList;
