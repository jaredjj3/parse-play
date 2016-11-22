import React from 'react';

export default () => {
  return(
    <div className="home-container">
      <section className="cover-picture-container">
        <div className="author-picture-stretcher">
          <div className="author-picture-container">
            <img
              src="assets/author.jpg"
              alt="author"
              className="author-picture"
            />
          </div>
        </div>
      </section>
      <article>
        <h1>About this project</h1>
      </article>
      <article>
        <h1>About the author</h1>
      </article>
    </div>
  );
};