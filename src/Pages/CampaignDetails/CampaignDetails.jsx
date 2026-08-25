import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  MapPin,
  Calendar,
  Clock,
  Share2,
  HeartHandshake,
  Info,
  FileText,
  Target,
  Home,
  Users,
  Droplet,
  Lightbulb,
  Folders,
  Link as LinkIcon,
} from 'lucide-react';
import './CampaignDetails.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BreadCrumb from '../../components/BreadCrumb';
import { Button } from '@mui/material';
import DonateButton from '../../components/DonateButton/DonateButton';
import { useNavigate, useParams } from 'react-router-dom';
import { getCampaignDetails } from '../../services/campaigns';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import config from '../../constants/enviroment';
import { formatArabicDate, formatArabicTime } from '../../utils/methods';
import { toast } from 'react-toastify';

// const GOALS = [
//   { icon: Home, text: 'إعادة تأهيل 120 منزلًا متضررًا بشكل كامل أو جزئي' },
//   { icon: Users, text: 'توفير مأوى دائم لأكثر من 600 فرد من العائلات النازحة' },
//   {
//     icon: Droplet,
//     text: 'إعادة تأهيل شبكات المياه والصرف الصحي في المنطقة المستهدفة',
//   },
//   { icon: Lightbulb, text: 'تركيب أنظمة طاقة شمسية للوحدات السكنية الجديدة' },
// ];

// export const PROJECTS = [
//   {
//     id: 1,
//     title: 'ترميم المنازل المتضررة',
//     desc: 'إعادة تأهيل الوحدات السكنية المتضررة جزئيًا وتجهيزها للسكن الآمن.',
//     location: 'حمص , خالدية',
//     sector: 'التعليم',
//     image:
//       'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
//     status: 'active', // active | done
//     raised: 68000,
//     target: 100000,
//     allocated: 100000,
//   },
//   {
//     id: 2,
//     title: 'تأهيل شبكات المياه',
//     desc: 'إعادة مد وتأهيل شبكات المياه والصرف الصحي للقرى المستهدفة.',
//     location: 'ريف دمشق , دوما',
//     sector: 'بنية تحتية',
//     image:
//       'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop',
//     status: 'active',
//     raised: 21000,
//     target: 50000,
//     allocated: 25000,
//   },
//   {
//     id: 3,
//     title: 'تركيب أنظمة الطاقة الشمسية',
//     desc: 'تجهيز 40 وحدة سكنية بأنظمة طاقة شمسية مستقلة عن الشبكة.',
//     location: 'حمص , جورة الشياح',
//     sector: 'طاقة',
//     image:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
//     status: 'done',
//     raised: 30000,
//     target: 30000,
//     allocated: 30000,
//   },
// ];



/* ---------- Hook: عداد متحرك للأرقام ---------- */
function useCountUp(target, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;

    frame.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(frame.current);
      }
      setValue(Math.floor(current));
    }, stepTime);

    return () => clearInterval(frame.current);
  }, [target, duration, start]);

  return value;
}

function CampaignDetails() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const params = useParams();
  const id = params.id;

const {
    data: CampaignDetailsData,
    isFetching: isFetchingCampaignDetails,
    error:campaignDetailsErr,
  } = useGetData({
    queryKey: ['campaigns',id],
    queryFn: ()=>getCampaignDetails(id),
  });
   const campaignsDetails = CampaignDetailsData?.data?.campaing || {};
   const projects = campaignsDetails?.projects || [];
   const gools = campaignsDetails?.purposes?.trim().split(/,|،/)


  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleCopyLink = async () =>{
    try{
      await navigator.clipboard.writeText(window.location.href);
      toast.success("تم نسخ الرابط بنجاح");
    }
    catch(error){
      toast.error("تعذر نسخ الرابط");
    }
  };

  const handleShare = async () =>{
    const url = window.location.href;
    if(navigator.share){
      try{
        await navigator.share({
          title:campaignsDetails.name,
          text:"شاهد هذه الحملة وساهم معنا",
          url: url,
        });
      }
      catch(error){

      }
    }
            else {
          await navigator.clipboard.writeText(url);
          toast.success("تم نسخ الرابط بنجاح");
        }
  };
  return (
    <div className='hf-page' dir='rtl'>
      <BreadCrumb
        dynamicItems={[
          { label: 'الحملات', path: '/campaigns' },
          { label: campaignsDetails.name, path: `/campaign/${campaignsDetails.uuid}` },
        ]}
      />
      <div className='wrap'>

        {/* Hero */}
        <div className='hero'>
          <img src={config.baseUrl+campaignsDetails.image} alt={campaignsDetails.name} />
          <div className='hero-content'>
            <div>
              <span className='status-pill active'>
               {campaignsDetails.status}
              </span>
              <h1 className='hero-title'>{campaignsDetails.name}</h1>
              <div className='hero-meta'>
                {/* <span>
                  <MapPin size={16} /> {campaign.location}
                </span> */}
                <span>
                  <Calendar size={16}/> {formatArabicDate(campaignsDetails.start_date)} —{' '}
                  {formatArabicDate(campaignsDetails.end_date)}
                </span>
                <span>
                  <Clock size={16} /> {formatArabicTime(campaignsDetails.start_time)} — {formatArabicTime(campaignsDetails.end_time)}{' '}
                  يوميًا
                </span>
              </div>
            </div>
            <div className='hero-actions'>
              <button className='btn btn-ghost' onClick={handleShare}>
                <Share2 size={16} /> مشاركة
              </button>
              {/* <button className="btn btn-gold">
                <HeartHandshake size={16} /> تبرع الآن
              </button> */}
              <DonateButton
                options={[
                  {
                    label: 'تبرع مباشر',
                    onClick: () =>
                      navigate(
                        `/donate?id=f7069989-0b5e-453f-8abf-6560da32534a`,
                      ),
                  },
                  {
                    label: 'تعهد',
                    onClick: () => navigate(`/campaign/${id}/pledge`),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div className='layout'>
          {/* LEFT column */}
          <div>
            {/* Quick info */}
            <div className='panel'>
              <h2 className='panel-title'>
                <Info size={19} color='var(--gold)'/> معلومات الحملة
              </h2>
              <div className='info-grid'>
                <div className='info-item'>
                  <div className='label'>
                    <Calendar size={14} /> تاريخ البدء
                  </div>
                  <div className='value'>{formatArabicDate(campaignsDetails.start_date)}</div>
                  <div className='value sub'>الساعة {formatArabicTime(campaignsDetails.start_time)}</div>
                </div>
                <div className='info-item'>
                  <div className='label'>
                    <Calendar size={14} /> تاريخ الانتهاء
                  </div>
                  <div className='value'>{formatArabicDate(campaignsDetails.end_date)}</div>
                  <div className='value sub'>الساعة {formatArabicTime(campaignsDetails.end_time)}</div>
                </div>
                {/* <div className='info-item'>
                  <div className='label'>
                    <MapPin size={14} /> الموقع
                  </div>
                  <div className='value'>ريف حلب الشمالي</div>
                  <div className='value sub'>سوريا</div>
                </div> */}
                <div className='info-item'>
                  <div className='label'>
                    <Folders size={14} /> المشاريع المرتبطة
                  </div>
                  <div className='value'>{CampaignDetailsData?.data?.projects_count} مشاريع</div>
                  {/* <div className='value sub'>قيد التنفيذ</div> */}
                </div>
              </div>
            </div>

            {/* About */}
            {/* <div className="panel">
              <h2 className="panel-title">
                <FileText size={19} /> عن الحملة
              </h2>
              <p className="about-text">{campaign.about}</p>
            </div> */}

            {/* Goals */}
            <div className='panel'>
              <h2 className='panel-title'>
                <Target size={19} color='var(--gold)'/> أهداف الحملة
              </h2>
              <div className='goals-list'>
                {gools&&gools.map((goal, i) => {
                  const Icon = goal.icon;
                  return (
                    <div className='goal-item' key={i}>

                      <div className='goal-text'>{goal}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Linked projects */}
            <div className='projects-section'>
              <div className='section-head'>
                <h2>
                  <Folders size={19} color='var(--gold)'/> المشاريع المرتبطة
                </h2>
                <span className='count'>{CampaignDetailsData?.data?.projects_count} مشاريع</span>
              </div>

              <div className='projects-grid'>
                {projects&&projects.map((project) => (
                  <ProjectCard key={project.uuid} project={project} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT column — sticky progress sidebar */}
          <div>
            <div className='progress-card'>
              <div className='amount-row'>
                <div className='amount-raised'>
                  {campaignsDetails.collected_amount}<small>تم جمعه</small>
                </div>
                <div className='amount-target'>
                  من أصل <b>{campaignsDetails.target_amount}</b>{' '}
                  مستهدف
                </div>
              </div>

              <div className='progress-track'>
                <div
                  className='progress-fill'
                  style={{ width: animate ? `${parseInt(CampaignDetailsData?.data?.progresspercentage)}%`: '0%' }}
                />
              </div>
              <div className='progress-percent-row'>
                <span>نسبة الإنجاز</span>
                <span className='pct'>{CampaignDetailsData?.data?.progresspercentage}</span>
              </div>

              <div className='stat-mini-row'>
                <div className='stat-mini'>
                  <div className='num'>
                    {CampaignDetailsData?.data?.donations_count}
                  </div>
                  <div className='lbl'>التبرعات</div>
                </div>
                {/* <div className="stat-mini">
                  <div className="num">{campaign.daysLeft}</div>
                  <div className="lbl">يوم متبقي</div>
                </div> */}
              </div>

              <DonateButton
                options={[
                  {
                    label: 'تبرع مباشر',
                    onClick: () =>
                      navigate(`/donate/f7069989-0b5e-453f-8abf-6560da32534a`),
                  },
                  {
                    label: 'تعهد',
                    onClick: () => navigate(`/campaign/${id}/pledge`),
                  },
                ]}
                sx={{
                  height: '60px',
                  width: '100%',
                  fontSize: '20px',
                }}
              />

              <div className='share-row'>
                {/* <button className="share-btn">
                  <Share2 size={14} /> واتساب
                </button> */}
                <button className='share-btn' onClick={handleCopyLink}>
                  <LinkIcon size={14} /> نسخ الرابط
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CampaignDetails;
