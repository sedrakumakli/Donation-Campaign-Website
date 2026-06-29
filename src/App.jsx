import { useState } from 'react';
import heroImg from './assets/hero.png';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs/ContactUs';
import News from './Pages/News/News';
import Campaigns from './Pages/Campaigns/Campaigns';
import CampaignDetails from './Pages/CampaignDetails/CampaignDetails';
import NewsDetails from './Pages/News/NewsDetails';
import { ToastContainer } from 'react-toastify';
import DonatePage from './Pages/Donate/DonatePage';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      {/* <div className="header">
      <TopBar/>
      <NavBar/> 
    </div> */}
      {/* <Home/> */}
      <ToastContainer position='top left' />
      <Box sx={{ width: '100%', position: 'fixed', zIndex: 10 }}>
        <TopBar />
        <NavBar />
      </Box>
      <Box sx={{ pt: '126px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/campaigns' element={<Campaigns />} />
          <Route path='/news' element={<News />} />
          <Route path='/donate' element={<DonatePage />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/campaign/:id' element={<CampaignDetails />} />
          <Route path='/news/:id' element={<NewsDetails />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
