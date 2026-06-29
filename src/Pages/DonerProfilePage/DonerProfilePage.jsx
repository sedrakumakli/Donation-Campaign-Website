import React, { useState } from "react";
import {
    Camera,
    User,
    Phone,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Briefcase,
    Building2,
    HandHeart,
    Gift,
    CheckCircle2,
    XCircle,
    Clock,
    Package,
    MapPin,
    Image as ImageIcon,
} from "lucide-react";
import "./DonerProfilePage.css";
import BreadCrumb from "../../components/BreadCrumb";
import { Tabs } from "@mui/material";
import FinancialTable from "../../components/DonerProfile/FinancialTable";
import ProfileHeader from "../../components/DonerProfile/ProfileHeader";
import PasswordCard from "../../components/DonerProfile/PasswordCard";
import InKindTable from "../../components/DonerProfile/InKindTable";
import { donorData, financialDonationsData, inKindDonationsData } from "../../mockupData";
import ProfileTabs from "../../components/DonerProfile/ProfileTabs";
/* -------------------------------------------------------------------------
   Hope Forward — صفحة الملف الشخصي للمتبرع
   لوحة الألوان موروثة من صفحة تفاصيل الحملة (تركواز #004A5B)
   ------------------------------------------------------------------------- */

const DonorProfilePage = () => {
    const [activeTab, setActiveTab] = useState("financial");
    const [donor, setDonor] = useState(donorData);
    const [financialDonations, setFinancialDonations] = useState(financialDonationsData);
    const [inKindDonations, setInKindDonations] = useState(inKindDonationsData);

    return (
        <div className="profile" style={{paddingBottom:'64px'}}>
            <BreadCrumb
                dynamicItems={[
                    {
                        label: "الملف الشخصي",
                        path: "/profile",
                    },
                ]}
            />
            <div className="wrap">
                <ProfileHeader donor={donor} />

            <PasswordCard />

            <ProfileTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                financialCount={financialDonations.length}
                inKindCount={inKindDonations.length}
            />

            {activeTab === "financial" ? (
                <FinancialTable rows={financialDonations} />
            ) : (
                <InKindTable rows={inKindDonations} />
            )}
            </div>
            
        </div>
    );
};
export default DonorProfilePage;