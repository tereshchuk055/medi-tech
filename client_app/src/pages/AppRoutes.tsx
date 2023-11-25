import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Home } from './Home';

import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import TreatmentForm from '../components/TreatmentForm/TreatmentForm';

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/signIn" element={<LoginForm />} />
            <Route path="/signUp" element={<RegisterForm />} />
            
        </Routes>
    )
}