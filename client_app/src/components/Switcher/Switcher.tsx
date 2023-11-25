import { useState } from 'react';
import useDarkSide, { Theme } from '../../hooks/useDarkSide';
import ReactSwitch from 'react-switch';

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(colorTheme === Theme.dark);

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? Theme.light : Theme.dark);
        setDarkSide(checked);
    };

    return (
        <>
            <div className='flex flex-row-reverse pr-5'>
                <div className="flex ">
                    <label className='mr-4 dark:text-gray-100'> {colorTheme === Theme.light ? "Dark Mode" : "Light Mode"} </label>
                    <ReactSwitch onChange={toggleDarkMode} checked={darkSide} />
                </div>

            </div>
        </>
    );
}
