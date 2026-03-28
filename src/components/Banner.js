import React from 'react';

const Banner = () => {
  const openPhoneDialer = () => {
    const phoneNumber = '+919891235060';
    window.location.href = `tel:${phoneNumber}`;
  };

  const openWhatsApp = () => {
    const phoneNumber = '919891235060';
    const message = encodeURIComponent('Hello! I am interested in your premium products. Can you provide more information?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="banner" className="banner">
      <div className="banner-content">
        <h1>Premium Quality Products</h1>
        <p>Delivering excellence with sustainability and innovation</p>
        <div className="banner-buttons">
          <button className="btn btn-primary" onClick={openPhoneDialer}>
            📞 Call Us Now
          </button>
          <button className="btn btn-secondary" onClick={openWhatsApp}>
            💬 Message on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
