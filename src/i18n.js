import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["path", "localStorage", "htmlTag"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
  document.documentElement.setAttribute("dir", i18n.dir(lng));
});
export default i18n;
