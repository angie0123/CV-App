import React, { Component } from 'react';

class Preview extends Component {
  getYear(date) {
    const thisYear = new Date().getFullYear();
    const dateYear = date.substring(0, 4);
    return +dateYear === +thisYear ? 'Present' : dateYear;
  }
  render() {
    const { general, experience, education } = this.props.CV;
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
      const { schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyEnd } =
        edu;
      return (
        <>
          <div className="bold">{schoolName}</div>
          <div className="light">{titleOfStudy}</div>
          <div className="light">
            {this.getYear(dateOfStudyStart)} - {this.getYear(dateOfStudyEnd)}
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
            {positionTitle} | {this.getYear(dateStart)} -{' '}
            {this.getYear(dateEnd)}
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
  }
}

export default Preview;
