import React, { useState, useEffect } from 'react';
import './ProjectForm.css'; // Создайте этот CSS файл

const API_BASE_URL = '/api/projects';

const ProjectForm = ({ project, onFormSubmitSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        area: '',
        duration: '',
        location: '',
        link: '',
        imageUrl: '', // Для хранения URL изображения после загрузки
    });
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [formError, setFormError] = useState(null);

    useEffect(() => {
        if (project) {
            setFormData({
                title: project.title || '',
                area: project.area || '',
                duration: project.duration || '',
                location: project.location || '',
                link: project.link || '',
                imageUrl: project.imageUrl || '',
                description: project.description || '',
            });
        } else {
            // Сброс формы для нового проекта
            setFormData({
                title: '',
                area: '',
                duration: '',
                location: '',
                link: '',
                imageUrl: '',
                description: '',
            });
        }
        setFile(null); // Сбрасываем выбранный файл при смене проекта
        setFormError(null);
    }, [project]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (!file) {
            setFormError("Пожалуйста, выберите файл изображения.");
            return null;
        }

        setUploading(true);
        setFormError(null);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);

            const response = await fetch(`${API_BASE_URL}/uploadImage`, {
                method: 'POST',
                body: uploadFormData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Ошибка загрузки изображения: ${response.status} - ${errorText}`);
            }

            const imageUrl = await response.text(); // Spring возвращает URL как текст
            setFormData((prevData) => ({ ...prevData, imageUrl }));
            alert("Изображение успешно загружено!");
            return imageUrl;
        } catch (err) {
            console.error("Ошибка при загрузке изображения:", err);
            setFormError(err.message);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);

        // Если файл выбран, сначала загружаем его
        let finalImageUrl = formData.imageUrl; // Использование существующего URL по умолчанию
        if (file) {
            const uploadedUrl = await handleImageUpload();
            if (uploadedUrl) {
                finalImageUrl = uploadedUrl;
            } else {
                return; // Прекращаем выполнение, если загрузка файла не удалась
            }
        }

        // Если файла не было и imageUrl отсутствует, можно добавить валидацию
        if (!finalImageUrl && !project) { // Для нового проекта, если нет изображения
            setFormError("Изображение обязательно для нового проекта.");
            return;
        }

        const projectDataToSave = { ...formData, imageUrl: finalImageUrl };

        try {
            const method = project ? 'PUT' : 'POST';
            const url = project ? `${API_BASE_URL}/${project.id}` : API_BASE_URL;

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectDataToSave),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Или response.text(), в зависимости от того, что возвращает бэкенд при ошибке
                throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || response.statusText}`);
            }

            alert(`Проект успешно ${project ? 'обновлен' : 'создан'}!`);
            onFormSubmitSuccess(); // Вызываем колбэк для обновления списка и скрытия формы
        } catch (err) {
            console.error("Ошибка при сохранении проекта:", err);
            setFormError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="project-form">
            {formError && <p className="form-error">{formError}</p>}

            <div className="form-group">
                <label htmlFor="title">Заголовок:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="area">Площадь:</label>
                <input
                    type="text"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="duration">Срок реализации:</label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Локация:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="link">Описание:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="link">Ссылка:</label>
                <input
                    type="text"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="file">Загрузить изображение:</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="image/*"
                />
                {formData.imageUrl && !file && (
                    <p>Текущее изображение: <img src={`/images${formData.imageUrl}`} alt="Текущее" style={{ width: '100px' }} /></p>
                )}
                {file && <p>Выбран файл: {file.name}</p>}
                {uploading && <p>Загрузка файла...</p>}
            </div>

            <div className="form-actions">
                <button type="submit" disabled={uploading}>
                    {project ? 'Обновить проект' : 'Создать проект'}
                </button>
                <button type="button" onClick={onCancel} className="cancel-button">Отмена</button>
            </div>
        </form>
    );
};

export default ProjectForm;
