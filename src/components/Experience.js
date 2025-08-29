import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    role: 'Operations Consultant',
    company: 'AuthBridge',
    period: 'Present',
    details: [
      'Conduct background verification (BGV) checks and validate candidate/employer data.',
      'Analyze case data to identify discrepancies and prepare concise reports for clients.',
      'Maintain SLAs with accurate documentation, escalation handling, and quality checks.',
      'Collaborate with internal teams to streamline processes and improve TAT.'
    ]
  },
  {
    role: 'Frontend Intern',
    company: 'Reway',
    period: 'May 2023 — Jun 2023',
    details: [
      'Built responsive UI using HTML, CSS, JavaScript, and React.',
      'Worked with designers to implement UI/UX and optimize web performance.',
      'Fixed frontend bugs, used Git for version control, and supported testing/reviews.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="main-content">
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="section-title">Experience</h1>

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"><FaUserTie /></div>
                <div className="timeline-content card">
                  <h3 style={{ color: '#ffffff', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <p className="muted" style={{ display: 'flex', alignItems: 'center', gap: '.4rem', marginBottom: '.5rem' }}>
                    <FaBuilding style={{ color: '#e0b10a' }} /> {exp.company} • {exp.period}
                  </p>
                  <ul style={{ paddingLeft: '1.2rem' }}>
                    {exp.details.map((d, i) => (
                      <li key={i} className="muted" style={{ marginBottom: '0.35rem', display: 'flex', gap: '.45rem' }}>
                        <FaCheckCircle style={{ color: '#8bc34a', minWidth: '16px', marginTop: '2px' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;

