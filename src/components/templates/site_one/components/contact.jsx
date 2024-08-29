import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

// Import JSON data
import contactData from './contact.json';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Load JSON data and set it in state
    setContactInfo(contactData.contact);
  }, []);

  if (!contactInfo) {
    return <div>Loading...</div>; // or a loading spinner
  }

  const { title, subtitle, about } = contactInfo;

  return (
    <div>
      <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">{subtitle}</span>
                <h2 className="title">{title}</h2>
              </div>
            </div>
          </div>

          <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div className="col-lg-5">
              <div className="contact-about-area">
                <div className="thumbnail">
                  <img src={about.image} alt="contact-img" />
                </div>
                <div className="title-area">
                  <h4 className="title">{about.name}</h4>
                  <span>{about.position}</span>
                </div>
                <div className="description">
                  <p>{about.description}</p>
                  <span className="phone">
                    Phone: <a href={`tel:${about.phone}`}>{about.phone}</a>
                  </span>
                  <span className="mail">
                    Email: <a href={`mailto:${about.email}`}>{about.email}</a>
                  </span>
                </div>
                <div className="social-area">
                  <div className="name">FIND WITH ME</div>
                  <div className="social-icone">
                    {about.socialLinks.map((link, index) => {
                      const IconComponent = {
                        FaFacebookSquare,
                        FaInstagram,
                        CiLinkedin
                      }[link.icon];
                      return (
                        <a href={link.url} key={index}>
                          <IconComponent />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div data-aos-delay="600" className="col-lg-7 contact-input">
              <div className="contact-form-wrapper">
                <div className="introduce">
                  <form
                    className="rnt-contact-form rwt-dynamic-form row"
                    id="contact-form"
                    method="POST"
                    action="mail.php"
                  >
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="contact-name">Your Name</label>
                        <input
                          className="form-control form-control-lg"
                          name="contact-name"
                          id="contact-name"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone Number</label>
                        <input
                          className="form-control"
                          name="contact-phone"
                          id="contact-phone"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="contact-email">Email</label>
                        <input
                          className="form-control form-control-sm"
                          id="contact-email"
                          name="contact-email"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          className="form-control form-control-sm"
                          id="subject"
                          name="subject"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="contact-message">Your Message</label>
                        <textarea
                          name="contact-message"
                          id="contact-message"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        id="submit"
                        className="rn-btn"
                      >
                        <span>SEND MESSAGE</span>
                        <i data-feather="arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
