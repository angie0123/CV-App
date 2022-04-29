import React, { Component } from 'react';

class Preview extends Component {
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
            {dateOfStudyStart} - {dateOfStudyEnd}
          </div>
        </>
      );
    });

    //     experience: [
    //       {
    //         companyName: '',
    //         positionTitle: '',
    //         tasks: '',
    //         dateStart: '',
    //         dateEnd: '',
    //         id: 0,
    //       },
    //     ],
    const experienceList = experience.map((exp) => {
      const { companyName, positionTitle, tasks, dateStart, dateEnd } = exp;
      return (
        <>
          <div className="bold">{companyName}</div>
          <div className="light">
            {positionTitle} | {dateStart} - {dateEnd}
          </div>
          <div>{tasks}</div>
        </>
      );
    });
    return (
      <>
        <div className="resume">
          {generalSection}
          <div className="header2">Education</div>
          {educationList}
          <div className="header2">Experience</div>
          {experienceList}
        </div>
      </>
    );
  }
}

export default Preview;
