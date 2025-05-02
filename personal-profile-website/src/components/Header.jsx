import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  const headerStyle = {
    backgroundColor: '#ffffff',
    padding: '1.5rem 2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#2c3e50',
    textDecoration: 'none',
    background: 'linear-gradient(90deg, #3498db, #8e44ad)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '2.5rem',
    margin: 0,
    padding: 0,
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#3498db' : '#2c3e50',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'all 0.3s ease',
  });

  const linkUnderlineStyle = (path, id) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: location.pathname === path || hoveredLink === id ? '100%' : '0',
    height: '3px',
    background: 'linear-gradient(90deg, #3498db, #8e44ad)',
    transition: 'width 0.3s ease',
  });

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'education', path: '/education', label: 'Education' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>
          Profile
        </Link>
        <ul style={ulStyle}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                style={linkStyle(link.path)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                <span style={linkUnderlineStyle(link.path, link.id)}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;