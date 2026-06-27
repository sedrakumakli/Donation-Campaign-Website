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
import { useNavigate } from 'react-router-dom';

/**
 * Hope Forward — صفحة تفاصيل الحملة
 * RTL / خط Cairo / لوحة الأخضر الغامق
 */

const GOALS = [
  { icon: Home, text: 'إعادة تأهيل 120 منزلًا متضررًا بشكل كامل أو جزئي' },
  { icon: Users, text: 'توفير مأوى دائم لأكثر من 600 فرد من العائلات النازحة' },
  {
    icon: Droplet,
    text: 'إعادة تأهيل شبكات المياه والصرف الصحي في المنطقة المستهدفة',
  },
  { icon: Lightbulb, text: 'تركيب أنظمة طاقة شمسية للوحدات السكنية الجديدة' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'ترميم المنازل المتضررة',
    desc: 'إعادة تأهيل الوحدات السكنية المتضررة جزئيًا وتجهيزها للسكن الآمن.',
    location: 'حمص , خالدية',
    sector: 'التعليم',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    status: 'active', // active | done
    raised: 68000,
    target: 100000,
    allocated: 100000,
  },
  {
    id: 2,
    title: 'تأهيل شبكات المياه',
    desc: 'إعادة مد وتأهيل شبكات المياه والصرف الصحي للقرى المستهدفة.',
    location: 'ريف دمشق , دوما',
    sector: 'بنية تحتية',
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop',
    status: 'active',
    raised: 21000,
    target: 50000,
    allocated: 25000,
  },
  {
    id: 3,
    title: 'تركيب أنظمة الطاقة الشمسية',
    desc: 'تجهيز 40 وحدة سكنية بأنظمة طاقة شمسية مستقلة عن الشبكة.',
    location: 'حمص , جورة الشياح',
    sector: 'طاقة',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    status: 'done',
    raised: 30000,
    target: 30000,
    allocated: 30000,
  },
];

const campaign = {
  title: 'إعمار بيوت الشمال',
  location: 'ريف حلب الشمالي، سوريا',
  startDate: '01 مارس 2026',
  endDate: '30 سبتمبر 2026',
  startTime: '9:00 ص',
  endTime: '6:00 م',
  heroImage:
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop',
  about:
    'تهدف حملة "إعمار بيوت الشمال" إلى إعادة بناء وتأهيل المنازل المتضررة في القرى والبلدات بريف حلب الشمالي، لتوفير مأوى آمن وكريم للعائلات النازحة قبل دخول فصل الشتاء. تشمل الحملة إعادة تأهيل البنية التحتية الأساسية وتوفير وحدات سكنية جاهزة للعائلات الأكثر حاجة، بالتعاون مع فرق ميدانية محلية متخصصة.',
  target: 250000,
  raised: 168500,
  donors: 1284,
  daysLeft: 213,
};

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
  const pct = Math.round((campaign.raised / campaign.target) * 100);
  const raisedValue = useCountUp(campaign.raised, 1200, animate);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className='hf-page' dir='rtl'>
      <BreadCrumb
        dynamicItems={[
          { label: 'الحملات', path: '/campaigns' },
          { label: campaign.title, path: `/campaign/${campaign.id}` },
        ]}
      />
      <div className='wrap'>
        {/* Breadcrumb */}
        {/* <div className="breadcrumb">
          <a href="#">الرئيسية</a>
          <ChevronLeft size={14} />
          <a href="#">الحملات</a>
          <ChevronLeft size={14} />
          <span className="current">{CAMPAIGN.title}</span>
        </div> */}

        {/* Hero */}
        <div className='hero'>
          <img src={campaign.heroImage} alt={campaign.title} />
          <div className='hero-content'>
            <div>
              <span className='status-pill active'>
                {/* <span className="dot" />  */}
                نشطة
              </span>
              <h1 className='hero-title'>{campaign.title}</h1>
              <div className='hero-meta'>
                {/* <span>
                  <MapPin size={16} /> {campaign.location}
                </span> */}
                <span>
                  <Calendar size={16} /> {campaign.startDate} —{' '}
                  {campaign.endDate}
                </span>
                <span>
                  <Clock size={16} /> {campaign.startTime} — {campaign.endTime}{' '}
                  يوميًا
                </span>
              </div>
            </div>
            <div className='hero-actions'>
              <button className='btn btn-ghost'>
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
                      navigate(`/donate/f7069989-0b5e-453f-8abf-6560da32534a`),
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
                <Info size={19} /> معلومات الحملة
              </h2>
              <div className='info-grid'>
                <div className='info-item'>
                  <div className='label'>
                    <Calendar size={14} /> تاريخ البدء
                  </div>
                  <div className='value'>{campaign.startDate}</div>
                  <div className='value sub'>الساعة {campaign.startTime}</div>
                </div>
                <div className='info-item'>
                  <div className='label'>
                    <Calendar size={14} /> تاريخ الانتهاء
                  </div>
                  <div className='value'>{campaign.endDate}</div>
                  <div className='value sub'>الساعة {campaign.endTime}</div>
                </div>
                <div className='info-item'>
                  <div className='label'>
                    <MapPin size={14} /> الموقع
                  </div>
                  <div className='value'>ريف حلب الشمالي</div>
                  <div className='value sub'>سوريا</div>
                </div>
                <div className='info-item'>
                  <div className='label'>
                    <Folders size={14} /> المشاريع المرتبطة
                  </div>
                  <div className='value'>{PROJECTS.length} مشاريع</div>
                  <div className='value sub'>قيد التنفيذ</div>
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
                <Target size={19} /> أهداف الحملة
              </h2>
              <div className='goals-list'>
                {GOALS.map((goal, i) => {
                  const Icon = goal.icon;
                  return (
                    <div className='goal-item' key={i}>
                      {/* <div className="goal-icon">
                        <Icon size={17} />
                      </div> */}
                      <div className='goal-text'>{goal.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Linked projects */}
            <div className='projects-section'>
              <div className='section-head'>
                <h2>
                  <Folders size={19} /> المشاريع المرتبطة
                </h2>
                <span className='count'>{PROJECTS.length} مشاريع</span>
              </div>

              <div className='projects-grid'>
                {PROJECTS.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT column — sticky progress sidebar */}
          <div>
            <div className='progress-card'>
              <div className='amount-row'>
                <div className='amount-raised'>
                  {raisedValue.toLocaleString('en-US')}$ <small>تم جمعه</small>
                </div>
                <div className='amount-target'>
                  من أصل <b>{campaign.target.toLocaleString('en-US')}$</b>{' '}
                  مستهدف
                </div>
              </div>

              <div className='progress-track'>
                <div
                  className='progress-fill'
                  style={{ width: animate ? `${pct}%` : '0%' }}
                />
              </div>
              <div className='progress-percent-row'>
                <span>نسبة الإنجاز</span>
                <span className='pct'>{pct}%</span>
              </div>

              <div className='stat-mini-row'>
                <div className='stat-mini'>
                  <div className='num'>
                    {campaign.donors.toLocaleString('en-US')}
                  </div>
                  <div className='lbl'>متبرع</div>
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
                <button className='share-btn'>
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
