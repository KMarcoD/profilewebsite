import React, { useState } from 'react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '2.5rem 1rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  };

  const copyrightStyle = {
    fontSize: '0.95rem',
    color: '#bdc3c7',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
  };

  const linkStyle = (id) => ({
    color: hoveredLink === id ? '#3498db' : '#ecf0f1',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    padding: '0.5rem 0',
    position: 'relative',
  });

  const linkUnderlineStyle = (id) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: hoveredLink === id ? '100%' : '0',
    height: '2px',
    backgroundColor: '#3498db',
    transition: 'width 0.3s ease',
  });

  const iconStyle = {
    fontSize: '1.2rem',
  };

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/KMarcoD',
      icon: '👨‍💻',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/pogi.dragon/',
      icon: '👍',
    },
  ];

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={socialLinksStyle}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(link.id)}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span style={iconStyle}>{link.icon}</span>
              {link.name}
              <span style={linkUnderlineStyle(link.id)}></span>
            </a>
          ))}
        </div>
        <p style={copyrightStyle}>
          © {new Date().getFullYear()} Krizstian Marco G. Duclayan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;