const newsBase = 'blogsApi';
const campaignsBase = 'campaignApi';
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
    filter: `${campaignsBase}/filter`,
    details: 'blogApi/show',
    categories: `${campaignsBase}/categories`,
  },
  donate: { QRData: 'donation/qr', direct: 'donate/directly' },
};
export default config;
