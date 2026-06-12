import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CampaignCard from "../../../components/CampaignCard/CampaignCard";
import "./CampaignSlider.css";
//const campaigns =[{}]
const CampaignSlider = () => {
    return (
        <div className="campaignslider">
            <div className="container">
                <div className="main-title">
                    <h2>حملاتنا</h2>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    {campaigns.map((card) => (
                        <SwiperSlide key={card.id}>
                            <CampaignCard
                                image={card.image}
                                status={card.status}
                                title={card.title}
                                total={card.total}
                                gool={card.gool}
                                rate={card.rate}
                                projectnum={card.projectnum} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </div>
    )
}
export default CampaignSlider;