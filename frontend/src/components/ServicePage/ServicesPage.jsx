// src/components/ServicesPage.jsx
import React, {useEffect, useState} from 'react'; // Импортируем useState и useEffect
import './ServicesPage.css';

const API_SERVICES_URL = 'http://localhost:8080/api/services'; // Пример URL, измените по необходимости

const ServicesPage = () => {
    const [services, setServices] = useState([]); // Состояние для хранения списка услуг
    const [loading, setLoading] = useState(true);   // Состояние для отслеживания загрузки данных
    const [error, setError] = useState(null);       // Состояние для хранения ошибок

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(API_SERVICES_URL);

                if (!response.ok) { // Проверяем, успешен ли был HTTP-ответ
                    // Если ответ не OK (например, 404 или 500), выбрасываем ошибку
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json(); // Парсим ответ как JSON
                setServices(data); // Обновляем состояние с полученными услугами
            } catch (error) {
                console.error("Ошибка при получении услуг:", error);
                setError(error); // Сохраняем ошибку в состоянии
            } finally {
                setLoading(false); // В любом случае, завершаем состояние загрузки
            }
        };

        fetchServices(); // Вызываем функцию получения данных при монтировании компонента

        // Пустой массив зависимостей означает, что этот эффект запустится один раз
        // после первоначального рендеринга и не будет повторяться.
    }, []);

    // Условный рендеринг:
    if (loading) {
        return (
            <section className="services-page">
                <div className="container">
                    <h1 className="services-page__heading">Загрузка услуг...</h1>
                    {/* Вы можете добавить спиннер или другую анимацию загрузки здесь */}
                    <div style={{textAlign: 'center', padding: '50px'}}>
                        {/* Пример простого спиннера или текста */}
                        <p>Пожалуйста, подождите...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="services-page">
                <div className="container">
                    <h1 className="services-page__heading">Ошибка при загрузке услуг. Попробуйте перезагрузить
                        страницу.</h1>
                </div>
            </section>
        );
    }

    // Если данные загружены успешно и ошибок нет, отображаем таблицу
    return (
        <section className="services-page">
            <div className="container">
                <h1 className="services-page__heading">Наши услуги</h1>

                {services.length > 0 ? ( // Проверяем, есть ли услуги для отображения
                    <table className="services-table">
                        <thead>
                        <tr>
                            <th>Наименование услуги</th>
                            <th>Описание</th>
                            <th>Цена</th>
                        </tr>
                        </thead>
                        <tbody>
                        {services.map(service => (
                            <tr key={service.id}>
                                <td>{service.title}</td>
                                <td>{service.description}</td>
                                <td>{service.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Пока нет доступных услуг.</p>
                )}

                <div className="services-page__cta">
                    <a href="tel:+74957492925">
                        <button className="button hero__button">Связаться с нами</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;