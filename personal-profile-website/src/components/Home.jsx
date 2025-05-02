import React, { useState } from 'react';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
    };

    const headingStyle = {
        fontSize: '3.5rem',
        color: '#2c3e50',
        marginBottom: '1.5rem',
        fontWeight: '700',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    };

    const highlightStyle = {
        background: 'linear-gradient(120deg, #3498db 0%, #8e44ad 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        color: '#34495e',
        maxWidth: '700px',
        lineHeight: '1.8',
        marginBottom: '2rem',
    };

    const buttonStyle = {
        marginTop: '2rem',
        padding: '1rem 2.5rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#fff',
        background: 'linear-gradient(90deg, #3498db 0%, #2980b9 100%)',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 20px rgba(52, 152, 219, 0.3)' : '0 5px 15px rgba(52, 152, 219, 0.2)',
    };

    const decorationStyle = {
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(52, 152, 219, 0.1)',
        top: '-100px',
        right: '-100px',
        zIndex: '0',
    };

    const decorationStyle2 = {
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(142, 68, 173, 0.1)',
        bottom: '-50px',
        left: '-50px',
        zIndex: '0',
    };

    return (
        <section style={sectionStyle}>
            <div style={decorationStyle}></div>
            <div style={decorationStyle2}></div>
            
            <div style={{ position: 'relative', zIndex: '1' }}>
                <h1 style={headingStyle}>
                    Welcome to <span style={highlightStyle}>My Profile</span>
                </h1>
                <p style={paragraphStyle}>
                    Hello! I'm <strong style={{ color: '#3498db' }}>Duclayan, Krizstian Marco G.</strong>, 
                    a passionate <span style={{ fontStyle: 'italic' }}>3IT-B student</span>. 
                    Explore my profile to discover my projects, skills, and journey in technology!
                </p>
                <a
                    href="about"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Learn More About Me
                </a>
            </div>
        </section>
    );
};

export default Home;