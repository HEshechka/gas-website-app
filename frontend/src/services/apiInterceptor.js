// services/apiInterceptor.js
import { authService } from './authService';

// Интерцептор для добавления токена к запросам
export const apiInterceptor = {
    async request(url, options = {}) {
        const token = authService.getToken();

        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return fetch(url, {
            ...options,
            headers,
            credentials: 'include'
        });
    }
};
