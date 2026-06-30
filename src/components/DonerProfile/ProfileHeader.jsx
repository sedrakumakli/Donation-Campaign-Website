import {
    Camera,
    Mail,
    Phone,
    User,
    HandHeart,
    Gift,
    Building2,
    UserRound
} from "lucide-react";
import { useRef, useState } from "react";
import StatCounter from "./StatCounter";
import { donorData } from "../../mockupData";
import { DONOR_TYPES } from "./constants";
const ProfileHeader = () => {
    const [avatar, setAvatar] = useState(donorData.avatar);
    const fileInputRef = useRef(null);

    const donorType = DONOR_TYPES[donorData.type];
    const DonorTypeIcon = donorType.icon;

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAvatar(url);
        }
    };
    return (
        <>
            <div className="hf-header-card">
                <div className="hf-avatar">
                    <div className="hf-avatar__circle">
                        {avatar ? (
                            <img src={avatar} alt={donorData.name} />
                        ) : (
                            <User size={40} strokeWidth={1.5} color="#fff" />
                        )}
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
                        onChange={handleAvatarChange}
                    />
                </div>

                <div className="hf-identity">
                    <span className="hf-identity__name">{donorData.name}</span>
                    <div className="hf-identity__meta">
                        <span className="hf-identity__row">
                            <Phone size={14} strokeWidth={2} />
                            {donorData.phone}
                        </span>
                        <span className="hf-identity__row">
                            <Mail size={14} strokeWidth={2} />
                            {donorData.email}
                        </span>
                    </div>
                    <span className="hf-type-badge">
                        <DonorTypeIcon size={14} strokeWidth={2} />
                        {donorType.label}
                    </span>
                </div>

                <div className="hf-header-stats">
                    <StatCounter
                        icon={HandHeart}
                        value={donorData.totalCampaigns}
                        label="إجمالي الحملات المتبرع لها"
                    />
                    <StatCounter
                        icon={Gift}
                        value={donorData.totalInKind}
                        label="إجمالي التبرعات العينية"
                    />
                </div>
            </div>
        </>
    )
}
export default ProfileHeader;
