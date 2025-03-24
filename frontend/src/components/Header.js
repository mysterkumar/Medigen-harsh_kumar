import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { token } = useContext(AuthContext);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={"https://medingen.in/migfulllogo.png"}
          alt="Medingen Logo"
          style={{ height: '40px' }}
        />
        <h2 style={{ margin: 0 }}>Medingen</h2>
      </div>
      {token && <p style={{ margin: 0, fontWeight: 'bold' }}>👤 Logged in</p>}
    </header>
  );
};

export default Header;
