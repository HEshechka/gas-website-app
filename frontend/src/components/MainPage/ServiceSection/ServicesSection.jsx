import React from 'react';

const ServicesSection = () => {
    return (
        <section className="services__section">
            <div className="services__wrapper container">
                <h2 className="services__heading">Мы предлагаем вам наш <span>большой опыт</span> работы
                    и <span>профессионализм</span> в области газификации</h2>

                <div className="services__grid">
                    <div className="service-card">
                        <h3 className="service-card__title">Настройка и подключение ростеров</h3>
                        <p className="service-card__description">
                            Мы поможем вам организовать производство, соответствующее самым высоким стандартам качества
                            и безопасности.
                        </p>
                        {/* Изменено на button hero__button */}
                        <a href="tel:+74957492925">
                            <button className="service-card__button button hero__button">Позвонить</button>
                        </a>
                    </div>

                    <div className="service-card">
                        <h3 className="service-card__title">Газификация загородного дома</h3>
                        <p className="service-card__description">
                            Мечтаете, чтобы жизнь за городом стала комфортной? Газификация — это разумное вложение в
                            ваше будущее, которое повысит качество жизни.
                        </p>
                        <a href="tel:+74957492925">
                            <button className="service-card__button button hero__button">Позвонить</button>
                        </a>
                    </div>

                    <div className="service-card">
                        <h3 className="service-card__title">Сварочные работы</h3>
                        <p className="service-card__description">
                            Наши специалисты выполняют полный комплекс сварочных соединений при монтаже газопровода с
                            соблюдением всех требований СНиП, СП и Гостехнадзора.
                        </p>
                        <a href="tel:+74957492925">
                            <button className="service-card__button button hero__button">Позвонить</button>
                        </a>
                    </div>

                    <div className="service-card">
                        <h3 className="service-card__title">Газификация предприятий</h3>
                        <p className="service-card__description">
                            Переход на новый уровень эффективности - контроль над затратами и экологичность. Доверьте
                            нам провести газ на ваш объект, чтобы вы могли сосредоточиться на росте.
                        </p>
                        <a href="tel:+74957492925">
                            <button className="service-card__button button hero__button">Позвонить</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;