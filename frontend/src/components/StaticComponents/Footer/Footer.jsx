import React from 'react';
import logo from '../../../img/logo.png';

const Footer = () => {
    return (
        <footer className="footer__container" id="contacts">
            <div className="footer__wrapper container">
                <div className="footer__left">
                    <div className="footer__logo">
                        <img className="footer__logo--img" src={logo} alt="Логотип компании 1Газовщик" />
                        <p className="footer__logo--brand-name">1ГАЗОВЩИК</p>
                    </div>
                    <p className="footer__copyright">
                        &copy; 1Газовщик все права защищены
                    </p>
                </div>

                <nav className="footer__nav">
                    <ul className="footer__nav--list">
                        <li className="footer__nav-list--item"><a href="#" className="footer__nav-list--link">О компании</a></li>
                        {/*<li className="footer__nav-list--item"><a href="#" className="footer__nav-list--link">Услуги</a></li>*/}
                        {/*<li className="footer__nav-list--item"><a href="#" className="footer__nav-list--link">Наши работы</a></li>*/}
                        <li className="footer__nav-list--item"><a href="#contacts" className="footer__nav-list--link">Контакты</a></li>
                    </ul>
                </nav>

                <div className="footer__contact">
                    <div className="footer__contact--phone-number">
                        <a href="tel:+74957492925">+7 (495) 749-29-25</a>
                    </div>
                    <div className="footer__contact--email">
                        <a href="mailto:7492925@mail.ru">
                            7492925@mail.ru
                        </a>
                    </div>
                    <a href="tel:+74957492925"><button className="button button-primary">Позвонить</button></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;