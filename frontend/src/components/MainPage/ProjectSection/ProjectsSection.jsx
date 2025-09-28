import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
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
                setProjects(data); // Устанавливаем полученные данные в состояние
            } catch (error) {
                console.error("Ошибка при получении проектов:", error);
                setError(error); // Сохраняем ошибку в состоянии
            } finally {
                setLoading(false); // Завершаем состояние загрузки
            }
        };

        fetchProjects();
    }, []); // Пустой массив зависимостей означает, что эффект запустится один раз после первого рендера.

    if (loading) {
        return (
            <section className="projects__section">
                <div className="projects__wrapper container">
                    <h2 className="projects__heading">Загрузка проектов...</h2>
                    {/* Вы можете добавить спиннер или другую анимацию загрузки здесь */}
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        {/* Убедитесь, что у вас есть изображение спиннера в папке public или src/img */}
                        <img src="/img/spinner.gif" alt="Загрузка" style={{ width: '50px', height: '50px' }} />
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="projects__section">
                <div className="projects__wrapper container">
                    <h2 className="projects__heading">Ошибка при загрузке проектов. Попробуйте перезагрузить страницу</h2>
                </div>
            </section>
        );
    }

    // Ограничиваем количество отображаемых проектов до 6
    const projectsToShow = projects.slice(0, 6);

    return (
        <section className="projects__section">
            <div className="projects__wrapper container">
                <h2 className="projects__heading">История нашей компании — это история <span>успешных проектов по газификации</span></h2>

                <div className="projects__grid">
                    {projectsToShow.length > 0 ? ( // Проверяем, есть ли проекты для отображения
                        projectsToShow.map((project) => (
                            <div className="project-card" key={project.id}> {/* 'key' важен для React */}
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
                                <a href={project.link || '#'} className="project-card__button">Перейти к работе</a>
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

export default ProjectsSection;