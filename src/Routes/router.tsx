
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "../pages/Homepage" ;
import ResturentPage from '../pages/resturentPage';
import React from 'react';
import SignUp from '../pages/signUp';
import Login from '../pages/login';
import AuthRestaurantPage from '../pages/AthResturentPage';

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resturent" element={<ResturentPage />} />
        <Route path="/resturent/auth" element={<AuthRestaurantPage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
   
  );
}
