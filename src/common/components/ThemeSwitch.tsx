import {RiMoonLine, RiSunLine} from '@remixicon/react';

interface Props {
    isDark: boolean;
    toggleTheme: () => void;
    className?: string;
}

const ThemeSwitch = ({ isDark, toggleTheme, className }: Props) => {
    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`${className} dark:text-app-primary text-app-secondary dark:bg-app-secondary bg-slate-300 rounded-lg p-2`}
        >
            {!isDark && <RiMoonLine size={24} />}
            {isDark && <RiSunLine size={24} />}
        </button>
    )
}

export default ThemeSwitch;