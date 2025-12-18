
// ============================================
// ENHANCED REVIEW COMPONENT
// ============================================
// File: src/components/Review.js
import React, { useState } from 'react';
import reviewApi from "../apis/reviewapi";
import '../index.css';

const Review = () => {
  const [data] = useState(reviewApi);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(data.length / reviewsPerPage);
  const startIndex = currentPage * reviewsPerPage;
  const currentReviews = data.slice(startIndex, startIndex + reviewsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="review-section" id="review">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-badge">Reviews</span>
          <h2 className="section-title">Customer <span className='highlight'>Reviews</span></h2>
          <p className="section-description">
            See what our happy customers are saying about us
          </p>
        </div>

        <div className="reviews-container">
          {currentReviews.map((curelem) => {
            const { id, para, image, name } = curelem;
            return (
              <div className="review-card" key={id}>
                <div className="review-header">
                  <img 
                    src={image} 
                    alt={name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80';
                    }}
                  />
                  <div className="review-author">
                    <h4>{name}</h4>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className='material-symbols-outlined filled'>star</span>
                      ))}
                    </div>
                  </div>
                  <span className='material-symbols-outlined quote-icon'>format_quote</span>
                </div>
                <p className="review-text">{para}</p>
                <div className="review-footer">
                  <span className="verified">
                    <span className='material-symbols-outlined'>verified</span>
                    Verified Customer
                  </span>
                  <span className="review-date">2 days ago</span>
                </div>
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="review-navigation">
            <button onClick={prevPage} className="nav-btn">
              <span className='material-symbols-outlined'>arrow_back</span>
            </button>
            <div className="page-indicators">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`page-dot ${index === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index)}
                />
              ))}
            </div>
            <button onClick={nextPage} className="nav-btn">
              <span className='material-symbols-outlined'>arrow_forward</span>
            </button>
          </div>
        )}

        <div className="review-cta">
          <h3>Have you dined with us?</h3>
          <p>Share your experience and help others discover Foodies</p>
          <button className="hero-btn primary-btn">
            <span className='material-symbols-outlined'>rate_review</span>
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
}

export default Review;