import React from 'react';

const Education = () => {
    const sectionStyle = {
        padding: '3rem 2rem',
        backgroundColor: '#ffffff',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: '1.8',
        maxWidth: '900px',
        margin: '3rem auto',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        position: 'relative',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '1.5rem',
        fontWeight: '700',
        position: 'relative',
    };

    const headingUnderline = {
        content: '""',
        display: 'block',
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #3498db 0%, #8e44ad 100%)',
        margin: '0.5rem auto 2rem',
        borderRadius: '2px',
    };

    const timelineStyle = {
        position: 'relative',
        paddingLeft: '30px',
        maxWidth: '700px',
        margin: '0 auto',
    };

    const timelineItemStyle = {
        position: 'relative',
        padding: '1.5rem 2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        marginBottom: '2rem',
        borderLeft: '4px solid #3498db',
    };

    const timelineMarker = {
        position: 'absolute',
        left: '-10px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#3498db',
        border: '4px solid #f8f9fa',
    };

    const schoolNameStyle = {
        fontSize: '1.5rem',
        color: '#2c3e50',
        marginBottom: '0.5rem',
        fontWeight: '600',
    };

    const programStyle = {
        fontSize: '1.2rem',
        color: '#3498db',
        marginBottom: '0.5rem',
        fontWeight: '500',
    };

    const yearStyle = {
        fontSize: '1rem',
        color: '#7f8c8d',
        backgroundColor: '#ecf0f1',
        padding: '0.3rem 0.8rem',
        borderRadius: '50px',
        display: 'inline-block',
        fontWeight: '500',
    };

    const universityHighlight = {
        background: 'linear-gradient(120deg, #3498db 0%, #8e44ad 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <section style={sectionStyle}>
            <div style={headingStyle}>
                Education
                <div style={headingUnderline}></div>
            </div>

            <div style={timelineStyle}>
                <div style={timelineItemStyle}>
                    <div style={timelineMarker}></div>
                    <h3 style={schoolNameStyle}>
                        <span style={universityHighlight}>Pamantasan ng Cabuyao</span>
                    </h3>
                    <p style={programStyle}>Bachelor of Science in Information Technology</p>
                    <div style={yearStyle}>2022 - Present</div>
                    <p style={{ color: '#34495e', marginTop: '0.8rem' }}>
                        Currently pursuing my degree with focus on hardware and software troubleshooting, 
                        system administration, and emerging technologies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;