import About from "../../components/Home/Sections/About";
import CompletedProjects from "../../components/Home/Sections/CompletedProjects";
import ContactCTA from "../../components/Home/Sections/ContactCTA";
import CurrentCampaigns from "../../components/Home/Sections/CurrentCampaigns";
import DonationFlow from "../../components/Home/Sections/DonationFlow";
import ImpactStats from "../../components/Home/Sections/ImpactStats";
import InKindDonations from "../../components/Home/Sections/InKindDonations";
import LastestNews from "../../components/Home/Sections/LatestNews";
import UpcomingCampaigns from "../../components/Home/Sections/UpcomingCampaigns";
import { completedProjects, upcomingCampaigns } from "../../mockupData";
import HomeHero from "../../Sections/HomeSections/HomeHero/HomeHero";
// import ImpactStats from "../../components/ImpactStats/ImpactStats";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const stats = [
  {
    n: 120,
    s: "+",
    label: "حملة تم إطلاقها",
    icon: CampaignRoundedIcon,
  },
  {
    n: 95,
    s: "%",
    label: "معدل وصول التبرعات",
    icon: VerifiedRoundedIcon,
  },
  {
    n: 15000,
    s: "+",
    label: "متبرع نشط",
    icon: VolunteerActivismRoundedIcon,
  },
  {
    n: 8400,
    s: "+",
    label: "أسرة استفادت",
    icon: GroupsRoundedIcon,
  },
  {
    n: 3200,
    s: "+",
    label: "تبرع عيني",
    icon: Inventory2RoundedIcon,
  },
  {
    n: 480,
    s: "+",
    label: "مشروع مكتمل",
    icon: TaskAltRoundedIcon,
  },
];
function Home() {
  return (
    <div className="home">
      <HomeHero />
      <About />
      <UpcomingCampaigns campaigns={upcomingCampaigns} />
      <CurrentCampaigns campaigns={upcomingCampaigns} />
      <CompletedProjects projects={completedProjects} />
      <ImpactStats stats={stats} />
      <DonationFlow />
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
