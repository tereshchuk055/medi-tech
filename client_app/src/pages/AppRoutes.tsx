import { Outlet, Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Home } from './Home';
// import RootLayout from '../components/Layout/Layout';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import TreatmentForm from '../components/TreatmentForm/TreatmentForm';
// import News from './News';
export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/signIn" element={<LoginForm />} />
            <Route path="/signUp" element={<RegisterForm />} />
            <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="/addTreat" element={<TreatmentForm />} />
                {/* <Route path="/news" element={<News />} /> */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}