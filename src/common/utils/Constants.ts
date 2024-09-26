export const EmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const APIBasePath = `${import.meta.env.VITE_API_USE_TLS === 'true' ? 'https' : 'http'}://${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;