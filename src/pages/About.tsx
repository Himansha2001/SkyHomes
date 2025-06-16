import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Heart, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import { teamMembers, milestones } from '../data/sampleData';

const About: React.FC = () => {
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(null);

  const toggleTimeline = (index: number) => {
    setExpandedTimeline(expandedTimeline === index ? null : index);
  };

  const coreValues = [
    {
      icon: <Heart size={32} />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings, ensuring trust with every client."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Your needs come first. We tailor our services to match your unique property requirements and dreams."
    },
    {
      icon: <Trophy size={32} />,
      title: "Excellence",
      description: "We strive for excellence in every property transaction, delivering superior service and results."
    },
    {
      icon: <Target size={32} />,
      title: "Innovation",
      description: "Leveraging technology and market insights to provide modern solutions for today's property market."
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" 
            alt="About SkyHomes" 
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
            <h1 className="hero-title">Building Trust, Shaping Dreams</h1>
            <p className="hero-subtitle">
              For over two decades, SkyHomes has been Sri Lanka's most trusted real estate partner, 
              helping thousands of families find their perfect homes and investors discover prime opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title left-aligned">Our Story</h2>
              <p className="story-text">
                Founded in 2005 by visionary entrepreneur Rajesh Fernando, SkyHomes began as a small 
                family business with a simple mission: to make quality real estate accessible to every 
                Sri Lankan family.
              </p>
              <p className="story-text">
                What started as a single office in Colombo has grown into Sri Lanka's leading real estate 
                network, spanning 15 regions and serving over 4,000 satisfied clients. Our success is built 
                on trust, expertise, and an unwavering commitment to our clients' dreams.
              </p>
              <p className="story-text">
                Today, SkyHomes continues to set industry standards through innovative property solutions, 
                sustainable development practices, and personalized service that puts families first.
              </p>
            </motion.div>

            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" 
                alt="SkyHomes office"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-light">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              className="mission-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mv-icon">
                <Target size={48} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To democratize real estate in Sri Lanka by providing accessible, transparent, 
                and professional property services that empower every citizen to achieve their 
                homeownership dreams and investment goals.
              </p>
            </motion.div>

            <motion.div
              className="vision-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mv-icon">
                <Eye size={48} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be Sri Lanka's most trusted and innovative real estate company, recognized 
                for transforming communities through sustainable development and creating 
                lasting value for all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle">
              Dedicated professionals with decades of combined experience in Sri Lankan real estate
            </p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones that shaped SkyHomes into Sri Lanka's leading real estate company
            </p>
          </motion.div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content card">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <button
                    className="timeline-toggle"
                    onClick={() => toggleTimeline(index)}
                  >
                    {expandedTimeline === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedTimeline === index && (
                    <motion.p
                      className="timeline-description"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.description}
                    </motion.p>
                  )}
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at SkyHomes
            </p>
          </motion.div>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
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
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .left-aligned {
          text-align: left;
        }

        .story-text {
          color: var(--gray);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .story-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .mission-card,
        .vision-card {
          padding: 3rem 2rem;
          text-align: center;
        }

        .mv-icon {
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .mission-card h3,
        .vision-card h3 {
          font-size: 1.5rem;
          color: var(--dark-blue);
          margin-bottom: 1rem;
        }

        .mission-card p,
        .vision-card p {
          color: var(--gray);
          line-height: 1.6;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .team-card {
          padding: 0;
          overflow: hidden;
          text-align: center;
        }

        .team-image {
          height: 250px;
          overflow: hidden;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .team-card:hover .team-image img {
          transform: scale(1.05);
        }

        .team-content {
          padding: 1.5rem;
        }

        .team-name {
          font-size: 1.2rem;
          color: var(--dark-blue);
          margin-bottom: 0.5rem;
        }

        .team-position {
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .team-bio {
          color: var(--gray);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 3rem auto 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-blue);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: 55%;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 55%;
        }

        .timeline-content {
          padding: 1.5rem;
          position: relative;
        }

        .timeline-year {
          background: var(--gold);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .timeline-title {
          color: var(--dark-blue);
          margin-bottom: 1rem;
        }

        .timeline-toggle {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--primary-blue);
          cursor: pointer;
          padding: 0.25rem;
        }

        .timeline-description {
          color: var(--gray);
          line-height: 1.6;
          overflow: hidden;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 2rem;
          width: 20px;
          height: 20px;
          background: var(--primary-blue);
          border: 4px solid white;
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 0 3px var(--primary-blue);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .value-card {
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .value-title {
          font-size: 1.3rem;
          color: var(--dark-blue);
          margin-bottom: 1rem;
        }

        .value-description {
          color: var(--gray);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .story-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline::before {
            left: 2rem;
          }

          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            margin-left: 4rem;
            margin-right: 0;
          }

          .timeline-dot {
            left: 2rem;
          }

          .team-grid {
            gap: 1.5rem;
          }

          .values-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About; 