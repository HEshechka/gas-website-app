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

// Пример использования в сервисах
export const adminService = {
    async getUsers() {
        const response = await apiInterceptor.request(`${API_BASE_URL}/admin/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    }
};