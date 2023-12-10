import { useEffect, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from './useStorage';

export default function useDarkSide(): [string, Dispatch<SetStateAction<string>>] {    
    const [theme, setTheme] = useLocalStorage({ key: "theme", defaultValue: "light" })// Використання кастомного хука замість UseState

    const colorTheme = theme == "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}