import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

function App() {
    const [mod, setMod] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        if (mod === 'dark') {
            setMod('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        } else {
            setMod('dark');
            document.body.style.backgroundColor = 'black';
            showAlert("Dark mode has been enabled", "success");
        }
    };

    return (
        <Router>
            <NavBar heading="TextUtils" mod={mod} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mod} />} />
            </Routes>
        </Router>
    );
}

export default App;
