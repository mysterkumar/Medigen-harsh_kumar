import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const SaltSection = ({ productId }) => {
  const { token } = useContext(AuthContext);
  const [salts, setSalts] = useState([]);

  useEffect(() => {
    if (!productId || !token) return;

    axios.get(`http://localhost:5000/salts/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setSalts(res.data))
    .catch(err => console.error('Failed to fetch salts:', err));
  }, [productId, token]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>🧪 Salt Composition</h3>
      {salts.length === 0 ? (
        <p>No salt data found.</p>
      ) : (
        <ul>
          {salts.map(salt => (
            <li key={salt.id}>
              <strong>{salt.name}</strong>: {salt.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SaltSection;
