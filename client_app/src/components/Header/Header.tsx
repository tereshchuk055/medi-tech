import Logo from '../Logo/Logo';
import Switcher from '../Switcher/Switcher';
import { useAppDispatch, useTypedSelector } from '../../hooks/storeHooks';
import { setAuth } from "../../store/slices/auth";



export default function Header() {
    const dispatch = useAppDispatch()
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        <header  className="dark:bg-neutral-900 pr-5  xl:border-b border-gray-200 border-opacity-75 border-gray-100 w-full ">
            <nav>
                <ul className="flex space-x-4 items-center">
                    <div className="container flex items-center justify-between p-2">
                        <div> <Logo /></div>
                        <div className="text-gray-900 flex space-x-12 items-center text-lg dark:text-sky-100 ">
                            <li><a href="/">Home</a></li>
                            {isAuth ? (
                                <>
                                    <li><a href="/Appointment" >Doctor's appointments</a></li>
                                 

                                </>
                            ) : (
                                <>
                                    <li><a href="#" >About usс</a></li>
                                </>
                            )}
                            <li><a href="/Employees">Employees</a></li>
                            <li><a href="/News">News</a></li>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <Switcher />
                            {isAuth ? (
                                <>
                                    <li><button className="bg-sky-500 rounded-xl py-2 px-4 font-bold text-sky-100"><a href="/Profile">Profile</a></button></li>
                                    <li><button className="bg-lime-500 rounded-xl py-2 px-4 font-bold text-sky-100" onClick={() => dispatch(setAuth(false))}>Log Out</button></li>
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
