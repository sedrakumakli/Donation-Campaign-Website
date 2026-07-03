import { postData } from "./crudService";

/**
 * تسجيل الدخول
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<{ success: boolean, data?: any, generalError?: string, fieldErrors?: object }>}
 */
export const loginUser = async (credentials) => {
  try {
    const res = await postData("login", credentials);
    // res = { data: { user, token }, status: true, error: null, statusCode: 200 }
    return { success: true, data: res.data };
  } catch (err) {
    return handleAuthError(err);
  }
};

/**
 * إنشاء حساب جديد
 * @param {object} userData
 * @returns {Promise<{ success: boolean, data?: any, generalError?: string, fieldErrors?: object }>}
 */
export const registerUser = async (userData) => {
  try {
    const res = await postData("register", userData);
    return { success: true, data: res.data };
  } catch (err) {
    return handleAuthError(err);
  }
};

/**
 * معالجة موحّدة لأخطاء تسجيل الدخول/إنشاء الحساب.
 * بتعتمد على الشكل يلي بيرجعه axios.js بعد الـ interceptor:
 *   err.message      -> نص خطأ عام (دايماً موجود)
 *   err.fieldErrors  -> object فيه خطأ لكل حقل (موجود بس لو الباك رجع أخطاء تفصيلية)، وإلا null
 */
const handleAuthError = (err) => {
  // في أخطاء لكل حقل (نمط Laravel validation: { field: ["msg1", "msg2"] } أو { field: "msg" })
  if (err.fieldErrors) {
    const fieldErrors = {};
    Object.keys(err.fieldErrors).forEach((key) => {
      const value = err.fieldErrors[key];
      fieldErrors[key] = Array.isArray(value) ? value[0] : value;
    });

    return { success: false, generalError: null, fieldErrors };
  }

  // خطأ عام واحد (نص من الباك، أو خطأ شبكة/سيرفر من الـ interceptor)
  return {
    success: false,
    generalError: err.message || "حدث خطأ غير متوقع، حاول مرة أخرى",
    fieldErrors: {},
  };
};
