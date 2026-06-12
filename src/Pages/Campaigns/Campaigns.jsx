import CampaignCard from "../../components/CampaignCard/CampaignCard";
import SearchAndFilterBar from "../../components/search&filterBar/searchAndfilterBar";
import "./Campaigns.css";

const campaigns = [
  {
    id: 1,
    image: "/images/water.jpg",
    title: "حملة المياه",
    target: 100000,
    collected: 75400,
    progress: 75,
    completedProjects: 8,
    relatedProjects: 12,
    status: "نشطة"
  },
  {
    id: 2,
    image: "/images/food.jpg",
    title: "حملة الغذاء",
    target: 50000,
    collected: 20000,
    progress: 40,
    completedProjects: 3,
    relatedProjects: 7,
    status: "نشطة"
  }
];

const Campaigns = () => {
  return (
    <div className="campaigns">
      <section className="header">
        <SearchAndFilterBar />
      </section>
      <section className="container-campaign">
       {campaigns.map(campaign => (
        <CampaignCard
        key={campaign.id}
          image={campaign.image}
          title={campaign.title}
          target={campaign.target}
          collected={campaign.collected}
          progress={campaign.progress}
          completedProjects={campaign.completedProjects}
          relatedProjects={campaign.relatedProjects}
          status={campaign.status} />
       ))} 
      </section>
    </div>
  )
}
export default Campaigns;