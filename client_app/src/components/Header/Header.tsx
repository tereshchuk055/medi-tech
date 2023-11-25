import { useState } from 'react';
import Logo from '../Logo/Logo';


export default function Header() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

    return (
        <header className="bg-neutral-900 pr-5  xl:border-b border-gray-200 border-opacity-75 border-gray-100 w-full ">
            <nav>
                <ul className="flex space-x-4 items-center">
                    <div className="container flex items-center justify-between p-2">
                        <div> <Logo /></div>
                        <div className="flex space-x-12 items-center text-lg text-sky-100 ">
                            <li><a href="#">Головна</a></li>
                            <li><a href="#" >Про нас</a></li>
                            <li><a href="/Employees">Співробітники</a></li>
                            <li><a href="/News">Новини</a></li>
                        </div>
                        <div className="flex space-x-4 items-center">
                            {isUserLoggedIn ? (
                                <>
                                    <li><button className="bg-sky-500 rounded-xl py-2 px-4 font-bold text-sky-100"><a href="/Profile">Profile</a></button></li>
                                    <li><button className="bg-lime-500 rounded-xl py-2 px-4 font-bold text-sky-100" onClick={() => setIsUserLoggedIn(false)}>Log Out</button></li>
                                </>
                            ) : (
                                <>
                                    <li><button className="bg-sky-500 rounded-xl py-2 px-4 font-bold text-sky-100"><a href="/SignUp">Sign Up</a></button></li>
                                    <li><button className="bg-lime-500 rounded-xl py-2 px-4 font-bold text-sky-100"><a href="/SignIn">Sign In</a></button></li>
                                </>
                            )}
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
