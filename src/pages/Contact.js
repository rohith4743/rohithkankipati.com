import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import img from '../assets/IMG_3331.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://0ib2x3isz4.execute-api.us-east-1.amazonaws.com/prod/contact',
        formData
      );
      if (response.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

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


      {/* Contact Component */}
      <div className="contact-container container">
        <div className="row contact-content g-0">
          {/* Contact Image */}
          <div className="col-md-4 contact-image">
            <img src={img} alt="Contact Person" />
            <div className="contact-info">
              <h5>Contact Information</h5>
              <p><FontAwesomeIcon icon={faEnvelope} /> rkankipati86@gmail.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> +1 443 756 7469</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Baltimore, MD</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-8 contact-form">
            <h2>Get in touch with me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group row g-0">
                <div className="col-12 col-md-6 field-container">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 field-container">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">Send Message</button>
            </form>
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
