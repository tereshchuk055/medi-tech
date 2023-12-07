import { useEffect, useState, Dispatch, SetStateAction } from 'react';

export enum Theme {
    dark,
    light
}

export default function useDarkSide(): [Theme, Dispatch<SetStateAction<Theme>>] {
    const [theme, setTheme] = useState<Theme>(localStorage.theme as Theme || Theme.light);
    const colorTheme: Theme = theme === Theme.dark ? Theme.light : Theme.dark;

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(Theme[colorTheme]);
        root.classList.add(Theme[theme]);

        localStorage.setItem('theme', Theme[theme]);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}

