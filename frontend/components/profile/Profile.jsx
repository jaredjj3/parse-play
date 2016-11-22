import React from 'react';

export default class extends React.Component {

  render () {
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
              <h1>Jared Johnson</h1>
              <h2>Software and Chemical Engineer</h2>
              <p>
                I’m an engineer. I thoroughly enjoy taking things apart, learning how they work, and rebuilding them to be better. In the past, I’ve done this with chemical processes. Today, I make user experiences that inspire and change peoples lives. <a href="http://jaredjohnson.me/">Let's connect.</a>
              </p>
              </div>
          </article>
          <article>
            <div className="article-center">
              <h1>I AM AN ARTICLE</h1>
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>I AM AN ARTICLE</h1>
            </div>
          </article>
          <article>
            <div className="article-center">
              <h1>I AM AN ARTICLE</h1>
            </div>
          </article>
        </div>
      </div>
    );
  }
}