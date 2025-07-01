import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import axios from 'axios';
import { showToast } from './PopupMessage.jsx';

const ContactUs = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user_api/contact/post-message', {
        first_name: firstname,
        last_name: lastname,
        email: email,
        number: number,
        message: comment,
      });

      if (response.data.status === 'success') {
        showToast('Thank You for Contact with me', 'success');
        setFirstname('');
        setLastname('');
        setEmail('');
        setNumber('');
        setComment('');
      } else {
        showToast('Something went wrong.', 'error');
      }
    } catch (error) {
      showToast('Failed to send message.', 'error');
    }
  };

  return (
    <section id='contact' className="py-5" style={{ background: 'black' }}>
      <h3 className="text-center mb-5 fs-2 fs-md-1"> Contact Me</h3>

      <div className="container">
        <div className="row g-5 align-items-stretch">
          {/* Contact Form */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div className="p-5 rounded-4 shadow" style={{ backgroundColor: 'rgb(47 45 45 / 80%)' }}>
              <h2 className="text-center text-primary mb-4 fs-3 fs-md-2">Send a Message 💌</h2>

              <form onSubmit={handleSubmit}>
                {[
                  { label: 'First Name*', value: firstname, setter: setFirstname, type: 'text', name: 'firstname', placeholder: 'Enter your first name' },
                  { label: 'Last Name*', value: lastname, setter: setLastname, type: 'text', name: 'lastname', placeholder: 'Enter your last name' },
                  { label: 'Email*', value: email, setter: setEmail, type: 'email', name: 'email', placeholder: 'Enter your email address' },
                  { label: 'Phone Number*', value: number, setter: setNumber, type: 'number', name: 'number', placeholder: 'Enter your phone number' },
                ].map((field, index) => (
                  <div className="mb-3" key={index}>
                    <label className="form-label fs-6 fs-md-5">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      className="form-control shadow-sm input-focus-glow"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}

                <div className="mb-3">
                  <label className="form-label fs-6 fs-md-5">Comments/Questions*</label>
                  <textarea
                    className="form-control shadow-sm input-focus-glow"
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-lg btn-gradient shadow-sm hover-scale fs-5">
                    ✉️ Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map and Info */}
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="p-4 rounded-4 shadow h-100" style={{ backgroundColor: 'rgb(47 45 45 / 80%)' }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.873398507075!2d88.42641010796611!3d22.96594116057565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f9b8e74f9b%3A0x8e2455015f7e4e20!2sUniversity%20of%20Kalyani!5e0!3m2!1sen!2sin!4v1634267308768!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
              ></iframe>

              <div className="mt-4">
                <h4 className="text-gradient fw-bold fs-4">📍 Contact Info</h4>
                <ul className="list-unstyled mt-3 text-light fs-6">
                  <li className="mb-2">
                    <i className="bi bi-geo-alt-fill text-light me-2"></i>
                    <strong>Address:</strong> University of Kalyani, Nadia 741235
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-telephone-fill text-success me-2"></i>
                    <strong>Call:</strong>{' '}
                    <a href="tel:+917047556538" className="text-decoration-none text-light">
                      +91 7047556538
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:akashshaikh1712@gmail.com" className="text-decoration-none text-light">
                      akashshaikh1712@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Text + Style Enhancements */}
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #ff416c, #ff4b2b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-gradient {
          background: linear-gradient(to right, #ff416c, #ff4b2b);
          color: white;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-gradient:hover {
          box-shadow: 0 4px 15px rgba(255, 75, 43, 0.5);
          transform: scale(1.05);
        }

        .input-focus-glow:focus {
          border-color: #ff4b2b;
          box-shadow: 0 0 8px rgba(255, 75, 43, 0.6);
        }

        .hover-scale:hover {
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          h2, h3, h4 {
            font-size: 1.6rem !important;
          }
          .form-label, .btn, .fs-5, .fs-6 {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 576px) {
          h2, h3, h4 {
            font-size: 1.4rem !important;
          }
          .btn {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
