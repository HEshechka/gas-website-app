import React, {useEffect, useState} from 'react';
import ProjectForm from '../ProjectForm/ProjectForm.jsx'; // Компонент формы для проектов
import ServiceForm from '../ServiceForm.jsx'; // Компонент формы для сервисов
import './AdminDashboard.css'; // Ваш CSS файл для стилей админки

// Базовые URL вашего Spring Boot API
const API_PROJECTS_URL = 'http://myapp-backend:8080/api/projects';
const API_SERVICES_URL = 'http://myapp-backend:8080/api/services'; // URL для услуг

const AdminDashboard = () => {
    // --- Состояния для управления проектами ---
    const [projects, setProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [errorProjects, setErrorProjects] = useState(null);
    const [editingProject, setEditingProject] = useState(null); // Для хранения проекта, который редактируется
    const [showProjectForm, setShowProjectForm] = useState(false); // Для отображения/скрытия формы проектов

    // --- Состояния для управления услугами ---
    const [services, setServices] = useState([]);
    const [loadingServices, setLoadingServices] = useState(true);
    const [errorServices, setErrorServices] = useState(null);
    const [editingService, setEditingService] = useState(null); // Для хранения услуги, которая редактируется
    const [showServiceForm, setShowServiceForm] = useState(false); // Для отображения/скрытия формы услуг

    // --- Эффект для загрузки проектов при монтировании компонента ---
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(API_PROJECTS_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                setErrorProjects(error.message);
            } finally {
                setLoadingProjects(false);
            }
        };

        const fetchServices = async () => {
            try {
                const response = await fetch(API_SERVICES_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                setServices(data);
            } catch (error) {
                setErrorServices(error.message);
            } finally {
                setLoadingServices(false);
            }
        };

        fetchProjects();
        fetchServices();
    }, []);

    // --- Функции для управления проектами ---
    const handleAddProject = () => {
        setEditingProject(null);
        setShowProjectForm(true);
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        setShowProjectForm(true);
    };

    const handleDeleteProject = async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить этот проект?')) {
            try {
                await fetch(`${API_PROJECTS_URL}/${id}`, {
                    method: 'DELETE',
                });
                setProjects(projects.filter(project => project.id !== id));
            } catch (error) {
                console.error('Ошибка при удалении проекта:', error);
            }
        }
    };

    const handleProjectFormSubmit = () => {
        setShowProjectForm(false);
        setEditingProject(null);
        // После успешного создания/обновления, перезагружаем список
        fetchProjects();
    };

    // --- Функции для управления услугами ---
    const handleAddService = () => {
        setEditingService(null);
        setShowServiceForm(true);
    };

    const handleEditService = (service) => {
        setEditingService(service);
        setShowServiceForm(true);
    };

    const handleDeleteService = async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить эту услугу?')) {
            try {
                await fetch(`${API_SERVICES_URL}/${id}`, {
                    method: 'DELETE',
                });
                setServices(services.filter(service => service.id !== id));
            } catch (error) {
                console.error('Ошибка при удалении услуги:', error);
            }
        }
    };

    const handleServiceFormSubmit = () => {
        setShowServiceForm(false);
        setEditingService(null);
        // После успешного создания/обновления, перезагружаем список
        fetchServices();
    };

    return (
        <div className="admin-container container">
            <h1>Админ-панель</h1>

            {/* Секция для управления проектами */}
            <h2 className="section-title">Управление проектами</h2>
            <button className="admin-button add-button" onClick={handleAddProject}>
                Добавить новый проект
            </button>

            {showProjectForm && (
                <ProjectForm
                    project={editingProject}
                    onFormSubmitSuccess={handleProjectFormSubmit}
                    onCancel={() => {
                        setShowProjectForm(false);
                        setEditingProject(null);
                    }}
                />
            )}

            {!showProjectForm && projects.length > 0 && (
                <table className="projects-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Местоположение</th>
                        <th>Длительность</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td data-label="ID">{project.id}</td>
                            <td data-label="Название">{project.title}</td>
                            <td data-label="Местоположение">{project.location}</td>
                            <td data-label="Длительность">{project.duration}</td>
                            <td data-label="Действия">
                                <button className="admin-button edit-button" onClick={() => handleEditProject(project)}>
                                    Редактировать
                                </button>
                                <button className="admin-button delete-button"
                                        onClick={() => handleDeleteProject(project.id)}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {/* Секция для управления услугами */}
            <h2 className="section-title">Управление услугами</h2>
            <button className="admin-button add-button" onClick={handleAddService}>
                Добавить новую услугу
            </button>

            {showServiceForm && (
                <ServiceForm
                    service={editingService}
                    onFormSubmitSuccess={handleServiceFormSubmit}
                    onCancel={() => {
                        setShowServiceForm(false);
                        setEditingService(null);
                    }}
                />
            )}

            {!showServiceForm && services.length > 0 && (
                <table className="projects-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {services.map((service) => (
                        <tr key={service.id}>
                            <td data-label="ID">{service.id}</td>
                            <td data-label="Название">{service.title}</td>
                            <td data-label="Описание">{service.description}</td>
                            <td data-label="Цена">{service.price}</td>
                            <td data-label="Действия">
                                <button className="admin-button edit-button" onClick={() => handleEditService(service)}>
                                    Редактировать
                                </button>
                                <button className="admin-button delete-button"
                                        onClick={() => handleDeleteService(service.id)}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminDashboard;
