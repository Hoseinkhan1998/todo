
import React from 'react';
import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Desktop1 from './pages/Desktop1';
import Desktop2 from './pages/Desktop2';
import Test from './pages/Test';
import RightMenu from './components/RightMenu';





function App() {
  return (
    <div className='flex flex-row justify-between'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/desktop1' element={<Desktop1 />} />
        <Route path='desktop2' element={<Desktop2/>} />
        <Route path='test' element={<Test/>} />
      </Routes>
      <RightMenu/>
    </div>
  );
}

export default App;
