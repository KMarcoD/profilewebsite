import React from 'react';

const About = () => {
    const sectionStyle = {
        padding: '3rem 2rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        maxWidth: '900px',
        margin: '3rem auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: '1.8',
        position: 'relative',
        overflow: 'hidden',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '1.5rem',
        textAlign: 'center',
        fontWeight: '700',
        position: 'relative',
    };

    const headingUnderline = {
        content: '""',
        display: 'block',
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #3498db 0%, #8e44ad 100%)',
        margin: '0.5rem auto 1.5rem',
        borderRadius: '2px',
    };

    const paragraphStyle = {
        fontSize: '1.1rem',
        color: '#34495e',
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 1.5rem',
    };

    const highlightStyle = {
        color: '#3498db',
        fontWeight: '600',
    };

    const universityStyle = {
        color: '#8e44ad',
        fontWeight: '600',
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
    };

    const interestCard = {
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease',
    };

    const interestTitle = {
        fontSize: '1.2rem',
        color: '#2c3e50',
        marginBottom: '0.5rem',
        fontWeight: '600',
    };

    return (
        <section style={sectionStyle}>
            <div style={headingStyle}>
                About Me
                <div style={headingUnderline}></div>
            </div>
            
            <p style={paragraphStyle}>
                Hi, I'm <span style={highlightStyle}>Duclayan, Krizstian Marco G.</span>, a passionate <span style={highlightStyle}>BSIT Student</span> specializing in <span style={highlightStyle}>Hardware and Software troubleshooting</span>. I love solving technical problems and bringing computers back to life!
            </p>
            
            <p style={paragraphStyle}>
                Currently studying at <span style={universityStyle}>University of Cabuyao</span>, I'm constantly expanding my knowledge in computer systems and emerging technologies. I believe that technology has the power to transform lives, and I'm committed to being part of that transformation.
            </p>
            
            <div style={gridContainer}>
                <div style={interestCard}>
                    <h3 style={interestTitle}>Technical Skills</h3>
                    <p>Computer hardware diagnostics, software troubleshooting, system maintenance, network fundamentals, and technical support.</p>
                </div>
                
                <div style={interestCard}>
                    <h3 style={interestTitle}>Current Focus</h3>
                    <p>Expanding my knowledge in system architecture, cybersecurity fundamentals, and advanced troubleshooting techniques.</p>
                </div>
            </div>
            
            <p style={paragraphStyle}>
                When I'm not studying, you can find me tinkering with computer hardware, exploring new technologies, or contributing to tech communities. I'm always excited to connect with fellow tech enthusiasts and collaborate on meaningful projects.
            </p>
            
            <p style={{...paragraphStyle, marginBottom: '0'}}>
                Let's connect and explore how we can work together to solve interesting technical challenges!
            </p>
        </section>
    );
};

export default About;