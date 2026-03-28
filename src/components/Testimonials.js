import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Amazing products with best service and competitive pricing. Truly the best in the industry!",
      name: "Rajesh Singh",
      title: "Business Owner",
      initials: "RS"
    },
    {
      rating: 5,
      text: "Supreme quality and exceptional service. The team's dedication to client satisfaction is outstanding!",
      name: "Ujjwal Sharma",
      title: "Retail Manager",
      initials: "US"
    },
    {
      rating: 5,
      text: "Timely delivery and consistent quality. They truly understand customer needs and deliver accordingly.",
      name: "Pardeep Kumar",
      title: "Procurement Head",
      initials: "PK"
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="customer-info">
                <div className="customer-avatar">{testimonial.initials}</div>
                <div>
                  <p className="customer-name">{testimonial.name}</p>
                  <p className="customer-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
