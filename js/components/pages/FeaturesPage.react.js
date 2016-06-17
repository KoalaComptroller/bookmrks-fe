import React, { Component } from 'react';
import { Link } from 'react-router';

class FeaturesPage extends Component {
  render() {
    return(
      <article>
        <h1>Bookmrks Features.</h1>
        <Link to="/" className="btn">Home</Link>
        <section className="col-sm-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="col-sm-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <div className="features__half">
          <h2>Coming soon</h2>
          <ul className="features__list">
            <li><span className="features__feature_name">Lorem Ipsum</span> dolor sit amet</li>
            <li><span className="features__feature_name">Lorem Ipsum</span> dolor sit amet</li>
          </ul>
        </div>
      </article>
    );
  }
}

export default FeaturesPage;
