import React from 'react';
import './App.css';
import Labs from './Labs';
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <h1>Welcome to Web Dev</h1>
      <h2>Kerry Owusu</h2>
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
