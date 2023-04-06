import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar";
import {OrganizeCampPage} from "./pages/OrganizeCampPage";
import {ReserveTimePage} from "./pages/ReserveTimePage";
import {AdminDashboardPage} from "./pages/AdminDashboardPage";
import {SignupPage} from "./pages/SignupPage";
import {LoginPage} from "./pages/LoginPage";
import {useAuthContext} from "./hooks/useAuthContext";
import {useAdmin} from "./hooks/useAdmin";
import {ContactUsPage} from "./pages/ContactUsPage";
import {StatisticsPage} from "./pages/StatisticsPage";
import {CampRequestForm} from "./pages/CampRequestForm";

function App() {

    const {user, authIsReady} = useAuthContext()
    const {isAdmin} = useAdmin();

    return (
        <div className="App">
            <NavigationBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/signup'} element={<SignupPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/statistics'} element={<StatisticsPage/>}/>
                    <Route path={'/organize-camp'} element={<OrganizeCampPage/>}/>
                    <Route path={'/camp-request-form'} element={<CampRequestForm/>}/>
                    <Route path={'/reserve-time'} element={<ReserveTimePage/>}/>
                    <Route path={'/contact-us'} element={<ContactUsPage/>}/>
                    {user && isAdmin && <Route path={'/admin-dashboard'} element={<AdminDashboardPage/>}/>}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
