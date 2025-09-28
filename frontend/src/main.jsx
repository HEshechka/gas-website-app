import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Убедитесь, что это ваш главный компонент
import './index.css'; // Возможно, у вас тут импорт CSS
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Оборачиваем App в BrowserRouter */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);