// components/AdminPage/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext.jsx';
import './AdminLogin.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (!formData.username.trim() || !formData.password.trim()) {
                throw new Error('Все поля обязательны для заполнения');
            }

            await login(formData);

            navigate('/admin', {
                replace: true,
                state: { message: 'Добро пожаловать!' }
            });
        } catch (error) {
            setError(error.message || 'Ошибка авторизации. Проверьте логин и пароль.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login__card">
                <h2 className="admin-login__title">Вход для Администратора</h2>
                <form className="admin-login__form" onSubmit={handleSubmit}>
                    <div className="admin-login__form-group">
                        <label className="admin-login__label">Логин:</label>
                        <input
                            type="text"
                            name="username"
                            className="admin-login__input"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Введите ваш логин"
                            required
                            disabled={isLoading}
                            autoComplete="username"
                        />
                    </div>
                    <div className="admin-login__form-group">
                        <label className="admin-login__label">Пароль:</label>
                        <input
                            type="password"
                            name="password"
                            className="admin-login__input"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Введите ваш пароль"
                            required
                            disabled={isLoading}
                            autoComplete="current-password"
                        />
                    </div>
                    {error && (
                        <div className={`admin-login__error ${error ? 'shake' : ''}`}>
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="admin-login__submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Вход...' : 'Войти'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;