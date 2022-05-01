import React from 'react';
import Subheading from './Subheading';
const General = (props) => {
  const { name, email, phone, description, inputChangeHandler } = props;
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
};

export default General;
