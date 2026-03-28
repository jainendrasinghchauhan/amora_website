import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: '100% sustainable and recyclable materials for environmentally conscious consumers'
    },
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'Sourced from the finest materials ensuring superior softness and durability'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'State-of-the-art manufacturing techniques for consistent excellence'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
