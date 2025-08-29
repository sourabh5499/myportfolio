import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wanderlust",
      description: "A listings platform for accommodations with team collaboration and search features.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      features: ["Accommodation listings", "Search & filters", "Team collaboration"],
      color: "#10b981",
      live: "https://wanderlust-vzb.onrender.com/listings"
    },
    {
      id: 3,
      title: "Faculty Management System",
      description: "Full‑stack app to manage faculty records, research details, and examination data with role‑based access and CRUD.",
      technologies: ["React", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      features: ["Role-based access", "CRUD operations", "Research details", "Examination data"],
      color: "#3498db"
    },
    {
      id: 4,
      title: "DBMS Quiz Application",
      description: "Interactive DBMS quiz with results storage and evaluation; won first place at college level.",
      technologies: ["Python", "SQL", "Flask", "HTML", "CSS", "JavaScript"],
      features: ["Interactive quiz", "Database-driven", "Scoring", "Analytics"],
      color: "#e74c3c"
    }
  ];

  return (
    <div className="main-content">
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="section-title">My Projects</h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem' }} className="muted">
            A selection of academic and personal projects demonstrating full‑stack development and data handling.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <motion.div key={project.id} className="project-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}>
              <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }} />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div style={{ marginBottom: '1.1rem' }}>
                  <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Technologies:</h4>
                  <div className="skills-container">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag" style={{ fontSize: '0.85rem' }}>{tech}</span>
                    ))}
                  </div>
                </div>
                {project.features?.length ? (
                  <div style={{ marginBottom: '1.1rem' }}>
                    <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Key Features:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {project.features.map((f, i) => (
                        <li key={i} className="muted" style={{ padding: '4px 0' }}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <FaExternalLinkAlt /> Visit
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
