import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OrganizeCampPage} from "./pages/OrganizeCampPage";
import {ReserveTimePage} from "./pages/ReserveTimePage";
import {NavigationBar} from "./components/NavigationBar";
import {AdminDashboardPage} from "./pages/AdminDashboardPage";

ReactDOM.render(
    <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/organize-camp" element={<OrganizeCampPage/>}/>
            <Route path="/reserve-time" element={<ReserveTimePage/>}/>
            <Route path="/admin-dashboard" element={<AdminDashboardPage/>}/>
        </Routes>
    </BrowserRouter>

    , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
