import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Bed, Bath, Square, Eye } from 'lucide-react';
import { properties } from '../data/sampleData';
import type { Property } from '../types';

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  const formatPrice = (price: number) => {
    return `Rs. ${(price / 1000000).toFixed(1)}M`;
  };

  const filteredProperties = useMemo<Property[]>(() => {
    return properties.filter((property) => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || property.type === selectedType;
      
      const matchesLocation = selectedLocation === 'all' || 
                            property.location.toLowerCase().includes(selectedLocation.toLowerCase());
      
      const matchesPrice = priceRange === 'all' || 
                         (priceRange === 'under-10' && property.price < 10000000) ||
                         (priceRange === '10-25' && property.price >= 10000000 && property.price <= 25000000) ||
                         (priceRange === 'over-25' && property.price > 25000000);
      
      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedLocation, priceRange]);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + propertiesPerPage);

  const locations = Array.from(new Set(properties.map(p => p.location)));
  const propertyTypes = Array.from(new Set(properties.map(p => p.type)));

  return (
    <div className="properties">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200" 
            alt="Properties" 
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
            <h1 className="hero-title">Find Your Perfect Property Today</h1>
            <p className="hero-subtitle">
              Discover your dream home from our extensive collection of premium properties 
              across Sri Lanka's most desirable locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <motion.div
            className="filters-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search by property name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters">
              <div className="filter-group">
                <Filter size={18} />
                <span className="filter-label">Filters:</span>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location.toLowerCase()}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Prices</option>
                <option value="under-10">Under Rs. 10M</option>
                <option value="10-25">Rs. 10M - 25M</option>
                <option value="over-25">Over Rs. 25M</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section">
        <div className="container">
          <div className="properties-header">
            <h2 className="properties-count">
              {filteredProperties.length} Properties Found
            </h2>
          </div>

          {currentProperties.length > 0 ? (
            <motion.div 
              className="grid grid-3 properties-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {currentProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="property-card card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="property-image">
                    <img src={property.images[0]} alt={property.title} />
                    <div className="property-type">{property.type}</div>
                    <div className="property-price">{formatPrice(property.price)}</div>
                    <div className="property-overlay">
                      <Link to={`/properties/${property.id}`} className="view-btn">
                        <Eye size={20} />
                        View Details
                      </Link>
                    </div>
                  </div>
                  
                  <div className="property-content">
                    <h3 className="property-title">{property.title}</h3>
                    
                    <div className="property-location">
                      <MapPin size={16} />
                      {property.location}
                    </div>

                    <div className="property-details">
                      <div className="detail-item">
                        <Square size={16} />
                        <span>{property.size}</span>
                      </div>
                      {property.bedrooms && (
                        <div className="detail-item">
                          <Bed size={16} />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="detail-item">
                          <Bath size={16} />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                      )}
                    </div>

                    <p className="property-description">
                      {property.description.substring(0, 100)}...
                    </p>

                    <Link to={`/properties/${property.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="no-properties"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3>No Properties Found</h3>
              <p>Try adjusting your search criteria to find more properties.</p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          height: 50vh;
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
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .filters-section {
          background: var(--light-gray);
          padding: 2rem 0;
        }

        .filters-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .search-bar {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-bar svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray);
        }

        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 50px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--dark-blue);
          font-weight: 600;
        }

        .filter-select {
          padding: 0.5rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: var(--primary-blue);
        }

        .properties-header {
          margin-bottom: 2rem;
        }

        .properties-count {
          font-size: 1.5rem;
          color: var(--dark-blue);
          text-align: center;
        }

        .properties-grid {
          margin-bottom: 3rem;
        }

        .property-card {
          overflow: hidden;
        }

        .property-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .property-card:hover .property-image img {
          transform: scale(1.05);
        }

        .property-type {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--gold);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .property-price {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(30, 64, 175, 0.9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 700;
        }

        .property-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 64, 175, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .property-card:hover .property-overlay {
          opacity: 1;
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: var(--primary-blue);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: var(--gold);
          color: white;
        }

        .property-content {
          padding: 1.5rem;
        }

        .property-title {
          font-size: 1.2rem;
          color: var(--dark-blue);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .property-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--gray);
          font-size: 0.9rem;
        }

        .property-description {
          color: var(--gray);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .no-properties {
          text-align: center;
          padding: 4rem 2rem;
        }

        .no-properties h3 {
          color: var(--dark-blue);
          margin-bottom: 1rem;
        }

        .no-properties p {
          color: var(--gray);
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 3rem;
        }

        .pagination-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--primary-blue);
          background: white;
          color: var(--primary-blue);
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover:not(:disabled) {
          background: var(--primary-blue);
          color: white;
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-numbers {
          display: flex;
          gap: 0.5rem;
        }

        .pagination-number {
          width: 40px;
          height: 40px;
          border: 2px solid var(--primary-blue);
          background: white;
          color: var(--primary-blue);
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-number:hover,
        .pagination-number.active {
          background: var(--primary-blue);
          color: white;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .filters {
            flex-direction: column;
            align-items: stretch;
          }

          .filter-select {
            width: 100%;
          }

          .property-details {
            flex-direction: column;
            gap: 0.5rem;
          }

          .pagination-numbers {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Properties; 