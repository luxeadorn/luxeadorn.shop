
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Luxeadorn</h1>
      <p style={styles.text}>Discover premium fashion accessories curated just for you.</p>
      <div style={styles.buttons}>
        <Link to="/shop" style={styles.button}>Shop Now</Link>
        <Link to="/login" style={styles.buttonOutline}>Login</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '50px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff8f0',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222',
  },
  text: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '40px',
    textAlign: 'center',
    maxWidth: '500px',
  },
  buttons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#222',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
  },
  buttonOutline: {
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: '#222',
    textDecoration: 'none',
    border: '2px solid #222',
    borderRadius: '8px',
  }
};

export default Home;
