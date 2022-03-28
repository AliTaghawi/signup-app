import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import SingUp from './components/SingUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/singup" element={<SingUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Navigate to='/singup'/>} />
      </Routes>
    </div>
  );
}

export default App;
