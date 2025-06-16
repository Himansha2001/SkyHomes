import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, Building, MapPin, Phone, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/properties', label: 'Properties', icon: Building },
    { path: '/sell-land', label: 'Sell Land', icon: MapPin },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <Building className="brand-icon" />
            <span className="brand-text">SkyHomes</span>
            <span className="brand-tagline">Your Future, Our Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`mobile-menu ${isOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </motion.div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(30, 64, 175, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--dark-blue);
          font-weight: 700;
          font-size: 1.5rem;
        }

        .brand-icon {
          margin-right: 0.5rem;
          color: var(--gold);
        }

        .brand-text {
          margin-right: 0.5rem;
        }

        .brand-tagline {
          font-size: 0.8rem;
          color: var(--gray);
          font-weight: 400;
          display: none;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--dark-gray);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-blue);
          background: rgba(30, 64, 175, 0.05);
        }

        .nav-link.active {
          color: var(--primary-blue);
          background: rgba(30, 64, 175, 0.1);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--dark-blue);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          overflow: hidden;
          border-top: 1px solid rgba(30, 64, 175, 0.1);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: var(--dark-gray);
          font-weight: 500;
          padding: 1rem;
          border-bottom: 1px solid rgba(30, 64, 175, 0.05);
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary-blue);
          background: rgba(30, 64, 175, 0.05);
        }

        @media (min-width: 769px) {
          .brand-tagline {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu.open {
            display: block;
          }

          .navbar-brand {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar; 