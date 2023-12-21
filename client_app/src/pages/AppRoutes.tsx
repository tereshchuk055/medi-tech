import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Home } from './Home';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import TreatmentForm from '../components/TreatmentForm/TreatmentForm';
import News from './News';
import RootLayout from '../components/Layout/Layout';
import Employees from './Employees';
import { useTypedSelector } from '../hooks/storeHooks';
import Profile from './Profile';


export const AppRoutes = () => {
    const state = useTypedSelector((state) => state.auth);

    return (
        <Routes>
            {state.isAuth ? (
                <>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/addTreat" element={<TreatmentForm />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/signIn" element={<Navigate to="/" />} />
                        <Route path="/signUp" element={<Navigate to="/" />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </>
            ) :
                (
                    <>
                        <Route path="/signIn" element={<LoginForm />} />
                        <Route path="/signUp" element={<RegisterForm />} />
                        <Route path="/*" element={<Navigate to="/signIn" />} />
                    </>
                )}


        </Routes>
    )
}