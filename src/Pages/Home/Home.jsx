import CampaignCard from '../../components/CampaignCard/CampaignCard';
import Experts from '../../components/Experts/Experts';
import CompletedProjects from '../../components/Home/Sections/CompletedProjects';
import CurrentCampaigns from '../../components/Home/Sections/CurrentCampaigns';
import DonationFlow from '../../components/Home/Sections/DonationFlow';
import InKindDonations from '../../components/Home/Sections/InKindDonations';
import LastestNews from '../../components/Home/Sections/LatestNews';
import UpcomingCampaigns from '../../components/Home/Sections/UpcomingCampaigns';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import { completedProjects, upcomingCampaigns } from '../../mockupData';
import CampaignSlider from '../../Sections/HomeSections/CampaignSlider/CampaignSlider';
import HomeHero from '../../Sections/HomeSections/HomeHero/HomeHero';
import { PROJECTS } from '../CampaignDetails/CampaignDetails';

function Home() {
  return (
    <div className='home'>
      <HomeHero />
      <UpcomingCampaigns campaigns={upcomingCampaigns} />
      <CurrentCampaigns campaigns={upcomingCampaigns} />
      <DonationFlow />
      <CompletedProjects projects={completedProjects} />
      <LastestNews />
      <InKindDonations />
      {/* <CampaignCard/> */}
      {/* <CampaignSlider/> */}
      {/* <ProjectCard/> */}
    </div>
  );
}
export default Home;
