// src/components/ProjectsPage.jsx
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './ProjectsPage.css';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/projects');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Ошибка при получении проектов:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section className="projects-page">
                <div className="projects__wrapper container">
                    <h2 className="projects__heading">Загрузка проектов...</h2>
                    <div style={{textAlign: 'center', padding: '50px'}}>
                        <img src="/img/spinner.gif" alt="Загрузка" style={{width: '50px', height: '50px'}}/>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="projects-page">
                <div className="projects__wrapper container">
                    <h2 className="projects__heading">Ошибка при загрузке проектов. Попробуйте перезагрузить страницу.</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="projects-page">
            <div className="projects__wrapper container">
                <h1 className="projects__heading">История нашей компании — это история <span>успешных проектов по газификации</span></h1>
                <div className="projects__grid">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <div className="project-card" key={project.id}>
                                <img
                                    src={project.imageUrl ? `http://localhost:8080${project.imageUrl}` : '../img/hero.png'}
                                    alt={project.title || 'Проект'}
                                    className="project-card__image"
                                />
                                <h3 className="project-card__title">{project.title}</h3>
                                <div className="project-card__details">
                                    <div className="detail-item">
                                        <span className="detail-value">{project.area}</span>
                                        <span className="detail-label">Площадь</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-value">{project.duration}</span>
                                        <span className="detail-label">Срок реализации</span>
                                    </div>
                                </div>
                                <div className="project-card__location">
                                    <span className="location-label">Локация:</span>
                                    <span className="location-value">{project.location}</span>
                                </div>
                                {/* Используем компонент Link для навигации */}
                                <Link to={`/projects/${project.id}`} className="project-card__button">
                                    Перейти к работе
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Пока нет доступных проектов.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;