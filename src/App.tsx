import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <div>
    <HashRouter>
    <div className="App">
      
      <Routes>
        {/*<Route path="/" element={<Navigate to="Labs" />} /> */}
        <Route path="/" element={<Navigate to="/Kanbas" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </div>
    </HashRouter>
    </div>
  );
}

export default App;
