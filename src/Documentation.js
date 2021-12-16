import React, { Component } from "react";

class Documentation extends Component {
    render() {
        return (
        <section className="hero is-medium">
    <div className="hero-body has-text-centered">
      <h1 className="title is-2">Thoughts, stories, and ideas.</h1>
      <div id="hero-input-group" className="field has-addons has-addons-centered">
        <div className="control">
          <input className="input is-medium" type="text" placeholder="Search..." />
        </div>
        <div className="control">
          <a className="button is-medium is-primary">
            <i className="fal fa-search"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
    );
  }
}

export default Documentation;