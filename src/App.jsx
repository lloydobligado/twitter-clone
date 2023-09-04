import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
  return (
    <div className="w-full h-full min-h-screen bg-black flex justify-center">
      <div className="max-w-[79.0625rem] w-[79.0625rem] h-full bg-black flex justify-center">
        <div className="h-full w-[17.1875rem]">
          <Sidebar />
        </div>

        <div className="w-[37.5rem] h-full bg-black border-r border-[#2F3336]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
