import Cookies from 'js-cookie';
import { ApiConfig } from '../config/api';

const AUTH_COOKIE_NAME = 'flux_api_key';
const AUTH_COOKIE_EXPIRES = 7; // days

export const authService = {
    async login(credentials) {
        try {
            const response = await fetch(`${ApiConfig.getBaseUrl()}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Set the API key in cookies
            Cookies.set(AUTH_COOKIE_NAME, data.api_key, {
                expires: AUTH_COOKIE_EXPIRES,
                secure: true,
                sameSite: 'strict',
            });

            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    },

    getApiKey() {
        return Cookies.get(AUTH_COOKIE_NAME);
    },

    isAuthenticated() {
        return !!this.getApiKey();
    },

    logout() {
        Cookies.remove(AUTH_COOKIE_NAME);
    },
};
