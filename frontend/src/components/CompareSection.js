// frontend/src/components/CompareSection.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const CompareSection = () => {
  const { products } = useContext(AuthContext);
  const compareProducts = products.slice(0, 4); // First 4 only

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>🔍 Compare Medicines</h3>
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {compareProducts.map((product) => (
          <div key={product.id} style={{
            flex: '1 1 200px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: '100%', height: '120px', objectFit: 'contain', marginBottom: '8px' }}
            />
            <h4 style={{ fontSize: '16px' }}>{product.name}</h4>
            <p><strong>Manufacturer:</strong> {product.manufacturer}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Qty:</strong> {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareSection;
