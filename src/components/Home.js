import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'SQL', 'Power BI', 'Flask', 'Git'];

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="avatar"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span style={{ color: '#e0b10a' }}>Sourabh Kalyan</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BTech IT Graduate | Full-Stack Developer | Data Analyst
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/projects" className="btn">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.4rem' }}>
              BTech IT graduate skilled in SQL, Power BI, Web Development, Java (DSA), Excel, DBMS, and data handling. 
              Adept at problem-solving and data analysis, seeking an entry-level role to apply technical expertise, 
              support data-driven decisions, and grow in a dynamic organization.
            </p>
            
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="section" style={{ backgroundColor: 'rgba(224, 177, 10, 0.08)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Quick Stats</h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <h3 style={{ fontSize: '2.2rem', color: '#e0b10a', marginBottom: '0.5rem' }}>3+</h3>
              <p className="muted">Projects Completed</p>
            </div>
            <div className="card text-center">
              <h3 style={{ fontSize: '2.2rem', color: '#e0b10a', marginBottom: '0.5rem' }}>1</h3>
              <p className="muted">Internship Experience</p>
            </div>
            <div className="card text-center">
              <h3 style={{ fontSize: '2.2rem', color: '#e0b10a', marginBottom: '0.5rem' }}>4+</h3>
              <p className="muted">Programming Languages</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ marginBottom: '1rem', color: '#ffffff' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FaPhone style={{ color: '#e0b10a', fontSize: '1.2rem' }} />
                  <span>+91 9971608984</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FaEnvelope style={{ color: '#e0b10a', fontSize: '1.2rem' }} />
                  <span>sourabhkalyanmi5a@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: '#e0b10a', fontSize: '1.2rem' }}>📍</span>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 style={{ marginBottom: '1rem', color: '#ffffff' }}>Connect With Me</h3>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/sourabh-kalyan-13772322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a href="https://wa.me/919971608984?text=Hi%20Sourabh%2C%20I%20found%20your%20portfolio!" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="mailto:sourabhkalyanmi5a@gmail.com?subject=Hello%20Sourabh&body=Hi%20Sourabh%2C" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaEnvelope /> Gmail
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
