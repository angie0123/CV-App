import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CV: {
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
      },
      displayCV: false,
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.addItemHandler = this.addItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  inputChangeHandler(event) {
    const [section, name, id] = event.target.name.split(' ');
    const newState = id
      ? {
          CV: {
            ...this.state.CV,
            [section]: this.state.CV[section].map((item) => {
              if (+item.id === +id) {
                item[name] = event.target.value;
              }
              return item;
            }),
          },
        }
      : {
          CV: {
            ...this.state.CV,
            [section]: {
              ...this.state.CV[section],
              [name]: event.target.value,
            },
          },
        };
    this.setState(newState);
  }

  addItemHandler(event) {
    const section = event.target.getAttribute('name');
    let newItem;
    if (section === 'education') {
      newItem = {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudyStart: '',
        dateOfStudyEnd: '',
        id: this.state.CV[section].length,
      };
    }
    if (section === 'experience') {
      newItem = {
        companyName: '',
        positionTitle: '',
        tasks: '',
        dateStart: '',
        dateEnd: '',
        id: this.state.CV[section].length,
      };
    }
    this.setState({
      CV: {
        ...this.state.CV,
        [section]: this.state.CV[section].concat(newItem),
      },
    });
  }

  deleteItemHandler(event) {
    const section = event.target.getAttribute('name');
    this.setState({
      CV: {
        ...this.state.CV,
        [section]: this.state.CV[section].slice(0, -1),
      },
    });
  }

  togglePreview() {
    this.setState({
      displayCV: !this.state.displayCV,
    });
  }

  render() {
    const form = (
      <Form
        CV={this.state.CV}
        handlers={{
          addItemHandler: this.addItemHandler,
          deleteItemHandler: this.deleteItemHandler,
          inputChangeHandler: this.inputChangeHandler,
          submitHandler: this.togglePreview,
        }}
      />
    );
    const finalCV = (
      <>
        <div className="button prev" onClick={this.togglePreview}>
          Edit
        </div>
        <Preview CV={this.state.CV} />
      </>
    );
    return <>{this.state.displayCV ? finalCV : form}</>;
  }
}

export default App;
