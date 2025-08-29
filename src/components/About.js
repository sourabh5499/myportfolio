import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaDatabase, FaTools, FaTrophy, FaUserCheck, FaClipboardList, FaHeart, FaNewspaper, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

const About = () => {
  const education = {
    degree: "Bachelor of Technology (GGSIPU)",
    institution: "Bhagwan Parshuram Institute of Technology",
    specialization: "Information Technology",
    duration: "Aug 2021 - July 2025",
    location: "New Delhi, India",
    percentage: "79.82%"
  };

  const technicalSkills = [
    { category: "Programming Languages", skills: ["Java", "Python", "C++", "JavaScript"] },
    { category: "Web Technologies", skills: ["React", "HTML", "CSS", "Flask", "SQLite"] },
    { category: "Data & Analytics", skills: ["SQL", "Power BI", "Excel", "DBMS"] },
    { category: "Tools & Version Control", skills: ["Git", "GitHub", "VS Code"] }
  ];

  const publications = [
    {
      title: "Travel Heaven",
      venue: "IJSCSEIT",
      date: "21 Nov, 2024",
      mentor: "Dr. Madhur Jain",
      authors: 3,
      keySkills: [
        "Research & Analysis",
        "Team Collaboration",
        "Content Writing & Reporting",
        "UX Understanding",
        "Problem-Solving"
      ],
      summary:
        "Analyzed an accommodation review website to evaluate user experience, usability, and platform effectiveness; proposed improvements for engagement and credibility.",
      link: "https://ijsrcseit.com/index.php/home/article/view/CSEIT241061117",
      doi: "https://doi.org/10.32628/CSEIT241061117"
    }
  ];

  const achievements = [
    "Won DBMS quiz (1st position)",
    "First place in college-level project competition"
  ];

  const certifications = [
    { name: "Research paper certificate", subject: "Web development", score: "80/80" },
    { name: "DSA certification", subject: "Coding Blocks" }
  ];

  const activities = [
    "Participation in college sports meets and events",
    "IT DBMS quiz competition"
  ];

  const hobbies = ["Travelling"];

  const personalDetails = {
    gender: "Male",
    maritalStatus: "Single",
    address: "I-1182, Mangolpuri, New Delhi - 83",
    email: "sourabhkalyanmi5a@gmail.com",
    dob: "30 Mar, 2003",
    languages: "English",
    phones: "+91-9971608984, +91-9953011364"
  };

  const certificateImages = [
    {
      title: "DBMS Crossword Competition - First Position",
      issuer: "BPIT, Department of IT",
      date: "01 May, 2023",
      src: "/certificates/dbms-first.jpg.jpg",
      fit: 'cover'
    },
    {
      title: "IJSCSEIT Publication Certificate - Travel Heaven",
      issuer: "IJSCSEIT",
      date: "21 Nov, 2024",
      src: "/certificates/publication-ijsrcseit.jpg.jpg",
      link: "https://doi.org/10.32628/CSEIT241061117",
      fit: 'contain'
    }
  ];

  return (
    <div className="main-content">
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="section-title">About Me</h1>

          <div className="card">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              I am a passionate BTech IT graduate with a strong foundation in web development, data analysis, and problem-solving.
              Adept at building responsive web apps and turning data into insights using SQL and Power BI. I thrive in collaborative teams and
              continuously learn to deliver clean, scalable software.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="section" style={{ backgroundColor: 'rgba(224, 177, 10, 0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Education</h2>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <FaGraduationCap style={{ color: '#e0b10a', fontSize: '2rem' }} />
              <div>
                <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>{education.degree}</h3>
                <p className="muted" style={{ marginBottom: '0.25rem' }}>{education.institution}</p>
                <p className="muted" style={{ marginBottom: '0.25rem' }}>Specialization: {education.specialization}</p>
                <p className="muted" style={{ marginBottom: '0.25rem' }}>{education.duration} • {education.location}</p>
                <p className="muted">Percentage: {education.percentage}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-2">
            {technicalSkills.map((category, index) => (
              <motion.div key={category.category} className="card" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.15 }} viewport={{ once: true }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {category.category === 'Programming Languages' && <FaCode className="highlight" />}
                  {category.category === 'Data & Analytics' && <FaDatabase className="highlight" />}
                  {category.category === 'Tools & Version Control' && <FaTools className="highlight" />}
                  {category.category}
                </h3>
                <div className="skills-container">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section" style={{ backgroundColor: 'rgba(224, 177, 10, 0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Publications</h2>
          {publications.map((p) => (
            <div key={p.title} className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <FaNewspaper className="highlight" /> {p.title}
              </h3>
              <p className="muted" style={{ marginBottom: '0.5rem' }}>{p.venue} • {p.date} • Mentor: {p.mentor} • Authors: {p.authors}</p>
              <div className="skills-container" style={{ marginBottom: '0.75rem' }}>
                {p.keySkills.map((k) => (
                  <span key={k} className="skill-tag">{k}</span>
                ))}
              </div>
              <p className="muted" style={{ marginBottom: '0.75rem' }}>{p.summary}</p>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-secondary"><FaExternalLinkAlt /> Article</a>
                )}
                {p.doi && (
                  <a href={p.doi} target="_blank" rel="noreferrer" className="btn"><FaExternalLinkAlt /> DOI</a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Certificates</h2>
          <div className="grid grid-2">
            {certificateImages.map((c, i) => (
              <motion.div key={c.title} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="image-card" style={{ background: 'rgba(224,177,10,0.04)' }}>
                  <img src={c.src} alt={c.title} className="image" style={{ objectFit: c.fit || 'cover', maxHeight: c.fit === 'contain' ? '520px' : '420px' }} />
                </div>
                <h3 style={{ marginTop: '0.75rem', color: '#ffffff' }}><FaCertificate className="highlight" /> {c.title}</h3>
                <p className="muted">{c.issuer} • {c.date}</p>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ marginTop: '0.75rem' }}>
                    <FaExternalLinkAlt /> View
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section" style={{ backgroundColor: 'rgba(224, 177, 10, 0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <FaTrophy className="highlight" /> Achievements
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {achievements.map((a, i) => (
                  <li key={i} className="muted" style={{ padding: '6px 0' }}>• {a}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <FaClipboardList className="highlight" /> Certifications
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {certifications.map((c, i) => (
                  <li key={i} className="muted" style={{ padding: '6px 0' }}>• {c.name}{c.subject ? ` — ${c.subject}` : ''}{c.score ? ` (${c.score})` : ''}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Activities & Interests</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <FaUserCheck className="highlight" /> Extra Curricular Activities
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {activities.map((a, i) => (
                  <li key={i} className="muted" style={{ padding: '6px 0' }}>• {a}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <FaHeart className="highlight" /> Hobbies
              </h3>
              <div className="skills-container">
                {hobbies.map((h) => (
                  <span key={h} className="skill-tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="section-title">Personal Details</h2>
          <div className="card">
            <div className="grid grid-2">
              <div>
                <p className="muted">Gender: {personalDetails.gender}</p>
                <p className="muted">Marital Status: {personalDetails.maritalStatus}</p>
                <p className="muted">Date of Birth: {personalDetails.dob}</p>
                <p className="muted">Languages: {personalDetails.languages}</p>
              </div>
              <div>
                <p className="muted">Address: {personalDetails.address}</p>
                <p className="muted">Email: {personalDetails.email}</p>
                <p className="muted">Phone Numbers: {personalDetails.phones}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
