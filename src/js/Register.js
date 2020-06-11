import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      eventName: '',
      eventDate: '',
      regNo: '',
      phoneNo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let temp = {
      userName: this.state.userName,
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      regNo: this.state.regNo,
      phoneNo: this.state.phoneNo
    };

    this.props.registerForm(temp);

    this.setState({
      userName: '',
      eventName: '',
      eventDate: '',
      regNo: '',
      phoneNo: ''
    });
    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'register-user')
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Register
        </div>

        <div className="card-body">
          <form id="registerForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="userName"
                readOnly
              >
                Enter Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  placeholder="Your Name"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="eventName"
              >
                Event Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  placeholder="Event Name"
                  value={this.state.eventName}
                  onChange={this.handleChange}
                />

              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="eventDate"
              >
                Event Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="eventDate"
                  id="eventDate"
                  value={this.state.eventDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="regNo"
              >
                Reg No
              </label>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="regNo"
                  id="regNo"
                  value={this.state.regNo}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="phoneNo">
                Phone No
              </label>
              <div className="col-md-10">
                <input
                type="text"
                  className="form-control"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Phone No"
                  value={this.state.phoneNo}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
