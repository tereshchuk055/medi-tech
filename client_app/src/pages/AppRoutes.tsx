import  {Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Home } from './Home';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import TreatmentForm from '../components/TreatmentForm/TreatmentForm';
import News from './News';
import RootLayout from '../components/Layout/Layout';
import Employees from './Employees';
// import Profile from './Profile';

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/signIn" element={<LoginForm />} />
            <Route path="/signUp" element={<RegisterForm />} />
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/addTreat" element={<TreatmentForm />} />
                <Route path="/news" element={<News />} />
                <Route path="/employees" element={<Employees />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}