import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/user/Login';
import Notification from './components/Notification';
import Map from './components/map/Map';

const App = () => {
  return (
    <>
      <Notification />
      <Login />
      <NavBar />
      <Map />
    </>
  );
};

export default App;
