import axios from "axios";
import config from "../constants/enviroment";

const api = axios.create({
  baseURL: config.baseUrl + "/api",
});

// Request interceptor
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,

  (error) => {
    // Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem("token");

      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }

      return Promise.reject(
        new Error("انتهت صلاحية الجلسة، يرجى تسجيل الدخول مجدداً"),
      );
    }

    if (error.response) {
      const status = error.response.status;
      const responseData = error.response.data;

      if (status >= 400 && status < 500) {
        const rawError = responseData?.error;

        const isFieldErrors =
          rawError && typeof rawError === "object" && !Array.isArray(rawError);

        const message = isFieldErrors
          ? "البيانات المدخلة غير صحيحة"
          : rawError || responseData?.message || "البيانات المدخلة غير صحيحة";

        const err = new Error(message);
        err.statusCode = status;
        err.fieldErrors = isFieldErrors ? rawError : null;

        return Promise.reject(err);
      }

      if (status >= 500) {
        return Promise.reject(
          new Error("حدث خطأ في الخادم. يرجى المحاولة لاحقاً"),
        );
      }
    }

    if (error.request) {
      return Promise.reject(
        new Error("تعذر الاتصال بالخادم. تحقق من الإنترنت"),
      );
    }

    return Promise.reject(new Error("حدث خطأ غير متوقع"));
  },
);

export default api;
