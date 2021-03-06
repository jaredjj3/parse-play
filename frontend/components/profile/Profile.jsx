import React from 'react';

import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

export default class extends React.Component {

  render () {
    const {
      contact,
      education,
      experience,
      general,
      skills
    } = this.props.profile;
    return(
      <div className="profile-container">
        <section className="alt-cover-picture-container"></section>
        <div className="articles-container">
          <article>
            <div className="article-left">
              <div className="author-picture-container">
                <a href="http://jaredjohnson.me/">
                  <img src="assets/author.jpg" alt="portfolio" />
                </a>
              </div>
            </div>
            <div className="article-right">
              <h1>{`${general.firstName} ${general.lastName}`} <i className="green material-icons">check_circle</i></h1>
              <h2>{general.subtitle}</h2>
              <h3>
                <a 
                  href={`mailto:${general.email}?Subject=Jared%2C%20you%27re%20hired!`}
                >
                  {general.email}
                </a>
              </h3>
              <h3>{general.phone}</h3>
              <p>
                {general.summary}
              </p>
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Experience</h1>
              <Experience experience={experience} />
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Education</h1>
              <Education education={education} />
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Skills</h1>
              <Skills skills={skills} />
            </div>
          </article>
        </div>
      </div>
    );
  }
}