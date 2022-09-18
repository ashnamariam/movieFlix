import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




