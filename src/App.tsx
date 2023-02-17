import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./components/NavigationBar";
import {Footer} from "./components/Footer";
import {OrganizeCampPage} from "./pages/OrganizeCampPage";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <OrganizeCampPage/>
            <Footer/>
        </div>
    );
}

export default App;
