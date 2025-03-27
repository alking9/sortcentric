import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    width: '100vw',
    padding: '16px',
    fontFamily: 'Segoe UI, sans-serif',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', // responsive font size
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '24px',
    width: '100%',
    maxWidth: '800px',
  },
  label: {
    fontSize: '1rem',
  },
  select: {
    padding: '6px 12px',
    fontSize: '1rem',
    borderRadius: '6px',
    backgroundColor: '#212121',
    color: '#ffffff',
    border: '1px solid #444',
    outline: 'none',
    minWidth: '130px',
  },
  button: {
    padding: '8px 14px',
    fontSize: '1rem',
    borderRadius: '6px',
    backgroundColor: '#1e88e5',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    minWidth: '110px',
  },
  barContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '300px',
    width: '100%',
    maxWidth: '1000px',
    padding: '0 12px',
    margin: '0 auto',
    overflowX: 'auto', // enable horizontal scroll on small screens
  },
};

export default styles;
