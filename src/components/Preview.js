import React from 'react';

const Preview = (props) => {
  const getYear = (date) => {
    const thisYear = new Date().getFullYear();
    const dateYear = date.substring(0, 4);
    return +dateYear === +thisYear ? 'Present' : dateYear;
  };

  console.log(props);

  const { general, experience, education } = props.CV;
  const { name, email, phone, description } = general;
  const generalSection = (
    <div className="header">
      <div className="bold large-font">{name}</div>
      <div>
        {email} | {phone}{' '}
      </div>
      <div className="light">{description}</div>
    </div>
  );

  const educationList = education.map((edu) => {
    const { schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyEnd } = edu;
    return (
      <>
        <div className="bold">{schoolName}</div>
        <div className="light">{titleOfStudy}</div>
        <div className="light">
          {getYear(dateOfStudyStart)} - {getYear(dateOfStudyEnd)}
        </div>
      </>
    );
  });

  const experienceList = experience.map((exp) => {
    const { companyName, positionTitle, tasks, dateStart, dateEnd } = exp;
    return (
      <>
        <div className="bold">{companyName}</div>
        <div className="light">
          {positionTitle} | {getYear(dateStart)} - {getYear(dateEnd)}
        </div>
        <div>{tasks}</div>
      </>
    );
  });
  return (
    <>
      <div className="resume">
        {generalSection}
        {education.length > 0 && (
          <>
            <div className="header2">Education</div>
            {educationList}
          </>
        )}
        {experience.length > 0 && (
          <>
            <div className="header2">Experience</div>
            {experienceList}
          </>
        )}
      </div>
    </>
  );
};

export default Preview;
