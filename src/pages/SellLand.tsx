import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { SellLandForm } from '../types';

const SellLand: React.FC = () => {
  const [formData, setFormData] = useState<SellLandForm>({
    name: '',
    email: '',
    phone: '',
    location: '',
    size: '',
    message: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sell land form submitted:', formData);
    alert('Thank you for your submission! Our team will contact you within 24 hours to discuss your land.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      size: '',
      message: ''
    });
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: <CheckCircle size={32} />,
      title: "Fast & Fair Deals",
      description: "Get competitive market prices with quick processing and transparent negotiations."
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Turnaround",
      description: "Complete your land sale in as little as 2-4 weeks with our streamlined process."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Transactions",
      description: "All legal documentation handled by our expert legal team for your peace of mind."
    },
    {
      icon: <Award size={32} />,
      title: "Expert Guidance",
      description: "20+ years of experience helping landowners maximize their property value."
    }
  ];

  const faqs = [
    {
      question: "What documents do I need to sell my land?",
      answer: "You'll need the title deed, survey plan, tax receipts, and any relevant permits. Our team will help you gather all necessary documentation."
    },
    {
      question: "How long does the selling process take?",
      answer: "Typically 2-4 weeks from initial valuation to completion, depending on documentation and legal clearances."
    },
    {
      question: "Do you charge any fees upfront?",
      answer: "No upfront fees! We only charge a small commission after your land is successfully sold."
    },
    {
      question: "What types of land do you purchase?",
      answer: "We purchase residential, commercial, and agricultural land across Sri Lanka, from small plots to large estates."
    },
    {
      question: "How do you determine the land value?",
      answer: "Our expert valuers assess location, size, accessibility, development potential, and current market conditions to provide fair market value."
    }
  ];

  return (
    <div className="sell-land">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200" 
            alt="Land for sale" 
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
            <h1 className="hero-title">Turn Your Land into Opportunity</h1>
            <p className="hero-subtitle">
              Sell your land to Sri Lanka's most trusted real estate company. 
              Get the best market price with our expert team handling everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Sell Your Land to SkyHomes?</h2>
            <p className="section-subtitle">
              Experience the difference of working with Sri Lanka's leading real estate experts
            </p>
          </motion.div>

          <div className="grid grid-2 benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section section-light">
        <div className="container">
          <div className="form-section-grid">
            <motion.div
              className="form-intro"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title left-aligned">Ready to Sell Your Land?</h2>
              <p className="form-intro-text">
                Fill out our simple form below and our land acquisition specialists will contact you 
                within 24 hours with a preliminary valuation and next steps.
              </p>
              
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Submit Details</h4>
                    <p>Tell us about your land</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Site Evaluation</h4>
                    <p>Our experts assess your property</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Fair Offer</h4>
                    <p>Receive competitive market price</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Quick Completion</h4>
                    <p>Complete the sale securely</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="sell-land-form card">
                <h3>Land Details Form</h3>
                
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
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Land Location *</label>
                  <input
                    type="text"
                    name="location"
                    className="form-input"
                    placeholder="e.g., Colombo, Galle, Kandy"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Land Size *</label>
                  <input
                    type="text"
                    name="size"
                    className="form-input"
                    placeholder="e.g., 10 perches, 2 acres"
                    value={formData.size}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Information</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us more about your land - access roads, utilities, special features, etc."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Get Free Valuation
                </button>
                
                <p className="form-disclaimer">
                  * Required fields. Your information is kept confidential and used only for property valuation purposes.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about selling your land to SkyHomes
            </p>
          </motion.div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
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
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .benefits-grid {
          gap: 2rem;
          margin-top: 3rem;
          perspective: 1000px;
        }

        .benefit-card {
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
          transform: translateZ(0);
        }

        .benefit-card:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .benefit-icon {
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          transform: scale(1);
          transition: transform 0.3s ease;
        }

        .benefit-card:hover .benefit-icon {
          transform: scale(1.1);
        }

        .benefit-title {
          font-size: 1.4rem;
          color: var(--dark-blue);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .benefit-description {
          color: var(--gray);
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .benefit-card:hover .benefit-description {
          color: var(--primary-blue);
        }

        .form-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          perspective: 1000px;
        }

        .left-aligned {
          text-align: left;
        }

        .form-intro-text {
          color: var(--gray);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .step {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
          padding: 1rem;
          border-radius: 12px;
          background: var(--light-gray);
        }

        .step:hover {
          transform: translateX(10px);
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--primary-blue);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          font-size: 1.2rem;
          box-shadow: 0 4px 6px rgba(30, 64, 175, 0.2);
          transition: all 0.3s ease;
        }

        .step:hover .step-number {
          transform: scale(1.1);
          box-shadow: 0 6px 8px rgba(30, 64, 175, 0.3);
        }

        .step-content h4 {
          color: var(--dark-blue);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .step-content p {
          color: var(--gray);
          font-size: 1rem;
          line-height: 1.5;
        }

        .sell-land-form {
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .sell-land-form:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .sell-land-form h3 {
          color: var(--dark-blue);
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 1rem;
        }

        .sell-land-form h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, var(--primary-blue), var(--gold));
          border-radius: 2px;
        }

        .form-group {
          position: relative;
          margin-bottom: 1.5rem;
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

        .submit-btn {
          width: 100%;
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

        .form-disclaimer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--gray);
          margin-top: 1.5rem;
          line-height: 1.5;
          padding: 1rem;
          background: var(--light-gray);
          border-radius: 8px;
        }

        .faq-container {
          max-width: 800px;
          margin: 3rem auto 0;
          perspective: 1000px;
        }

        .faq-item {
          margin-bottom: 1rem;
          overflow: hidden;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--dark-blue);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: var(--light-gray);
        }

        .faq-question svg {
          transition: transform 0.3s ease;
        }

        .faq-item:hover .faq-question svg {
          transform: scale(1.2);
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--gray);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .form-section-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .process-steps {
            padding: 1.5rem;
          }

          .step {
            padding: 0.75rem;
          }

          .step-number {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .benefits-grid {
            gap: 1.5rem;
          }

          .benefit-card {
            padding: 2rem;
          }

          .faq-question {
            font-size: 1.1rem;
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SellLand; 