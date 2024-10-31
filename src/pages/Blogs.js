import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blogs = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "linear-gradient(135deg, #4a90e2, #6a82fb)" }}>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Future Content */}
      <div className="container mt-4">
        <h2>Blogs Page</h2>
        <p>Content will be added here in the future.</p>
      </div>
    </div>
  );
};

export default Blogs;
