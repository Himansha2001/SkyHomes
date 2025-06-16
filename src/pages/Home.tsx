import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, MapPin, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { properties, testimonials } from '../data/sampleData';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  
  const featuredProperties = properties.filter(p => p.featured);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [featuredProperties.length]);

  const formatPrice = (price: number) => {
    return `Rs. ${(price / 1000000).toFixed(1)}M`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const stats = [
    { number: '20+', label: 'Years Experience', icon: <Award size={32} /> },
    { number: '4,000+', label: 'Happy Clients', icon: <Users size={32} /> },
    { number: '15', label: 'Regions Covered', icon: <MapPin size={32} /> },
    { number: '500+', label: 'Properties Sold', icon: <Star size={32} /> }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200" 
            alt="Dream Home" 
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
            <h1 className="hero-title">Discover Your Dream Home with SkyHomes</h1>
            <p className="hero-subtitle">
              Your trusted partner in finding the perfect property across Sri Lanka. 
              From luxury homes to prime land, we make your real estate dreams come true.
            </p>
            <div className="hero-buttons">
              <Link to="/properties" className="btn btn-primary">
                Explore Properties
                <ArrowRight size={20} />
              </Link>
              <button className="btn btn-outline play-btn">
                <Play size={20} />
                Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Slider */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">
              Handpicked premium properties that offer the best value and location
            </p>
          </motion.div>

          <div className="property-slider">
            <div className="slider-container">
              {featuredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="property-slide">
                    <div className="property-image">
                      <img src={property.images[0]} alt={property.title} />
                      <div className="property-price">{formatPrice(property.price)}</div>
                    </div>
                    <div className="property-info">
                      <h3>{property.title}</h3>
                      <p className="property-location">
                        <MapPin size={16} />
                        {property.location}
                      </p>
                      <p className="property-description">{property.description}</p>
                      <Link to={`/properties/${property.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="slider-btn prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="slider-btn next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
            
            <div className="slider-dots">
              {featuredProperties.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-light">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real stories from satisfied customers who found their dream properties with us
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-message">"{testimonial.message}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="newsletter-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">
              Get the latest property listings and market insights delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          margin-top: -80px;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(245, 158, 11, 0.6));
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .play-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .property-slider {
          position: relative;
          margin-top: 3rem;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .slider-container {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 16px;
          overflow: hidden;
        }

        .slide {
          min-width: 100%;
          transition: transform 0.5s ease;
        }

        .property-slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 500px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .property-image {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .property-slide:hover .property-image img {
          transform: scale(1.05);
        }

        .property-price {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--gold);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.3rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .property-info {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
          height: 100%;
        }

        .property-info h3 {
          font-size: 2rem;
          color: var(--dark-blue);
          margin-bottom: 1.5rem;
          line-height: 1.3;
          font-weight: 700;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .property-location svg {
          color: var(--primary-blue);
        }

        .property-description {
          color: var(--gray);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .property-info .btn {
          align-self: flex-start;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .property-info .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2);
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
        }

        .slider-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .slider-btn.prev {
          left: 2rem;
        }

        .slider-btn.next {
          right: 2rem;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #e2e8f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary-blue);
          transform: scale(1.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .stat-icon {
          color: var(--gold);
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark-blue);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--gray);
          font-weight: 600;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          padding: 2rem;
          text-align: center;
        }

        .testimonial-stars {
          color: var(--gold);
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          gap: 0.25rem;
        }

        .testimonial-message {
          font-style: italic;
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .testimonial-author strong {
          color: var(--dark-blue);
          display: block;
          margin-bottom: 0.25rem;
        }

        .testimonial-author span {
          color: var(--gray);
          font-size: 0.9rem;
        }

        .newsletter-section {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-title {
          font-size: 2.5rem;
          color: var(--dark-blue);
          margin-bottom: 1rem;
        }

        .newsletter-subtitle {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .newsletter-input {
          flex: 1;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary-blue);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .property-slide {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .property-image {
            height: 300px;
          }

          .property-info {
            padding: 2rem;
          }

          .property-info h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }

          .property-location {
            margin-bottom: 1rem;
          }

          .property-description {
            margin-bottom: 2rem;
          }

          .slider-btn {
            width: 50px;
            height: 50px;
          }

          .slider-btn.prev {
            left: 1rem;
          }

          .slider-btn.next {
            right: 1rem;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .stats-grid {
            gap: 1.5rem;
          }

          .testimonials-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home; 