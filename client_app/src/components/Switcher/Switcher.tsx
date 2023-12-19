import useDarkSide from '../../hooks/useDarkSide';
import ReactSwitch from 'react-switch';


export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? "light" : "dark");
    };

    return (
        <>
            <div className='flex flex-row-reverse pr-5'>
                <div className="flex ">
                    <ReactSwitch onChange={toggleDarkMode} checked={colorTheme == "dark"}
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
