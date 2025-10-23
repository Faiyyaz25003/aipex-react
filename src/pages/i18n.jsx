import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      companyName: "Your Courier Co.",
      courierServices: "COURIER SERVICES",
      customsClearing: "CUSTOMS CLEARING",
      warehousing: "WAREHOUSING & FULFILLMENT",
      getInTouch: "GET IN TOUCH",
      trackShipment: "TRACK SHIPMENT",
      login: "LOGIN",

      // Dropdowns
      domesticCourier: "Domestic Courier",
      internationalCourier: "International Courier",
      ecommerceCourier: "E-commerce Courier",
      liquidCourier: "Liquid Courier",
      medicineCourier: "Medicine Courier",
      universityCourier: "University Document Courier",
      dangerousGoodsCourier: "Dangerous Goods Courier",
      transportService: "Transport Service",

      singleShipment: "Single Shipment",
      multipleShipment: "Multiple Shipment",
    },
  },

  mr: {
    translation: {
      companyName: "तुमची कुरिअर कंपनी",
      courierServices: "कुरिअर सेवा",
      customsClearing: "सीमा शुल्क मंजुरी",
      warehousing: "गोदाम व पूर्तता",
      getInTouch: "संपर्क साधा",
      trackShipment: "माल पाठवणी ट्रॅक करा",
      login: "लॉगिन",

      // Dropdowns
      domesticCourier: "देशांतर्गत कुरिअर",
      internationalCourier: "आंतरराष्ट्रीय कुरिअर",
      ecommerceCourier: "ई-कॉमर्स कुरिअर",
      liquidCourier: "द्रव कुरिअर",
      medicineCourier: "औषध कुरिअर",
      universityCourier: "विद्यापीठ कागदपत्र कुरिअर",
      dangerousGoodsCourier: "धोकादायक माल कुरिअर",
      transportService: "वाहतूक सेवा",

      singleShipment: "एकच माल पाठवणी",
      multipleShipment: "एकाधिक माल पाठवणी",
    },
  },

  ar: {
    translation: {
      companyName: "شركة التوصيل الخاصة بك",
      courierServices: "خدمات التوصيل",
      customsClearing: "تخليص جمركي",
      warehousing: "التخزين والتنفيذ",
      getInTouch: "تواصل معنا",
      trackShipment: "تتبع الشحنة",
      login: "تسجيل الدخول",

      // Dropdowns
      domesticCourier: "توصيل محلي",
      internationalCourier: "توصيل دولي",
      ecommerceCourier: "توصيل التجارة الإلكترونية",
      liquidCourier: "توصيل السوائل",
      medicineCourier: "توصيل الأدوية",
      universityCourier: "توصيل مستندات الجامعة",
      dangerousGoodsCourier: "توصيل المواد الخطرة",
      transportService: "خدمة النقل",

      singleShipment: "شحنة واحدة",
      multipleShipment: "شحنات متعددة",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
