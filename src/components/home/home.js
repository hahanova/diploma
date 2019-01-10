import React, { Component } from 'react';

import 'styles/index.css';
import generatorPic from './images/generator_invisible.png';
import kittyPic from './images/kitty.jpg';

export class Home extends Component {
  render() {
    return (
      <main className="main">
        <section className="section">
          <header className="heading">
            <h2>Welcome</h2>
          </header>
          <div className="paragraph">
            <p className="paragraph__description welcome-description">
              Most of the code in UVM models is repeated every time from project to project.
              Proceeding from the previous experience associated with the daily routine,
              there was suggested a solution to develop code templates,
              based on which, it will be pretty simple to generate any elements of the verification environment.
            </p>
            <div className="paragraph_section">
              <div className="paragraph__pic">
                <img src={generatorPic} alt="generator-icon" />
              </div>
              <div>
                <h3 className="heading heading_small">To generate file:</h3>
                <p className="paragraph__description">
                  Fill up Environment and Agent Form. Remember that "config" field is optional and you can add so many agent as you want.
                </p>
              </div>
            </div>

            <div className="paragraph_section">
              <div>
                <h3 className="heading heading_small">To create transaction / interface / sequence:</h3>
                <p className="paragraph__description">
                  Fill up all neccessary fields. Remember that "code" field is optional (it is for additional configs).
                  Also you can add many fields.
                </p>
              </div>
              <div className="paragraph__pic">
                <img src={kittyPic} alt="generator-icon" />
              </div>
            </div>
            <p className="paragraph__description author text-center">
              The web-service was developed by Anastasia Hahanova for thesis. <br/> 2019.
            </p>
          </div>
        </section>
      </main >
    );
  }
}
