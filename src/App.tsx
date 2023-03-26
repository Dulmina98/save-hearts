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

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/signup'} element={<SignupPage/>}/>
                    <Route path={'/organize-camp'} element={<OrganizeCampPage/>}/>
                    <Route path={'/reserve-time'} element={<ReserveTimePage/>}/>
                    <Route path={'/admin-dashboard'} element={<AdminDashboardPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
