import CompletedProjects from '../../components/Home/Sections/CompletedProjects';
import ContactCTA from '../../components/Home/Sections/ContactCTA';
import CurrentCampaigns from '../../components/Home/Sections/CurrentCampaigns';
import DonationFlow from '../../components/Home/Sections/DonationFlow';
import InKindDonations from '../../components/Home/Sections/InKindDonations';
import LastestNews from '../../components/Home/Sections/LatestNews';
import UpcomingCampaigns from '../../components/Home/Sections/UpcomingCampaigns';
import { completedProjects, upcomingCampaigns } from '../../mockupData';
import HomeHero from '../../Sections/HomeSections/HomeHero/HomeHero';

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
      <ContactCTA />
      {/* <CampaignCard/> */}
      {/* <CampaignSlider/> */}
      {/* <ProjectCard/> */}
    </div>
  );
}
export default Home;
