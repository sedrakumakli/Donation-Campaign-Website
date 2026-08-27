import { useState } from 'react';
import './DonerProfilePage.css';
import BreadCrumb from '../../components/BreadCrumb';
import FinancialTable from '../../components/DonerProfile/FinancialTable';
import ProfileHeader from '../../components/DonerProfile/ProfileHeader';
import PasswordCard from '../../components/DonerProfile/PasswordCard';
import InKindTable from '../../components/DonerProfile/InKindTable';
import { financialDonationsData, inKindDonationsData } from '../../mockupData';
import ProfileTabs from '../../components/DonerProfile/ProfileTabs';
import LogOut from '../../components/DonerProfile/LogOut';
import { toast } from 'react-toastify';
import LogOutConfrimModal from '../../components/DonerProfile/LogOutConfrimModal';
import { useNavigate } from 'react-router-dom';
import { getDonations, getInkinds, getProfile } from '../../services/profile';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import DonorProfileSkeleton from '../../Skeleton/DonorProfileSkeleton';

/* -------------------------------------------------------------------------
   Hope Forward — صفحة الملف الشخصي للمتبرع
   لوحة الألوان موروثة من صفحة تفاصيل الحملة (تركواز #004A5B)
   ------------------------------------------------------------------------- */

const DonorProfilePage = () => {
  const [activeTab, setActiveTab] = useState('financial');
  const [financialDonations, setFinancialDonations] = useState(
    financialDonationsData,
  );
  const [inKindDonations, setInKindDonations] = useState(inKindDonationsData);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    toast.success('تم تسجيل الخروج بنجاح');
    navigate('/login');
  };

  const {
    data: profileData,
    isFetching: isFetchingProfile,
    error: profileErr,
  } = useGetData({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const profiles = profileData?.data || null;

  const {
    data: donationsData,
    isFetching: isFetchingDonations,
    error: donationsErr,
  } = useGetData({
    queryKey: ['donations'],
    queryFn: getDonations,
  });

  const donations = donationsData?.data || [];

  const {
    data: inkindsData,
    isFetching: isFetchingInkinds,
    error: inkindsErr,
  } = useGetData({
    queryKey: ['inkinds'],
    queryFn: getInkinds,
  });

  const inkinds = inkindsData?.data || [];

  if (isFetchingProfile || isFetchingDonations || isFetchingInkinds) {
    return (
      <>
        <BreadCrumb
          dynamicItems={[
            {
              label: 'الملف الشخصي',
              path: '/profile',
            },
          ]}
        />
        <DonorProfileSkeleton />
      </>
    );
  }

  if (profileErr || donationsErr || inkindsErr) {
    return <div>حدث خطأ أثناء تحميل الملف الشخصي</div>;
  }

  if (!profiles || !donations || !inkinds) {
    return <div>لا توجد بيانات للملف الشخصي</div>;
  }
  return (
    <div className='profile'>
      <BreadCrumb
        dynamicItems={[
          {
            label: 'الملف الشخصي',
            path: '/profile',
          },
        ]}
      />

      <div className='wrap'>
        <LogOut onClick={() => setShowLogoutModal(true)} />
        <LogOutConfrimModal
          open={showLogoutModal}
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleConfirmLogout}
        />

        <ProfileHeader donor={profiles} />

        <PasswordCard />

        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          financialCount={donations.length}
          inKindCount={inkinds.length}
        />

        {activeTab === 'financial' ? (
          <FinancialTable rows={donations} />
        ) : (
          <InKindTable rows={inkinds} />
        )}
      </div>
    </div>
  );
};
export default DonorProfilePage;
