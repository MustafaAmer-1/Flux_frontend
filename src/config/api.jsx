export const ApiConfig = {
    baseUrl: '',
    setBaseUrl: (url) => {
        ApiConfig.baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    },
    getBaseUrl: () => ApiConfig.baseUrl,
};
