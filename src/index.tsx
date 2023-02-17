import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OrganizeCampPage} from "./pages/OrganizeCampPage";
import {ReserveTimePage} from "./pages/ReserveTimePage";
import {NavigationBar} from "./components/NavigationBar";
import {Footer} from "./components/Footer";

ReactDOM.render(
    <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/organize-camp" element={<OrganizeCampPage/>}/>
            <Route path="/reserve-time" element={<ReserveTimePage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>

    , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
