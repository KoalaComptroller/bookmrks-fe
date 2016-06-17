import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../actions/AppActions';
import LoadingButton from './LoadingButton.react';

class BookmarkList extends Component {
  render() {
    const bookmarks = (
        <div>

        </div>);


    return(
      <div className="bookmarks-list">
        <div className="bookmarks-list__wrapper">
          { bookmarks }
        </div>
      </div>
    );
  }

  _logout() {
    this.props.dispatch(logout());
  }
}

BookmarkList.propTypes = {
  bookmarks: React.PropTypes.object.isRequired
}

export default BookmarkList;
