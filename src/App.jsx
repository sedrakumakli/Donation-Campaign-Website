import { useState } from 'react'
import heroImg from './assets/hero.png'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css'
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs/ContactUs';
import News from './Pages/News/News';
import Campaigns from './Pages/Campaigns/Campaigns';
import CampaignDetails from './Pages/CampaignDetails/CampaignDetails';
import DirectDonation from './Models/DirectDonation/DirectDonation';
import Pledge from './Models/pledge/Pledge';
// import InKindDonation from './Pages/InKindDonation/InKindDonation.jsx';


function App() {

  return (
    <>
      {/* <div className="header">
      <TopBar/>
      <NavBar/> 
    </div> */}
      {/* <Home/> */}
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/news" element={<News />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route
          path="/campaign/:id"
          element={<CampaignDetails />}
        />
        <Route
          path="/campaign/:id/direct-donation"
          element={<DirectDonation />}
        />

        <Route
          path="/campaign/:id/pledge"
          element={<Pledge />}
        />
        {/* <Route
          path="/in-kind-donation"
          element={<InKindDonation />}
        /> */}
      </Routes>
    </>
  )
}

export default App;
