import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../actions/AppActions';
import LoadingButton from './LoadingButton.react';

class FoldersList extends Component {
  render() {
    const folders = (
        <div>

        </div>);


    return(
      <div className="folders-list">
        <div className="folders-list__wrapper">
          { folders }
        </div>
      </div>
    );
  }

  _logout() {
    this.props.dispatch(logout());
  }
}

FoldersList.propTypes = {
  folders: React.PropTypes.object.isRequired
}

export default FoldersList;
