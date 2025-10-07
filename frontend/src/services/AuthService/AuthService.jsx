class AuthService {
    async login(credentials) {
        try {
            const response = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData || 'Login failed');
            }

            const data = await response.json();

            // Сохраняем токен в localStorage
            if (data.token) {
                localStorage.setItem('userToken', data.token);
            }
            return data;
        } catch (error) {
            throw new Error(error.message || 'Network error');
        }
    }

    // Получение профиля пользователя с бэкенда
    async getProfile() {
        try {
            const token = this.getToken();
            const response = await fetch(`/api/auth/me`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include'
            });

            if (!response.ok) {
                // Если ответ не 200 OK, значит что-то пошло не так
                throw new Error('Failed to get profile');
            }

            return await response.json();
        } catch (error) {
            throw new Error('Profile fetch failed');
        }
    }

    getToken() {
        return localStorage.getItem('userToken');
    }

    isAuthenticated() {
        return !!this.getToken();
    }

    clearAuth() {
        localStorage.removeItem('userToken');
    }
}

export const authService = new AuthService();
