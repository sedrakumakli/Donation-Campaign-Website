const newsBase = 'blogsApi';
const campaignsBase = 'campaignApi';
const userBase = 'user';
const config = {
  baseUrl: 'http://127.0.0.1:8000',
  login: 'login',
  logout: 'logout',
  news: {
    all: `${newsBase}/all`,
    latest: `${newsBase}/getLatest`,
    filter: `${newsBase}/filter`,
    details: 'blogApi/show',
    categories: `${newsBase}/categories`,
  },
  campaigns: {
    all: `${campaignsBase}/all`,
    active: `getActiveCampaign`,
    filter: `${campaignsBase}/filter`,
    details: 'blogApi/show',
    categories: `${campaignsBase}/categories`,
    show: `${campaignsBase}/show`,
    search: `${campaignsBase}/search`,
    governorates: `${campaignsBase}/governorates`,
    cities: `${campaignsBase}/cities`,
    districts: `${campaignsBase}/districts`,
    status: `${campaignsBase}/status`,
  },
  projects: {
    all: 'projects',
  },
  donate: {
    QRData: 'donation/qr',
    direct: 'donate/directly',
    pledge: 'pledge',
    completePledge: 'donate/pledge',
    pledgeData: 'getPledge',
    dateErrComplete: 'update/file',
  },
  profile: {
    user: 'user',
    donations: `${userBase}/donations`,
    inkinds: `${userBase}/inkinds`,
    statistics: `${userBase}/statistics`,
  },
};
export default config;
