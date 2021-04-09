import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of my awesome projects!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters">
          {resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://github.com/Jdouville8/DUFullStack-Project1">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div onClick={() => { window.open (item.url) }} className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}