// App.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';
import whatsappIcon from '../../../img/whatsapp-icon.png';
import { useAuth } from '../../../context/AuthContext'; // Импортируем useAuth

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Получаем состояние аутентификации пользователя из контекста
    const { user, isAuthenticated, logout } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Проверяем, является ли пользователь администратором
    const isAdmin = isAuthenticated && user?.role === 'ADMIN';

    return (
        <header className="header__container container">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img className="header__logo--img" src={logo} alt="Логотип компании 1Газовщик"/>
                    <p className="header__logo--brand-name">1ГАЗОВЩИК</p>
                </div>

                <button
                    className={`burger-button ${isMenuOpen ? 'active' : ''}`}
                    id="burger-button"
                    aria-label="Открыть меню"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`} id="mobile-menu">
                    <ul className="header__nav--list">
                        <li className="header__nav-list--item">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'header__nav-list--link active' : 'header__nav-list--link'} onClick={toggleMenu}>О компании</NavLink>
                        </li>
                        {/*<li className="header__nav-list--item">*/}
                        {/*    <NavLink to="/services" className={({ isActive }) => isActive ? 'header__nav-list--link active' : 'header__nav-list--link'} onClick={toggleMenu}>Услуги</NavLink>*/}
                        {/*</li>*/}
                        {/*<li className="header__nav-list--item">*/}
                        {/*    <NavLink to="/projects" className={({ isActive }) => isActive ? 'header__nav-list--link active' : 'header__nav-list--link'} onClick={toggleMenu}>Наши работы</NavLink>*/}
                        {/*</li>*/}
                        <li className="header__nav-list--item">
                            <a href="#contacts" className="header__nav-list--link" onClick={toggleMenu}>Контакты</a>
                        </li>
                        {/* Условный рендеринг: показываем ссылку только для админа */}
                        {isAdmin && (
                            <li className="header__nav-list--item">
                                <NavLink to="/admin" className={({ isActive }) => isActive ? 'header__nav-list--link active' : 'header__nav-list--link'} onClick={toggleMenu}>Админ-панель</NavLink>
                            </li>
                        )}
                        {/* Динамическая кнопка входа/выхода */}
                        <li className="header__nav-list--item">
                            {isAuthenticated ? (
                                <button onClick={() => { logout(); toggleMenu(); }} className="button button-primary header__mobile-menu-button">Выход</button>
                            ) : (
                                <NavLink to="/admin/login" className="button button-primary header__mobile-menu-button" onClick={toggleMenu}>Войти</NavLink>
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="header__contact">
                    <div className="header__contact--phone-number">
                        <a href="tel:+74957492925">+7 (495) 749 29-25</a>
                    </div>
                    <div className="header__contact--whatsapp-ico">
                        <a href="https://wa.me/74957492925?text=Здравствуйте!%20У%20меня%20вопрос%20по%20поводу..."> <img src={whatsappIcon} alt="WhatsApp"/></a>
                    </div>
                </div>

                {/* Кнопка "Оставить заявку" для десктопной версии */}
                <a href="tel:+74957492925" className="button button-primary header__desktop-button">Заказать звонок</a>
            </div>
        </header>
    );
};

export default Header;