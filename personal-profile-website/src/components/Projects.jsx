import React, { useState } from 'react';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const sectionStyle = {
        padding: '4rem 2rem',
        backgroundColor: '#f8fafc',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: '100vh',
    };

    const containerStyle = {
        maxWidth: '1100px',
        margin: '0 auto',
    };

    const headingStyle = {
        fontSize: '2.8rem',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '3rem',
        fontWeight: '700',
        position: 'relative',
    };

    const headingUnderline = {
        content: '""',
        display: 'block',
        width: '100px',
        height: '5px',
        background: 'linear-gradient(90deg, #3498db 0%, #8e44ad 100%)',
        margin: '0.8rem auto 0',
        borderRadius: '3px',
    };

    const projectsGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
    };

    const projectCardStyle = (id) => ({
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        padding: '2rem',
        transition: 'all 0.3s ease',
        transform: hoveredProject === id ? 'translateY(-10px)' : 'none',
        borderTop: '4px solid',
        borderImage: 'linear-gradient(90deg, #3498db 0%, #8e44ad 100%) 1',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    });

    const projectTitleStyle = {
        fontSize: '1.8rem',
        color: '#2c3e50',
        marginBottom: '1rem',
        fontWeight: '600',
    };

    const projectDescriptionStyle = {
        fontSize: '1.1rem',
        color: '#4a5568',
        marginBottom: '1.5rem',
        lineHeight: '1.7',
        flexGrow: '1',
    };

    const techTagStyle = {
        display: 'inline-block',
        backgroundColor: '#e2e8f0',
        color: '#2d3748',
        padding: '0.3rem 0.8rem',
        borderRadius: '50px',
        fontSize: '0.9rem',
        fontWeight: '500',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
    };

    const projectFooterStyle = {
        marginTop: 'auto',
        paddingTop: '1rem',
    };

    const projects = [
        {
            id: 1,
            title: "Java Calculator",
            description: "This Java-based calculator demonstrates object-oriented programming (OOP) principles with clean, modular design. Featuring core operations (addition, subtraction, multiplication, division) encapsulated in dedicated classes, it serves as an excellent learning tool for OOP concepts like encapsulation, inheritance, and polymorphism. The intuitive interface makes arithmetic operations accessible while maintaining robust architecture.",
            technologies: ["Java", "OOP Principles"],
            link: "#"
        },
        {
            id: 2,
            title: "Java BMI Calculator",
            description: "A practical application of Java OOP that calculates Body Mass Index (BMI) using the formula: weight/(height²). The project features input validation, result categorization (underweight, normal, etc.), and a clean separation of concerns between UI and calculation logic. Perfect example of how OOP creates maintainable, well-organized applications even for simple utilities.",
            technologies: ["Java", "OOP", "Data Validation"],
            link: "#"
        }
    ];

    return (
        <section style={sectionStyle} id="projects">
            <div style={containerStyle}>
                <div style={headingStyle}>
                    My Projects
                    <div style={headingUnderline}></div>
                </div>

                <div style={projectsGridStyle}>
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            style={projectCardStyle(project.id)}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <h2 style={projectTitleStyle}>{project.title}</h2>
                            <p style={projectDescriptionStyle}>{project.description}</p>
                            <div style={projectFooterStyle}>
                                <div>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} style={techTagStyle}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;