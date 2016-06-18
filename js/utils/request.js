import request from 'reqwest';

import when from 'when';

import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';

import LoginActions from '../actions/LoginActions';
/**
 * Fake XMLHttpRequest wrapper with a syntax similar to the much used request.js
 * @type {Object}
 */
var request = {
  /**
   * Pretends to post to a remote server with fake network latency
   * @param  {string}    endpoint The endpoint of the server that should be contacted
   * @param  {?object}   data     The data that should be transferred to the server
   * @param  {?function} callback Called after the server successfully did it's thing
   */
  post(endpoint, data, callback) {
    // Delay the call by a random amount between 100ms and 2000ms
    // to simulate network latency

    setTimeout(() => {
      switch (endpoint) {
        case '/login':
          this.login(data.username, data.password);
          break;
        case '/register':
          this.register(data.username, data.password);
          break;
        case '/logout':
          this.logout(callback);
          break;
        default:
          break;
      }
    }, (Math.random() * 2000) + 100);
  }

  login(username, password) {
    return this.handleAuth(when(request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    })));
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(username, password, extra) {
    return this.handleAuth(when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password, extra
      }
    })));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.id_token;
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

module.exports = request;
