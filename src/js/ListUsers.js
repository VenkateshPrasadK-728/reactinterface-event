import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListUsers extends Component {
  render() {
    return (
      <div className="register-list item-list mb-3">
        {this.props.registerUsers.map(item => (
          <div className="user-list col media py-3" key={item.eventId}>
           

            <div className="user-info media-body">
              <div className="user-head">
                <span
                  className="user-name"
                  contentEditable
                  suppressContentEditableWarnin
                >
                  {item.eventId}--{item.userName}
                </span>
                <span>                  </span>
                <span className="event-date ml-auto"    >
                  <Moment
                    date={item.eventDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="MMM-d h:mma"
                      />
                </span>
              </div>

              <div className="event-name">
                <span className="label-item">Event Name: </span>
                  {item.eventName}
              </div>
              <div
                className="phone-no"
                contentEditable
              >
                Phone No: 
                {item.phoneNo}
              </div>
            </div>
            <div className="update-info">
              <button
                className="update-btn btn btn-sm btn-danger"
                
              >
                 Update
              </button>
              &nbsp;&nbsp;
            </div>
            <span>   </span>
            <div className="mr-3">
              <button
                className="user-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteUser(item)}
              >
               Delete
              </button>
            </div>
          </div>
          
        ))}
      </div>
    );
  }
}

export default ListUsers;
