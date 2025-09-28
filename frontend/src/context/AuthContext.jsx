// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/AuthService/AuthService.jsx';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                if (authService.isAuthenticated()) {
                    const profile = await authService.getProfile();
                    if (profile) {
                        setUser(profile);
                    } else {
                        authService.clearAuth();
                    }
                }
            } catch (error) {
                console.error('Auth initialization error:', error);
                authService.clearAuth();
            } finally {
                setIsLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = async (credentials) => {
        try {
            const userData = await authService.login(credentials);
            // Получаем полные данные профиля после успешного входа
            const profile = await authService.getProfile();
            if (profile) {
                setUser(profile);
            }
            return userData;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        authService.clearAuth();
        setUser(null);
    };

    const value = {
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};