import {
    Camera,
    Mail,
    Phone,
    User,
    HandHeart,
    Gift,
    Building2,
    UserRound,
    Briefcase
} from "lucide-react";
import { useRef, useState } from "react";
import StatCounter from "./StatCounter";
import { donorData } from "../../mockupData";
import { DONOR_TYPES } from "./constants";
import { getStatistics, postChangeProfile } from "../../services/profile";
import { useGetData } from "../../customHooks/reactQuery/useGetData";
import config from "../../constants/enviroment";
const donorTypeIcons = {
    "فردي": User,
    "رجال أعمال": Briefcase,
    "منظمات داعمة": Building2,
};
const ProfileHeader = ({ donor }) => {
    const DonorIcon = donorTypeIcons[donor.type] || User;
    const [avatar, setAvatar] = useState(donor?.profile || null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageChange = async (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("profile", file);

        try {
            setIsUploading(true);

            const response = await postChangeProfile(formData);

            console.log("تم تغيير الصورة:", response);

            const newProfile = response?.data?.profile;

            if (newProfile) {
                setAvatar(newProfile);
            }

        } catch (error) {
            console.error("خطأ أثناء تغيير الصورة:", error);
        } finally {
            setIsUploading(false);
        }
    };
    const {
        data: statisticsData,
        isFetching: isFetchingStatistics,
        error: statisticsErr,
    } = useGetData({
        queryKey: ['statistics'],
        queryFn: getStatistics,
    });

    const statistics = statisticsData?.data || null;

    if (isFetchingStatistics) {
        return <div>جاري تحميل  ...</div>;
    }

    if (statisticsErr) {
        return <div>حدث خطأ أثناء تحميل  </div>;
    }

    if (!statistics) {
        return <div>لا توجد بيانات  </div>;
    }
    return (
        <>
            <div className="hf-header-card">
                <div className="hf-avatar">
                    <div className="hf-avatar__circle">
                        <img
                            src={
                                avatar ? `${config.baseUrl}${avatar}`
                                    : "/default-profile.png"
                            }
                            alt={donor.name || "profile"}
                        />
                    </div>
                    <button
                        type="button"
                        className="hf-avatar__edit"
                        onClick={() => fileInputRef.current?.click()}
                        aria-label="تعديل الصورة الشخصية"
                    >
                        <Camera size={15} strokeWidth={2} />
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                    />
                </div>

                <div className="hf-identity">
                    <span className="hf-identity__name">{donor.name}</span>
                    <div className="hf-identity__meta">
                        <span className="hf-identity__row">
                            <Phone size={14} strokeWidth={2} />
                            {donor.phone}
                        </span>
                        <span className="hf-identity__row">
                            <Mail size={14} strokeWidth={2} />
                            {donor.email}
                        </span>
                    </div>
                    <span className="hf-type-badge">
                        <DonorIcon size={14} strokeWidth={2} />
                        {donor.type}
                    </span>
                </div>

                <div className="hf-header-stats">
                    <StatCounter
                        icon={HandHeart}
                        value={statistics.campaigns_count}
                        label="إجمالي الحملات المتبرع لها"
                    />
                    <StatCounter
                        icon={Gift}
                        value={statistics.inkind_donations_count}
                        label="إجمالي التبرعات العينية"
                    />
                </div>
            </div>
        </>
    )
}
export default ProfileHeader;
