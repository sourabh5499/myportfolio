import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS with the provided public key
    emailjs.init({ publicKey: 'nSBf1l4Bro3q8bd3X' });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    try {
      // EmailJS credentials (provided)
      const SERVICE_ID = 'service_fbvt19g';
      const TEMPLATE_ID = 'template_qrvg2ob';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        to_name: 'Sourabh',
        subject: formData.subject,
        message: formData.message
      };

      // Use init() public key; no 4th argument required
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err?.text || err?.message || 'Unknown error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaPhone />, title: 'Phone', value: '+91 9971608984', link: 'tel:+919971608984' },
    { icon: <FaEnvelope />, title: 'Email', value: 'sourabhkalyanmi5a@gmail.com', link: 'mailto:sourabhkalyanmi5a@gmail.com' },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: 'New Delhi, India', link: null }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/sourabh-kalyan-13772322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', url: 'https://wa.me/919971608984?text=Hi%20Sourabh%2C%20I%20found%20your%20portfolio!', color: '#25D366' },
    { icon: <FaEnvelope />, name: 'Gmail', url: 'mailto:sourabhkalyanmi5a@gmail.com?subject=Hello%20Sourabh&body=Hi%20Sourabh%2C', color: '#EA4335' }
  ];

  return (
    <div className="main-content">
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="section-title">Get In Touch</h1>
          <p style={{ textAlign: 'center', fontSize: '1.05rem' }} className="muted">
            This form sends directly to your email using EmailJS. Fill it out and I’ll get back to you.
          </p>
        </motion.div>
      </section>

      <section className="section" style={{ backgroundColor: 'rgba(224, 177, 10, 0.08)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Contact Information</h2>
          <div className="grid grid-3">
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} className="card text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }}>
                <div style={{ fontSize: '2.2rem', color: '#e0b10a', marginBottom: '0.6rem' }}>{info.icon}</div>
                <h3 style={{ color: '#ffffff', marginBottom: '0.25rem' }}>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} style={{ color: '#cfcfcf', textDecoration: 'none' }}>{info.value}</a>
                ) : (
                  <p className="muted">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Send Me a Message</h2>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject of your message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Your message..."></textarea>
              </div>

              {status === 'success' && (
                <div className="card" style={{ background: '#3b4a2f', borderColor: '#3b4a2f', color: '#d1fae5', marginBottom: '1rem' }}>
                  Message sent successfully! I’ll reply soon.
                </div>
              )}
              {status === 'error' && (
                <div className="card" style={{ background: '#4a2f2f', borderColor: '#4a2f2f', color: '#fbdada', marginBottom: '1rem' }}>
                  There was a problem sending your message. {errorMessage ? `(${errorMessage})` : 'Please try again.'}
                </div>
              )}

              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      <section className="section" style={{ backgroundColor: 'rgba(224, 177, 10, 0.08)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Connect With Me</h2>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => (
                <motion.a key={social.name} href={social.url} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: social.color, border: 'none', color: '#fff' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }}>
                  {social.icon}
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
