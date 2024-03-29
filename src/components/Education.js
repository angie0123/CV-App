import React from 'react';
const Education = (props) => {
  const {
    schoolName,
    titleOfStudy,
    dateOfStudyStart,
    dateOfStudyEnd,
    inputChangeHandler,
    id,
  } = props;
  return (
    <>
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
            value={dateOfStudyEnd}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Education;
