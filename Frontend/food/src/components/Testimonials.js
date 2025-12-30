
// ============================================
// TESTIMONIALS COMPONENT
// ============================================
// File: src/components/Testimonials.js
import React, { useState } from 'react';
import '../index.css';

const Testimonials = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Sachin Kumar',
    role: 'Food Blogger',
    image: `${process.env.PUBLIC_URL}/images/user1.jpg`,
    rating: 5,
    text: 'Absolutely amazing experience! The food quality is outstanding and the service is impeccable.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Mahesh Sharma',
    role: 'Business Owner',
    image: `${process.env.PUBLIC_URL}/images/user2.jpg`,
    rating: 5,
    text: 'Best restaurant in town! Professional service and delicious food.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Prashant Verma',
    role: 'Teacher',
    image: `${process.env.PUBLIC_URL}/images/user3.jpg`,
    rating: 5,
    text: 'Perfect place for family dinners. Great value for money!',
    date: '3 weeks ago'
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our <span className='highlight'>Customers</span> Say</h2>
          <p className="section-description">
            Real reviews from real people who love our food
          </p>
        </div>

        <div className="testimonials-wrapper">
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            <span className='material-symbols-outlined'>arrow_back</span>
          </button>

          <div className="testimonial-card">
            <div className="quote-icon">
              <span className='material-symbols-outlined'>format_quote</span>
            </div>
            
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className='material-symbols-outlined filled'>star</span>
              ))}
            </div>

            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="testimonial-author">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80';
                }}
              />
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
                <small>{testimonials[currentIndex].date}</small>
              </div>
            </div>
          </div>

          <button className="testimonial-nav next" onClick={nextTestimonial}>
            <span className='material-symbols-outlined'>arrow_forward</span>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;