
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "../pages/Homepage" 
import ResturentPage from '../pages/resturentPage';

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resturent" element={<ResturentPage />} />
      </Routes>
   
  );
}
