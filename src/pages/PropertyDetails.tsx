import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Share2, Phone, Mail, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { properties } from '../data/sampleData';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === parseInt(id || '0'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!property) {
    return (
      <div className="property-not-found">
        <div className="container">
          <h1>Property Not Found</h1>
          <p>The property you're looking for doesn't exist.</p>
          <Link to="/properties" className="btn btn-primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `Rs. ${(price / 1000000).toFixed(1)}M`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', {
      property: property.title,
      ...inquiryForm
    });
    alert('Thank you for your inquiry! We will contact you soon.');
    setShowInquiryForm(false);
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="property-details">
      {/* Navigation */}
      <div className="container navigation">
        <Link to="/properties" className="back-link">
          <ArrowLeft size={20} />
          Back to Properties
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery">
            <div className="main-image">
              <img src={property.images[currentImageIndex]} alt={property.title} />
              {property.images.length > 1 && (
                <>
                  <button className="gallery-btn prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </button>
                  <button className="gallery-btn next" onClick={nextImage}>
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              <div className="image-counter">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>
            
            {property.images.length > 1 && (
              <div className="thumbnail-strip">
                {property.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="section">
        <div className="container">
          <div className="property-info-grid">
            <div className="property-main-info">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="property-header">
                  <div>
                    <h1 className="property-title">{property.title}</h1>
                    <div className="property-location">
                      <MapPin size={20} />
                      {property.location}
                    </div>
                  </div>
                  <div className="property-actions">
                    <button className="action-btn">
                      <Heart size={20} />
                    </button>
                    <button className="action-btn">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="property-price-section">
                  <div className="price">{formatPrice(property.price)}</div>
                  <div className="property-type">{property.type}</div>
                </div>

                <div className="property-quick-info">
                  <div className="info-item">
                    <Square size={18} />
                    <span>{property.size}</span>
                  </div>
                  {property.bedrooms && (
                    <div className="info-item">
                      <Bed size={18} />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="info-item">
                      <Bath size={18} />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                </div>

                <div className="property-description">
                  <h3>Description</h3>
                  <p>{property.description}</p>
                </div>

                <div className="property-features">
                  <h3>Features & Amenities</h3>
                  <div className="features-grid">
                    {property.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <Check size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="property-sidebar">
              <motion.div
                className="contact-card card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3>Interested in this property?</h3>
                <p>Get in touch with our expert team for more information or to schedule a viewing.</p>
                
                <div className="contact-buttons">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowInquiryForm(true)}
                  >
                    Send Inquiry
                  </button>
                  <a href="tel:+94112987654" className="btn btn-outline">
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>+94 112 987 654</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>info@skyhomes.lk</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="location-card card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3>Location</h3>
                <div className="map-placeholder">
                  <img 
                    src={`https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300`}
                    alt="Location map"
                  />
                  <div className="map-overlay">
                    <MapPin size={24} />
                    <span>{property.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {showInquiryForm && (
        <div className="modal-overlay" onClick={() => setShowInquiryForm(false)}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Send Inquiry</h3>
            <p>Interested in {property.title}? Send us your details and we'll get back to you.</p>
            
            <form onSubmit={handleInquirySubmit} className="inquiry-form">
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-input"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                  placeholder="I'm interested in this property. Please contact me with more details."
                />
              </div>
              
              <div className="form-buttons">
                <button type="button" className="btn btn-outline" onClick={() => setShowInquiryForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <style>{`
        .property-not-found {
          padding: 8rem 0;
          text-align: center;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .navigation {
          padding: 2rem 0 1rem;
          margin-top: 80px;
          position: sticky;
          top: 80px;
          background: white;
          z-index: 100;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          background: rgba(30, 64, 175, 0.1);
        }

        .back-link:hover {
          color: var(--dark-blue);
          background: rgba(30, 64, 175, 0.15);
          transform: translateX(-5px);
        }

        .gallery-section {
          padding: 2rem 0;
          perspective: 1000px;
        }

        .gallery {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        .gallery:hover {
          transform: translateZ(20px);
        }

        .main-image {
          position: relative;
          height: 600px;
          overflow: hidden;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery:hover .main-image img {
          transform: scale(1.05);
        }

        .gallery-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(4px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .gallery-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .gallery-btn.prev {
          left: 2rem;
        }

        .gallery-btn.next {
          right: 2rem;
        }

        .image-counter {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-size: 1rem;
          backdrop-filter: blur(4px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .gallery:hover .image-counter {
          transform: translateY(-10px);
        }

        .thumbnail-strip {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--light-gray);
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .thumbnail-strip::-webkit-scrollbar {
          display: none;
        }

        .thumbnail {
          width: 100px;
          height: 75px;
          object-fit: cover;
          border-radius: 12px;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .thumbnail:hover,
        .thumbnail.active {
          opacity: 1;
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .property-info-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .property-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .property-title {
          font-size: 2.8rem;
          color: var(--dark-blue);
          margin-bottom: 1rem;
          line-height: 1.2;
          font-weight: 800;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--gray);
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }

        .property-location:hover {
          color: var(--primary-blue);
        }

        .property-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          width: 60px;
          height: 60px;
          border: 2px solid var(--primary-blue);
          background: white;
          color: var(--primary-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .action-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--primary-blue);
          transform: scale(0);
          transition: transform 0.3s ease;
          border-radius: 50%;
        }

        .action-btn:hover::before {
          transform: scale(1);
        }

        .action-btn svg {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .action-btn:hover svg {
          transform: scale(1.2);
          color: white;
        }

        .property-price-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(245, 158, 11, 0.05));
          border-radius: 16px;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gold);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .property-type {
          background: var(--primary-blue);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          text-transform: capitalize;
          box-shadow: 0 4px 6px rgba(30, 64, 175, 0.2);
          transition: transform 0.3s ease;
        }

        .property-type:hover {
          transform: translateY(-2px);
        }

        .property-quick-info {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--gray);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          color: var(--primary-blue);
          transform: translateY(-2px);
        }

        .info-item svg {
          color: var(--gold);
          transition: transform 0.3s ease;
        }

        .info-item:hover svg {
          transform: scale(1.2);
        }

        .property-description {
          margin-bottom: 3rem;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .property-description:hover {
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        .property-description h3,
        .property-features h3 {
          color: var(--dark-blue);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .property-description h3::after,
        .property-features h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, var(--primary-blue), var(--gold));
          border-radius: 2px;
        }

        .property-description p {
          line-height: 1.8;
          color: var(--gray);
          font-size: 1.1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--gray);
          transition: all 0.3s ease;
          padding: 1rem;
          border-radius: 12px;
          background: var(--light-gray);
        }

        .feature-item:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .feature-item svg {
          color: var(--success);
          transition: transform 0.3s ease;
        }

        .feature-item:hover svg {
          transform: scale(1.2);
        }

        .contact-card {
          padding: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .contact-card h3 {
          color: var(--dark-blue);
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .contact-card p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-info {
          border-top: 1px solid #e2e8f0;
          padding-top: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--gray);
          margin-bottom: 1rem;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          color: var(--primary-blue);
          transform: translateX(5px);
        }

        .location-card {
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .location-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .location-card h3 {
          color: var(--dark-blue);
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .map-placeholder {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .map-placeholder img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .location-card:hover .map-placeholder img {
          transform: scale(1.05);
        }

        .map-overlay {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(30, 64, 175, 0.9);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          backdrop-filter: blur(4px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .location-card:hover .map-overlay {
          transform: translateY(-10px);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .modal-content h3 {
          color: var(--dark-blue);
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .modal-content p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          position: relative;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--dark-blue);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--primary-blue);
          background: white;
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
          outline: none;
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-buttons {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .property-info-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .property-title {
            font-size: 2.2rem;
          }

          .property-header {
            flex-direction: column;
            gap: 1.5rem;
          }

          .property-quick-info {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .main-image {
            height: 400px;
          }

          .gallery-btn {
            width: 50px;
            height: 50px;
          }

          .gallery-btn.prev {
            left: 1rem;
          }

          .gallery-btn.next {
            right: 1rem;
          }

          .image-counter {
            bottom: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PropertyDetails; 