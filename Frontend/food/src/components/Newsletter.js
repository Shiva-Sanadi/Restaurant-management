
// ============================================
// NEWSLETTER COMPONENT
// ============================================
// File: src/components/Newsletter.js
import React, { useState } from 'react';
import '../index.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (data.success) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-wrapper">
          <div className="newsletter-content">
            <span className='material-symbols-outlined'>mail</span>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get exclusive offers, new menu updates, and special event invitations</p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <span className='material-symbols-outlined'>mail</span>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button type="submit" disabled={loading || subscribed}>
                {loading ? 'Subscribing...' : subscribed ? 'Subscribed!' : 'Subscribe'}
                {!loading && !subscribed && (
                  <span className='material-symbols-outlined'>arrow_forward</span>
                )}
              </button>
            </div>
            {subscribed && (
              <p className="success-message">
                <span className='material-symbols-outlined'>check_circle</span>
                Thank you for subscribing!
              </p>
            )}
          </form>

          <div className="newsletter-benefits">
            <div className="benefit">
              <span className='material-symbols-outlined'>local_offer</span>
              <span>Exclusive Discounts</span>
            </div>
            <div className="benefit">
              <span className='material-symbols-outlined'>restaurant_menu</span>
              <span>New Menu Updates</span>
            </div>
            <div className="benefit">
              <span className='material-symbols-outlined'>event</span>
              <span>Special Events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;