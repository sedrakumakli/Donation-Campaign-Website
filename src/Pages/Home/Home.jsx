import CampaignCard from '../../components/CampaignCard/CampaignCard';
import Experts from '../../components/Experts/Experts';
import CurrentCampaigns from '../../components/Home/Sections/CurrentCampaigns';
import DonationFlow from '../../components/Home/Sections/DonationFlow';
import UpcomingCampaigns from '../../components/Home/Sections/UpcomingCampaigns';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import { upcomingCampaigns } from '../../mockupData';
import CampaignSlider from '../../Sections/HomeSections/CampaignSlider/CampaignSlider';
import HomeHero from '../../Sections/HomeSections/HomeHero/HomeHero';

function Home() {
  return (
    <div className='home'>
      <HomeHero />
      <UpcomingCampaigns campaigns={upcomingCampaigns} />
      <CurrentCampaigns campaigns={upcomingCampaigns} />
      <DonationFlow />
      {/* <CampaignCard/> */}
      {/* <CampaignSlider/> */}
      {/* <ProjectCard/> */}
    </div>
  );
}
export default Home;
