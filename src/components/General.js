import React, { Component } from 'react';
import Subheading from './Subheading';
class General extends Component {
  render() {
    const { name, email, phone, description } = this.props;
    return (
      <>
        <Subheading text="Personal Information" />
        <input type="text" placeholder="Name" value={name} />
        <input type="email" placeholder="Email" value={email} />
        <input type="phone" placeholder="Phone number" value={phone} />
        <textarea placeholder="Description" value={description} />
      </>
    );
  }
}

export default General;
