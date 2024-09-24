import {createContext, ReactNode, useEffect, useState} from 'react';

export type SettingsContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

export const AppSettingsContext = createContext<SettingsContextType>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

export const AppSettingsProvider = ({children}: {children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        }
        else {
            document.documentElement.classList.add('dark');
        }
    }

    useEffect(() => {
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, [])

    return (
        <AppSettingsContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </AppSettingsContext.Provider>
    );
}
