import CampaignCard from "../../components/CampaignCard/CampaignCard";
import Experts from "../../components/Experts/Experts";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import CampaignSlider from "../../Sections/HomeSections/CampaignSlider/CampaignSlider";
import HomeHero from "../../Sections/HomeSections/HomeHero/HomeHero";

function Home(){
    return(

        <div className="home">
         
         <HomeHero/>
         {/* <CampaignCard/> */}
         {/* <CampaignSlider/> */}
         {/* <ProjectCard/> */}

        </div>
    )
}
export default Home;