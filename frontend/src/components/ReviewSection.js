import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ReviewSection = ({ productId }) => {
  const { token } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!productId || !token) return;

    axios.get(`http://localhost:5000/reviews/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setReviews(res.data))
    .catch(err => console.error('Failed to fetch reviews:', err));
  }, [productId, token]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>⭐ User Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map((r, index) => (
            <li key={index}>
              <strong>Rating:</strong> {r.rating}/5
              <br />
              <em>{r.review_text}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewSection;
