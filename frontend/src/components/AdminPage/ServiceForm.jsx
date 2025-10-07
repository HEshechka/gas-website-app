import React, { useState, useEffect } from 'react';
import './ProjectForm/ProjectForm.css'; // Можно использовать те же стили, что и для ProjectForm

const API_SERVICES_URL = '/api/services'; // URL для API услуг

const ServiceForm = ({ service, onFormSubmitSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
    });
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);

    // При монтировании или изменении пропса 'service' (для режима редактирования)
    useEffect(() => {
        if (service) {
            // Если передан объект 'service', значит мы в режиме редактирования
            setFormData({
                title: service.title || '',
                description: service.description || '',
                price: service.price || '',
            });
        } else {
            // Если 'service' не передан, значит мы в режиме создания новой услуги
            setFormData({
                title: '',
                description: '',
                price: '',
            });
        }
        setFormError(null); // Сбрасываем ошибки формы
    }, [service]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormError(null);

        const method = service ? 'PUT' : 'POST';
        const url = service ? `${API_SERVICES_URL}/${service.id}` : API_SERVICES_URL;

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Пытаемся прочитать сообщение об ошибке из ответа, если доступно
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || 'Unknown error'}`);
            }

            // Если запрос успешен, вызываем колбэк
            onFormSubmitSuccess();
        } catch (err) {
            console.error("Error submitting service form:", err);
            setFormError(`Не удалось сохранить услугу: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-overlay"> {/* Обёртка для затемнения фона, если хотите */}
            <form className="project-form" onSubmit={handleSubmit}> {/* Используем тот же класс CSS */}
                <h3>{service ? 'Редактировать услугу' : 'Создать новую услугу'}</h3>

                {formError && <p className="error-message">{formError}</p>}

                <div className="form-group">
                    <label htmlFor="title">Название услуги:</label>
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
                    <label htmlFor="description">Описание:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4" // Увеличиваем высоту текстового поля
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Цена (текст):</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" disabled={loading}>
                        {loading ? 'Сохранение...' : (service ? 'Обновить услугу' : 'Создать услугу')}
                    </button>
                    <button type="button" onClick={onCancel} className="cancel-button">
                        Отмена
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceForm;
