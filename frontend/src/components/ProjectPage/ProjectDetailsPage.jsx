// src/components/ProjectDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailsPage.css'; // Создайте этот файл для стилей

const ProjectDetailsPage = () => {
    const { id } = useParams(); // Получаем id из URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                // Отправляем запрос на сервер, используя id из URL
                const response = await fetch(`http://myapp-backend:8080/api/projects/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error("Ошибка при получении данных проекта:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [id]); // Эффект будет перезапускаться, если id в URL изменится

    if (loading) {
        return <div className="project-details-loading">Загрузка...</div>;
    }

    if (error || !project) {
        return <div className="project-details-error">Проект не найден.</div>;
    }

    return (
        <section className="project-details-page">
            <div className="project-details__wrapper container">
                <h1 className="project-details__heading">{project.title}</h1>
                <img
                    src={project.imageUrl ? `http://myapp-backend:8080${project.imageUrl}` : '../img/hero.png'}
                    alt={project.title}
                    className="project-details__image"
                />
                <p className="project-details__description">{project.description}</p>
                <div className="project-details__info-grid">
                    <div className="info-item">
                        <strong>Площадь:</strong> <span>{project.area}</span>
                    </div>
                    <div className="info-item">
                        <strong>Срок реализации:</strong> <span>{project.duration}</span>
                    </div>
                    <div className="info-item">
                        <strong>Локация:</strong> <span>{project.location}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsPage;
