const newsBase = 'blogsApi';
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
  donate: { QRData: 'donation/qr', direct: 'donate/directly' },
};
export default config;
