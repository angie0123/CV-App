import React, { Component } from 'react';
class Experience extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      tasks,
      dateStart,
      dateEnd,
      inputChangeHandler,
      id,
    } = this.props;
    return (
      <>
        <input
          type="text"
          name={`experience companyName ${id}`}
          value={companyName}
          placeholder="Company Name"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name={`experience positionTitle ${id}`}
          value={positionTitle}
          placeholder="Position Title"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name={`experience tasks ${id}`}
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
              name={`experience dateStart ${id}`}
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
              name={`experience dateEnd ${id}`}
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
