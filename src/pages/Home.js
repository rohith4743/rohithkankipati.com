// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="jumbotron">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I’m a [Your Profession], passionate about creating web applications and solving problems with code.
        </p>
        <p>
          <a href="#projects" className="btn btn-primary">View My Projects</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
