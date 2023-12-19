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
    const state = useTypedSelector((state) => state.auth);
  
    return (
      <Routes>
        {state.status ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeTwo />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path="/external-auth" element={<AuthPage />} />
              <Route path="/settings" element={<SettingsCard />} />
              <Route path="/team" element={<Outlet />}>
                <Route index element={<Team />} />
                <Route path="addUser"
                  element={
                    <ProtectedRoute
                      component={<AddUser />}
                      permission={Permission.Create}
                    />
                  }
                />
                <Route path="editUser/:userId"
                  element={
                    <ProtectedRoute
                      component={<EditUser />}
                      permission={Permission.Update}
                    />
                  }
                />
              </Route>
              <Route path="/vacation">
                <Route index element={<Navigate to='requests' />} />
                <Route path="requests" element={<VacationRequests />} />
                <Route path="all" element={<VacationsTable />} />
              </Route>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/userVerify" element={<UserVerify />} />
            <Route path="/external-auth" element={<AuthPage />} />
            <Route path="/emailConfirm" element={<EmailConfirm />} />
            <Route path="/passwordRecovery" element={<PasswordRecovery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    );
  };