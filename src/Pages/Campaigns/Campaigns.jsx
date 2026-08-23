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
import { campaignSearch, filterCampaigns, getCampaigns } from "../../services/campaigns"
import config from "../../constants/enviroment";

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
// get all campaigns...
  const {
    data: campaignsData,
    isFetching: isFetchingCampaigns,
    error: campaignsErr,
  } = useGetData({
    queryKey: ['campaigns'],
    queryFn: getCampaigns,
  });

  const campaigns = campaignsData?.data || [];

// search by name....
  const {
    data: searchData,
    isFetching: isFetchingSearch,
    error: searchErr,
  } = useGetData({
    queryKey: ["campaign-search", searchKey],
    queryFn: () => campaignSearch(searchKey),
    enabled: searchKey.trim().length > 0,
  });
  const searchedCampaigns = searchData?.data || [];
  
  //filter...
  const {
    data: filterData,
    isFetching: isFetchingfilter,
    error: filterErr,
  } = useGetData({
    queryKey: ["campaign-filter", filters],
    queryFn: () => filterCampaigns({
      governorate_uuid : filters.governorate || null,
      city_uuid: filters.city || null,
      district_uuid: filters.district || null,
      project_uuid: filters.project || null,
     status: filters.status,
    }),
    enabled:    
    !!filters.governorate ||
    !!filters.city ||
    !!filters.region ||
    !!filters.project ||
    filters.status.length > 0,
  });
  const filteredCampaigns = filterData?.data || [];


  const hasActiveFilters =
  !!filters.governorate ||
  !!filters.city ||
  !!filters.region ||
  !!filters.project ||
  filters.status.length > 0;

let displayedCampaigns = campaigns;

if (searchKey.trim()) {
  displayedCampaigns = searchedCampaigns;
} else if (hasActiveFilters) {
  displayedCampaigns = filteredCampaigns;
}

//pagenation....
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(
    displayedCampaigns.length / cardsPerPage
  );

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentCampaigns = displayedCampaigns.slice(
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

  if (isFetchingCampaigns && searchKey.trim() === "") {
    return <div>جاري تحميل الحملات...</div>;
  }

  if (campaignsErr && searchKey.trim() === "") {
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
        <section className={`container-campaign ${showFilter ? "filter-open" : ""}`}>

  <div className={`cards-wrapper ${showFilter ? "with-filter" : ""}`}>

    {isFetchingSearch ? (
      <div className="filter-message">
        جاري البحث ...
      </div>

    ) : searchErr ? (
      <div className="filter-message error">
        حدث خطأ أثناء تطبيق البحث
      </div>

    ) : isFetchingfilter ? (
      <div className="filter-message">
        جاري تطبيق الفلتر ...
      </div>

    ) : filterErr ? (
      <div className="filter-message error">
        حدث خطأ أثناء تطبيق الفلتر
      </div>

    ) : currentCampaigns.length === 0 ? (
      <div className="filter-message">
        لم يتم العثور على نتائج مطابقة
      </div>

    ) : (
      currentCampaigns.map((campaign) => {
        const data = campaign?.campaing || campaign;

        return (
          <CampaignCard
            id={data?.uuid}
            key={data?.uuid}
            image={config.baseUrl + data?.image}
            title={data?.name}
            target={data?.target_amount}
            collected={data?.collected_amount}
            progress={campaign?.progresspercentage}
            completedProjects={campaign?.completedProjects}
            relatedProjects={campaign?.projects_count}
            status={data?.status}
          />
        );
      })
    )}

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
