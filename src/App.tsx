import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./components/NavigationBar";
import {ReserveTimePage} from "./pages/ReserveTimePage";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <ReserveTimePage/>
        </div>
    );
}

export default App;
