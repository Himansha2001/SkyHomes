import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Building className="brand-icon" />
              <span className="brand-text">SkyHomes</span>
            </div>
            <p className="footer-tagline">
              Your Future, Our Foundation
            </p>
            <p className="footer-description">
              Leading real estate company in Sri Lanka, helping you find your dream property 
              and build lasting investments since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/sell-land">Sell Your Land</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-item">
              <MapPin size={18} />
              <span>456 Marine Drive, Colombo, Sri Lanka</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+94112987654">+94 112 987 654</a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:info@skyhomes.lk">info@skyhomes.lk</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
            <p className="newsletter-text">
              Subscribe to our newsletter for the latest property updates and market insights.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SeaPonyStudios. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--dark-blue), var(--primary-blue));
          color: var(--white);
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .brand-icon {
          margin-right: 0.5rem;
          color: var(--gold);
        }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .footer-tagline {
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--gold);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--gold);
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-item svg {
          margin-right: 0.5rem;
          color: var(--gold);
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--gold);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--gold);
          transform: translateY(-2px);
        }

        .newsletter-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-content {
            gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer-bottom-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 