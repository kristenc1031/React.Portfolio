import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for a collaboration.
              </p>
              <p className="lead">
              kristenc1031@gmail.com | 402.920.0781
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="footer-widgets">
              <div className="widget">
                <h4>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}