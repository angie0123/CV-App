import React from 'react';
import Education from './Education';
import Subheading from './Subheading';

const EducationList = (props) => {
  const { educationArray, addItemHandler, deleteItemHandler } = props;
  const educationList = educationArray.map((ed) => {
    const { schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyEnd } = ed;
    return (
      <li key={ed.id}>
        <Education
          id={ed.id}
          inputChangeHandler={props.inputChangeHandler}
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
      <div className="button primary" name="education" onClick={addItemHandler}>
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
};

export default EducationList;
