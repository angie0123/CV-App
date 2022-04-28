import React, { Component } from 'react';
import Subheading from './Subheading';
class General extends Component {
  render() {
    const { name, email, phone, description, inputChangeHandler } = this.props;
    return (
      <>
        <Subheading text="Personal Information" />
        <input
          name="general name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={inputChangeHandler}
        />
        <input
          name="general email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={inputChangeHandler}
        />
        <input
          name="general phone"
          type="phone"
          placeholder="Phone number"
          value={phone}
          onChange={inputChangeHandler}
        />
        <textarea
          name="general description"
          placeholder="Description"
          value={description}
          onChange={inputChangeHandler}
        />
      </>
    );
  }
}

export default General;
