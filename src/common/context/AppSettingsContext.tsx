import {createContext, ReactNode, useState} from 'react';

export type SettingsContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

export const AppSettingsContext = createContext<SettingsContextType>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

export const AppSettingsProvider = ({children}: {children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    }

    return (
        <AppSettingsContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </AppSettingsContext.Provider>
    );
}
