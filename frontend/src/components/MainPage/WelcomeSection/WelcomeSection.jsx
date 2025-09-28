import React from 'react';

const WelcomeSection = () => {
    return (
        <section className="hero__section">
            <div className="hero__wrapper container">
                <div className="hero__content">
                    <h1 className="hero__title">Газ — энергия для жизни и новых возможностей!</h1>
                    <p className="hero__description">
                        Компания «Первый Газовщик» предоставляет различные виды услуг по профессиональному подключению
                        ростеров, монтажу газовых и водопроводных труб, газобаллонному отоплению загородных домов и
                        многое другое.
                    </p>
                    <div className="hero__callback">
                        <p className="hero__callback-text">Получить бесплатную консультацию</p>
                        <a href="tel:+74957492925">
                            <button className="hero__button hero__button--secondary">Позвонить</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;