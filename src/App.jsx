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
      <ToastContainer position='top-right' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/campaigns' element={<Campaigns />} />
        <Route path='/news' element={<News />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/campaign/:id' element={<CampaignDetails />} />
        <Route path='/news/:id' element={<NewsDetails />} />
      </Routes>
    </>
  );
}

export default App;
