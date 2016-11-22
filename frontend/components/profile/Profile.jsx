import React from 'react';

export default class extends React.Component {

  render () {
    const {
      firstName,
      lastName,
      subtitle,
      summary
    } = this.props;
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
              <h1>{`${firstName} ${lastName}`}</h1>
              <h2>{subtitle}</h2>
              <p>
                {summary}
              </p>
              </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Contact</h1>
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Experience</h1>
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Education</h1>
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>Links</h1>
            </div>
          </article>
        </div>
      </div>
    );
  }
}