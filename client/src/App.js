import React from 'react';
import NavBar from "./components/NavBar";
import Login from "./components/user/Login";
import Notification from "./components/Notification";

const App = () => {
    return (
        <>
        <Notification />
        <Login />
        <NavBar />
        </>
    )
};

export default App;