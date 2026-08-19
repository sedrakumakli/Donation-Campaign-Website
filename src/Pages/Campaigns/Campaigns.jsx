import { useEffect, useState } from "react";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import CampaignFilter from "../../components/CampaignFilter/CampaignFilter";
import SearchAndFilterBar from "../../components/search&filterBar/searchAndfilterBar";
import "./Campaigns.css";
import axios from "axios";
import BreadCrumb from "../../components/BreadCrumb";
import CustomPagination from "../../components/CustomPagination";
import CustomContainer from "../../components/common/CustomContainer";
import { useGetData } from "../../customHooks/reactQuery/useGetData";
import {getCampaigns} from "../../services/campaigns"
import config from "../../constants/enviroment";
const mockCampaigns = [
  // {
  //   id: 1,
  //   image: "/src/assets/homehero.png.png",
  //   title: "حملة المياه",
  //   target: 100000,
  //   collected: 75400,
  //   progress: 75,
  //   completedProjects: 8,
  //   relatedProjects: 12,
  //   status: "نشطة"
  // },
  // {
  //   id: 2,
  //   image: "/src/assets/homehero.png.png",
  //   title: "حملة الغذاء",
  //   target: 50000,
  //   collected: 20000,
  //   progress: 40,
  //   completedProjects: 3,
  //   relatedProjects: 7,
  //   status: "منتهية"
  // },
  // {
  //   id: 3,
  //   image: "/src/assets/homehero.png.png",
  //   title: "حملة الغذاء",
  //   target: 50000,
  //   collected: 20000,
  //   progress: 100,
  //   completedProjects: 3,
  //   relatedProjects: 7,
  //   status: "مكتملة"
  // },
  // {
  //   id: 4,
  //   image: "/src/assets/homehero.png.png",
  //   title: "حملة المستقبل",
  //   target: 50000,
  //   collected: 20000,
  //   progress: 0,
  //   completedProjects: 3,
  //   relatedProjects: 7,
  //   status: "جديدة"
  // },
  // {
  //   id: 5,
  //   image: "/src/assets/homehero.png.png",
  //   title: "حملة المستقبل",
  //   target: 50000,
  //   collected: 20000,
  //   progress: 0,
  //   completedProjects: 3,
  //   relatedProjects: 7,
  //   status: "جديدة"
  // },
  // {
  //   id: 6,
  //   image: "/src/assets/homehero.png.png",
  //   title: "حملة المستقبل",
  //   target: 50000,
  //   collected: 20000,
  //   progress: 0,
  //   completedProjects: 3,
  //   relatedProjects: 7,
  //   status: "جديدة"
  // },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    title: "حملة توفير مياه الشرب",
    target: 100000,
    collected: 75400,
    progress: 75,
    status: "نشطة",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696",
    title: "حملة دعم الغذاء للأسر المحتاجة",
    target: 50000,
    collected: 32000,
    progress: 64,
    status: "نشطة",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "حملة كسوة الشتاء",
    target: 75000,
    collected: 75000,
    progress: 100,
    status: "مكتملة",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581093588401-11f9a8f0c6f0",
    title: "حملة إعادة تأهيل المدارس",
    target: 120000,
    collected: 45000,
    progress: 37,
    status: "نشطة",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    title: "حملة دعم المرضى",
    target: 90000,
    collected: 90000,
    progress: 100,
    status: "مكتملة",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "حملة التعليم للأطفال",
    target: 60000,
    collected: 28000,
    progress: 46,
    status: "منتهية",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    title: "حملة بناء منازل للأسر المتضررة",
    target: 200000,
    collected: 120000,
    progress: 60,
    status: "نشطة",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    title: "حملة طوارئ الزلزال",
    target: 300000,
    collected: 180000,
    progress: 0,
    status: "جديدة",
  }
];

const Campaigns = () => {
  const [searchKey, setSearchKey] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    governorate: "",
    city: "",
    region: "",
    project: null,
    status: [],
  });

  const {
    data: campaignsData,
    isFetching: isFetchingCampaigns,
    error:campaignsErr,
  } = useGetData({
    queryKey: ['campaigns'],
    queryFn: getCampaigns,
  });
   const campaigns = campaignsData?.data || [];
   

  


  const filteredCampaigns = campaigns?.filter((campaign) =>
    campaign?.title?.toLowerCase().includes(searchKey.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(
    filteredCampaigns.length / cardsPerPage
  );

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentCampaigns = filteredCampaigns.slice(
    startIndex,
    endIndex
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

   if (isFetchingCampaigns) {
  return <div>جاري تحميل الحملات...</div>;
}

if (campaignsErr) {
  return <div>حدث خطأ أثناء تحميل الحملات</div>;
}
  return (

    <div className="campaigns">
      <BreadCrumb dynamicItems={[{ label: 'الحملات', path: '/campaigns' }]} />
      {/* <section className="hero">
        <h1>حملاتنا</h1>
        <p className='desc'>
          في هذه الصفحة تجد حملاتنا الإنسانية التي تهدف إلى إحداث فرق حقيقي في حياة المحتاجين.<br/>
        </p>
      </section> */}
      <CustomContainer>
      <section className="header">
        <SearchAndFilterBar onFilterClick={() => setShowFilter(prev => !prev)}
          searchKey={searchKey}
          setSearchKey={setSearchKey} />
      </section>
      <section className="container-campaign">
        <div className={`cards-wrapper ${showFilter ? "with-filter" : ""}`}>
          {campaigns.map(campaign => (
            <CampaignCard
              id={campaign.campaing.uuid}
              key={campaign.campaing.uuid}
              image={config.baseUrl+campaign.campaing.image}
              title={campaign.campaing.name}
              target={campaign.campaing.target_amount}
              collected={campaign.campaing.collected_amount}
              progress={campaign.progresspercentage}
              completedProjects={campaign.completedProjects}
              relatedProjects={campaign.projects_count}
              status={campaign.campaing.status}
            />
          ))}
        </div>
        {showFilter && (
          <div className="filter-wrapper">
            <CampaignFilter
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        )}
      </section>

      <div className="pagination-container">
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
          nextPage={nextPage}
          isBtnDisabled={currentPage === totalPages - 1}
        />
      </div>
      </CustomContainer>
    </div>
  )
}
export default Campaigns;
