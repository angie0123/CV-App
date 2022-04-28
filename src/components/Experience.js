import React, { Component } from 'react';
import Subheading from './Subheading';
class Experience extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      tasks,
      dateStart,
      dateEnd,
      inputChangeHandler,
    } = this.props;
    return (
      <>
        <Subheading text="Experience" />
        <input
          type="text"
          name="experience companyName"
          value={companyName}
          placeholder="Company Name"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="experience positionTitle"
          value={positionTitle}
          placeholder="Position Title"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="experience tasks"
          value={tasks}
          placeholder="Tasks"
          onChange={inputChangeHandler}
        />
        <div className="dates-container">
          <div className="input-container">
            <label htmlFor="workDateStart">Date Start</label>
            <input
              id="workDateStart"
              type="date"
              name="education dateStart"
              value={dateStart}
              placeholder="Start date"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="input-container">
            <label htmlFor="workDateEnd">Date End</label>
            <input
              id="workDateEnd"
              type="date"
              name="education dateEnd"
              value={dateEnd}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
