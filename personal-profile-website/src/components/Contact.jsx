import React, { useState } from 'react';

const Contact = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const sectionStyle = {
        padding: '4rem 2rem',
        backgroundColor: '#ffffff',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '900px',
        margin: '3rem auto',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const decorationStyle = {
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,152,219,0.1) 0%, rgba(255,255,255,0) 70%)',
        top: '-50px',
        right: '-50px',
        zIndex: '0',
    };

    const headingStyle = {
        fontSize: '2.8rem',
        color: '#2c3e50',
        marginBottom: '1.5rem',
        fontWeight: '700',
        position: 'relative',
        zIndex: '1',
    };

    const headingUnderline = {
        content: '""',
        display: 'block',
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #3498db 0%, #8e44ad 100%)',
        margin: '0.8rem auto 2rem',
        borderRadius: '2px',
    };

    const contactGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1',
    };

    const contactCardStyle = {
        backgroundColor: '#f8fafc',
        borderRadius: '12px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
    };

    const contactIconStyle = {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#3498db',
    };

    const contactTitleStyle = {
        fontSize: '1.5rem',
        color: '#2c3e50',
        marginBottom: '1rem',
        fontWeight: '600',
    };

    const contactLinkStyle = (id) => ({
        color: hoveredItem === id ? '#3498db' : '#4a5568',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        wordBreak: 'break-word',
    });

    const socialLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '2rem',
        flexWrap: 'wrap',
    };

    const socialLinkStyle = (id) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: hoveredItem === id ? '#3498db' : '#4a5568',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        backgroundColor: hoveredItem === id ? '#ebf5fb' : 'transparent',
    });

    const contacts = [
        {
            id: 'email',
            icon: '✉️',
            title: 'Email',
            content: 'duclayankrizstianmarco79@gmail.com',
            link: 'mailto:duclayankrizstianmarco79@gmail.com'
        },
        {
            id: 'location',
            icon: '📍',
            title: 'Location',
            content: 'Cabuyao, Laguna, Philippines',
            link: 'https://maps.google.com/?q=Cabuyao,Laguna'
        }
    ];

    const socials = [
        {
            id: 'facebook',
            icon: '📘',
            name: 'Facebook',
            link: 'https://www.facebook.com/pogi.dragon/'
        },
        {
            id: 'github',
            icon: '💻',
            name: 'GitHub',
            link: 'https://github.com/KMarcoD'
        }
    ];

    return (
        <section style={sectionStyle} id="contact">
            <div style={decorationStyle}></div>
            
            <h1 style={headingStyle}>
                Get In Touch
                <div style={headingUnderline}></div>
            </h1>

            <div style={contactGridStyle}>
                {contacts.map((contact) => (
                    <div key={contact.id} style={contactCardStyle}>
                        <div style={contactIconStyle}>{contact.icon}</div>
                        <h3 style={contactTitleStyle}>{contact.title}</h3>
                        <a
                            href={contact.link}
                            style={contactLinkStyle(contact.id)}
                            onMouseEnter={() => setHoveredItem(contact.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.content}
                        </a>
                    </div>
                ))}
            </div>

            <div style={socialLinksStyle}>
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        style={socialLinkStyle(social.id)}
                        onMouseEnter={() => setHoveredItem(social.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>{social.icon}</span>
                        {social.name}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;