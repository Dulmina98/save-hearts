import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./components/NavigationBar";
import {ReserveTimePage} from "./pages/ReserveTimePage";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <ReserveTimePage/>
            <Footer/>
        </div>
    );
}

export default App;
