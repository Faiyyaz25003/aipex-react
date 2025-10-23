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
      heroTitle: "We offer innovative logistics solutions",
      heroSubtitle: "that deliver your couriers on time.",

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

      // === Aipex Benefit Section ===
      isoCertified: "An ISO 9001:2005 certified company",
      aipexBenefitTitle: "The Aipex Benefit",
      aipexBenefitDesc:
        "Our expertise and many years of experience have enabled us to provide a wholesome supply chain solution. Our operations network leveraged with our employee workforce has enabled us to reach destinations across India and International markets. Main features that characterise us -",

      benefit1: "Service to over 200+ Destinations Worldwide",
      benefit1Desc: "",
      benefit2: "Service to over 27,000+ pin codes in India",
      benefit2Desc: "",
      benefit3: "A service network of ५+ offices and ५0+ staff",
      benefit3Desc: "",
      benefit4: "Automated tools and dashboard to track",
      benefit4Desc: "",
      benefit5: "Safe and Secure shipments delivery",
      benefit5Desc: "",
      benefit6: "On time and efficient delivery schedules",
      benefit6Desc: "",
      benefit7: "Get real time tracking and delivery status",
      benefit7Desc: "",
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
      heroTitle: "आम्ही नाविन्यपूर्ण लॉजिस्टिक सोल्यूशन्स ऑफर करतो",
      heroSubtitle: "जे तुमचे कुरिअर्स वेळेत पोहचवतात.",

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

      // === Aipex Benefit Section ===
      isoCertified: "ISO 9001:2005 प्रमाणित कंपनी",
      aipexBenefitTitle: "Aipex चे फायदे",
      aipexBenefitDesc:
        "आमचा अनुभव आणि अनेक वर्षांचा व्यावसायिक अनुभव आम्हाला संपूर्ण पुरवठा साखळी समाधान देण्यास सक्षम करतो. आमचे नेटवर्क आणि कर्मचारी शक्तीने आम्हाला भारत आणि आंतरराष्ट्रीय बाजारपेठांमध्ये पोहोचण्यास सक्षम केले आहे. आमच्या वैशिष्ट्यांमध्ये समाविष्ट आहे -",

      benefit1: "जगभरातील 200+ ठिकाणी सेवा",
      benefit2: "भारतातील 27,000+ पिन कोडसाठी सेवा",
      benefit3: "5+ कार्यालये आणि 50+ कर्मचाऱ्यांचे नेटवर्क",
      benefit4: "स्वयंचलित साधने आणि डॅशबोर्ड",
      benefit5: "सुरक्षित आणि विश्वासार्ह शिपमेंट वितरण",
      benefit6: "वेळेत आणि कार्यक्षम वितरण वेळापत्रक",
      benefit7: "रिअल टाइम ट्रॅकिंग आणि वितरण स्थिती मिळवा",
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
      heroTitle: "نقدم حلول لوجستية مبتكرة",
      heroSubtitle: "لتوصيل طرودك في الوقت المحدد.",

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

      // === Aipex Benefit Section ===
      isoCertified: "شركة معتمدة ISO 9001:2005",
      aipexBenefitTitle: "مميزات Aipex",
      aipexBenefitDesc:
        "لقد مكنتنا خبرتنا الطويلة من تقديم حل متكامل لسلسلة التوريد. شبكتنا التشغيلية وفريقنا المؤهل مكنونا من الوصول إلى وجهات في جميع أنحاء الهند والأسواق الدولية. أهم المميزات التي تميزنا -",

      benefit1: "خدمة لأكثر من 200 وجهة حول العالم",
      benefit2: "خدمة لأكثر من 27,000 رمز بريدي في الهند",
      benefit3: "شبكة تضم أكثر من 5 مكاتب و50 موظف",
      benefit4: "أدوات ولوحة تحكم آلية للتتبع",
      benefit5: "توصيل آمن ومضمون للشحنات",
      benefit6: "جداول تسليم دقيقة وفعالة",
      benefit7: "تتبع فوري لحالة التسليم",
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
