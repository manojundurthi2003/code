import React from 'react';
import './HomePage.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Shaping Innovation. Scaling Entrepreneurship.</h1>
          <p className="hero-subtitle">Building a Future-Ready Innovation Ecosystem where Entrepreneurs Soar</p>
          <div className="hero-buttons">
            <button className="hero-button">
              <Link to="/working-Startups" className="hero-link">Startups</Link>
            </button>
            <button className="hero-button">
              <Link to="/innovation%20projects" className="hero-link">Innovation</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Inspire, Build, Collaborate Section */}
      <div className="feature-section">
        <Link to="/ResearchProjects" className="feature-item">
          <div className="feature-icon">📖</div>
          <h2 className="feature-title">Researches</h2>
          <p className="feature-description">
            Inspiring innovation and bold ideas that turn dreams into reality.
          </p>
        </Link>
        <Link to="/ipr" className="feature-item">
          <div className="feature-icon">🤝</div>
          <h2 className="feature-title">IPR</h2>
          <p className="feature-description">
  Safeguarding innovations through patent and intellectual property rights management.
</p>

        </Link>
        <Link to="/innovation%20projects" className="feature-item">
          <div className="feature-icon">🔧</div>
          <h2 className="feature-title">Innovation</h2>
          <p className="feature-description">
            Fueling disruptors and building a platform for tomorrow’s creators.
          </p>
        </Link>
        <Link to="/working-Startups" className="feature-item">
          <div className="feature-icon">🤝</div>
          <h2 className="feature-title">Startup</h2>
          <p className="feature-description">
            Forging powerful connections for collaborations to flourish.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
