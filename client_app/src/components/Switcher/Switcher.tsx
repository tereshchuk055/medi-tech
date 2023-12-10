import { useState } from 'react';
import useDarkSide from '../../hooks/useDarkSide';
import ReactSwitch from 'react-switch';


export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(colorTheme === "dark");

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? "light" : "dark");
        setDarkSide(checked);
    };
    return (
        <>
            <div className='flex flex-row-reverse pr-5'>
                <div className="flex ">
                    <ReactSwitch onChange={toggleDarkMode} checked={darkSide}   
                        checkedIcon={
                            <div>🌙</div>}
                        uncheckedIcon={
                            <div>🌙</div>}
                        offColor="#404040"
                        onColor="#F3F4F6"
                        offHandleColor="#F3F4F6"
                        onHandleColor="#D4D4D4"              
                      />
                </div>
            </div>
        </>
    );
}
