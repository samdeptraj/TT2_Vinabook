import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  link: {
    fontSize: '16px',
    color: 'blue',
    textDecoration: 'underline',
  },
};
