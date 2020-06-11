import React, { Component } from 'react';
import '../css/App.css';

import Register from './Register';
import ListUsers from './ListUsers';

import DataService from './service'

import { findIndex, without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      registerusers: [],
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.registerForm = this.registerForm.bind(this);

  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  registerForm(apt) {
    let temp = this.state.registerusers;
    apt.userId = this.state.lastIndex;
    temp.push(apt);
    this.setState({
      registerusers: temp,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteUser(apt) {
    let temp = this.state.registerusers;
    temp = without(temp, apt);

    this.setState({
      registerusers: temp
    });
  }

  componentDidMount() {
        //fetch(DataService.retrieveAlldetails())
        //comsole.log(DataService.retrieveAlldetails())
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const temp = result.map(item => {
          item.userId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          registerusers: temp
        });
      });
  }



  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <Register
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  registerForm={this.registerForm}
                />
                <ListUsers
                  registerUsers={this.state.registerusers}
                  deleteUser={this.deleteUser}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
