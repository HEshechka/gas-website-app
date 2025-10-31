// src/components/ServicesPage.jsx
import React, {useEffect, useState} from 'react';
import './ServicesPage.css';

const API_SERVICES_URL = '/api/services';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(API_SERVICES_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error("Ошибка при получении услуг:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    if (loading) {
        return (
            <section className="services-page">
                <div className="container">
                    <h1 className="services-page__heading">Наши услуги</h1>
                    <div style={{textAlign: 'center', padding: '50px', color: 'var(--main-light)'}}>
                        <p>Загрузка услуг...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="services-page">
                <div className="container">
                    <h1 className="services-page__heading">Наши услуги</h1>
                    <div style={{textAlign: 'center', padding: '40px', color: 'var(--accent)'}}>
                        <p>Ошибка при загрузке услуг: {error}</p>
                        <p style={{marginTop: '20px', fontSize: '0.9em', color: 'var(--main-light)'}}>
                            Пожалуйста, попробуйте перезагрузить страницу
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="services-page">
            <div className="container">
                <h1 className="services-page__heading">Наши услуги</h1>
                {services.length > 0 ? (
                    <div className="services-table-container">
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
                                    {/* ✨ УБЕДИТЕСЬ, ЧТО ЭТИ АТРИБУТЫ ДОБАВЛЕНЫ */}
                                    <td data-label="Наименование">{service.title}</td>
                                    <td data-label="Описание">{service.description}</td>
                                    <td data-label="Цена">{service.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="services-page__no-services">
                        <p>Пока нет доступных услуг.</p>
                    </div>
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
