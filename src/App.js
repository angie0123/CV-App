import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import Nav from './components/Nav';
import Footer from './components/Footer';
const App = () => {
  const initialCV = {
    general: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
    education: [
      {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudyStart: '',
        dateOfStudyEnd: '',
        id: 0,
      },
    ],
    experience: [
      {
        companyName: '',
        positionTitle: '',
        tasks: '',
        dateStart: '',
        dateEnd: '',
        id: 0,
      },
    ],
  };

  const [CV, setCV] = useState(initialCV);
  const [displayCV, setDisplayCV] = useState(false);

  const inputChangeHandler = (event) => {
    const [section, name, id] = event.target.name.split(' ');
    const newState = id
      ? {
          ...CV,
          [section]: CV[section].map((item) => {
            if (+item.id === +id) {
              item[name] = event.target.value;
            }
            return item;
          }),
        }
      : {
          ...CV,
          [section]: {
            ...CV[section],
            [name]: event.target.value,
          },
        };
    setCV(newState);
  };

  const addItemHandler = (event) => {
    const section = event.target.getAttribute('name');
    let newItem;
    if (section === 'education') {
      newItem = {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudyStart: '',
        dateOfStudyEnd: '',
        id: CV[section].length,
      };
    }
    if (section === 'experience') {
      newItem = {
        companyName: '',
        positionTitle: '',
        tasks: '',
        dateStart: '',
        dateEnd: '',
        id: CV[section].length,
      };
    }
    setCV({
      ...CV,
      [section]: CV[section].concat(newItem),
    });
  };
  const deleteItemHandler = (event) => {
    const section = event.target.getAttribute('name');
    setCV({
      ...CV,
      [section]: CV[section].slice(0, -1),
    });
  };
  const togglePreview = () => {
    setDisplayCV(!displayCV);
  };

  const form = (
    <Form
      CV={CV}
      handlers={{
        addItemHandler,
        deleteItemHandler,
        inputChangeHandler,
        submitHandler: togglePreview,
      }}
    />
  );
  const finalCV = (
    <>
      <div className="button prev" onClick={togglePreview}>
        Edit
      </div>
      <Preview CV={CV} />
    </>
  );

  return (
    <>
      <Nav />
      {displayCV ? finalCV : form}
      <Footer />
    </>
  );
};

export default App;
