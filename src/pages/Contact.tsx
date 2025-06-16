import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, Instagram } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Our Office",
      details: ["456 Marine Drive", "Colombo 03, Sri Lanka"],
      action: null
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["+94 112 987 654", "+94 77 123 4567"],
      action: "tel:+94112987654"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["info@skyhomes.lk", "sales@skyhomes.lk"],
      action: "mailto:info@skyhomes.lk"
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: By Appointment"],
      action: null
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200" 
            alt="Contact us" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">Let's Connect to Build Your Future</h1>
            <p className="hero-subtitle">
              Ready to find your dream property or sell your land? Our expert team is here to help. 
              Get in touch today and let's make your real estate goals a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Multiple ways to reach our dedicated team of real estate professionals
            </p>
          </motion.div>

          <div className="grid grid-2 contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <h3 className="contact-title">{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="contact-detail">
                      {info.action ? (
                        <a href={info.action} className="contact-link">
                          {detail}
                        </a>
                      ) : (
                        <span>{detail}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section section-light">
        <div className="container">
          <div className="contact-section-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-form card">
                <h3>Send Us a Message</h3>
                <p>Have a question or need more information? Fill out the form below and we'll respond promptly.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us how we can help you with your real estate needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              className="map-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="map-section card">
                <h3>Find Our Office</h3>
                <div className="map-placeholder">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400"
                    alt="Office location map"
                  />
                  <div className="map-overlay">
                    <MapPin size={24} />
                    <div>
                      <strong>SkyHomes Head Office</strong>
                      <p>456 Marine Drive, Colombo 03</p>
                    </div>
                  </div>
                </div>
                
                <div className="location-details">
                  <h4>Easy to Reach</h4>
                  <ul>
                    <li>5 minutes from Colombo Fort Railway Station</li>
                    <li>Direct bus routes from all major areas</li>
                    <li>Ample parking available</li>
                    <li>Wheelchair accessible building</li>
                  </ul>
                </div>
              </div>

              <div className="social-section card">
                <h3>Follow Us</h3>
                <p>Stay updated with the latest properties and market insights on our social media channels.</p>
                
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Whether you're buying your first home or selling property, our team is ready to guide you through every step.
            </p>
            <div className="cta-buttons">
              <a href="tel:+94112987654" className="btn btn-primary">
                <Phone size={20} />
                Call Now
              </a>
              <a href="#contact-form" className="btn btn-outline">
                Schedule Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          margin-top: -80px;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          transform: scale(1.1);
          transition: transform 0.5s ease;
        }

        .hero:hover .hero-background {
          transform: scale(1);
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.85), rgba(245, 158, 11, 0.75));
          backdrop-filter: blur(2px);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          transform: translateY(20px);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          background: linear-gradient(to right, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .contact-info-grid {
          gap: 2rem;
          margin-top: 3rem;
          perspective: 1000px;
        }

        .contact-info-card {
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
          transform: translateZ(0);
        }

        .contact-info-card:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .contact-icon {
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          transform: scale(1);
          transition: transform 0.3s ease;
        }

        .contact-info-card:hover .contact-icon {
          transform: scale(1.1);
        }

        .contact-title {
          font-size: 1.4rem;
          color: var(--dark-blue);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-detail {
          color: var(--gray);
          transition: color 0.3s ease;
        }

        .contact-link {
          color: var(--primary-blue);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding-bottom: 2px;
        }

        .contact-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-blue);
          transition: width 0.3s ease;
        }

        .contact-link:hover {
          color: var(--dark-blue);
        }

        .contact-link:hover::after {
          width: 100%;
        }

        .contact-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          perspective: 1000px;
        }

        .contact-form {
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .contact-form:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .form-input, .form-textarea {
          transition: all 0.3s ease;
          border: 2px solid transparent;
          background: #f8fafc;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--primary-blue);
          background: white;
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          font-size: 1.1rem;
          margin-top: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
          transition: 0.5s;
        }

        .social-link:hover::before {
          transform: translateX(100%);
        }

        .social-link:hover {
          transform: translateX(10px);
        }

        .cta-section {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          padding: 4rem 0;
          position: relative;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, var(--primary-blue), var(--gold));
          border-radius: 2px;
        }

        .cta-title {
          font-size: 2.8rem;
          color: var(--dark-blue);
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: var(--gray);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .contact-section-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info-grid {
            gap: 1.5rem;
          }

          .contact-info-card {
            padding: 2rem;
          }

          .cta-title {
            font-size: 2.2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 