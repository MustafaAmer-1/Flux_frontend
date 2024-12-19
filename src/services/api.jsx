export const apiService = {
    async fetch(endpoint, options = {}) {
        const apiKey = authService.getApiKey();

        const headers = {
            'Content-Type': 'application/json',
            ...(apiKey && { Authorization: `ApiKey ${apiKey}` }),
            ...options.headers,
        };

        const response = await fetch(`${ApiConfig.getBaseUrl()}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        return response.json();
    },
};
