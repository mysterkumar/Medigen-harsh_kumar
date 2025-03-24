import { useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const loginAttemptedRef = useRef(false);

  useEffect(() => {
    // Prevent double execution in StrictMode
    if (loginAttemptedRef.current) return;
    loginAttemptedRef.current = true;
    
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    axios.post('http://localhost:5000/login', { username, password })
      .then(res => {
        setToken(res.data.token);
        navigate('/main');
      })
      .catch(err => {
        alert('Login failed. Please refresh and try again.');
        loginAttemptedRef.current = false; // Allow retry on refresh
      });
  }, []);

  return <div>Logging in...</div>;
};

export default LoginPage;
