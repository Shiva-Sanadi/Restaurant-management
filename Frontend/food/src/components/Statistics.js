
// ============================================
// STATISTICS COMPONENT
// ============================================
// File: src/components/Statistics.js
import React from 'react';
import '../index.css';

const Statistics = () => {
  const stats = [
    {
      icon: 'restaurant',
      number: '50+',
      label: 'Dishes',
      description: 'Variety of cuisines'
    },
    {
      icon: 'groups',
      number: '1000+',
      label: 'Happy Customers',
      description: 'Satisfied diners'
    },
    {
      icon: 'star',
      number: '4.9',
      label: 'Rating',
      description: 'Average rating'
    },
    {
      icon: 'emoji_events',
      number: '15+',
      label: 'Awards',
      description: 'Industry recognition'
    }
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">
                <span className='material-symbols-outlined'>{stat.icon}</span>
              </div>
              <h3 className="stat-number">{stat.number}</h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Statistics;