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
      servicesHeader: "Services We offer", // <-- NEW

      // Dropdowns
      domesticCourier: "Domestic Courier",
      internationalCourier: "International Courier",
      ecommerceCourier: "E-commerce Courier",
      liquidCourier: "Liquid Courier",
      medicineCourier: "Medicine Courier",
      universityCourier: "University Document Courier",
      dangerousGoodsCourier: "Dangerous Goods Courier",
      transportService: "Transport Service",

      // Services Descriptions
      domesticCourierDesc:
        "Our domestic flexible model ensures you benefit from improved service levels, greater flexibility and time-definite deliveries.",
      internationalCourierDesc:
        "Our logistical expertise has enabled us to setup our own operations network for countries like – UK, Singapore, Hongkong, Sri Lanka, etc.",
      customsClearingDesc:
        "Our customs clearing license thus making it easier for you to clear your imports / exports.",
      warehousingDesc:
        "We combine our supply chain expertise with powerful technology to provide complete warehousing and fulfillment solutions.",

      // === Aipex Benefit Section ===
      isoCertified: "An ISO 9001:2005 certified company",
      aipexBenefitTitle: "The Aipex Benefit",
      aipexBenefitDesc:
        "Our expertise and many years of experience have enabled us to provide a wholesome supply chain solution. Our operations network leveraged with our employee workforce has enabled us to reach destinations across India and International markets. Main features that characterise us -",

      benefit1: "Service to over 200+ Destinations Worldwide",
      benefit2: "Service to over 27,000+ pin codes in India",
      benefit3: "A service network of 5+ offices and 50+ staff",
      benefit4: "Automated tools and dashboard to track",
      benefit5: "Safe and Secure shipments delivery",
      benefit6: "On time and efficient delivery schedules",
      benefit7: "Get real time tracking and delivery status",

      // === Operations & Network Section ===
      operationsNetwork: "Operations & Network",
      branchesPanIndia: "Branches Pan India",
      strongWorkforce: "Strong Workforce",
      shipmentsPerDay: "Shipments Per Day",
      happyCustomers: "Happy Customers",
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
      servicesHeader: "आमच्या सेवा", // <-- NEW

      // Dropdowns
      domesticCourier: "देशांतर्गत कुरिअर",
      internationalCourier: "आंतरराष्ट्रीय कुरिअर",
      ecommerceCourier: "ई-कॉमर्स कुरिअर",
      liquidCourier: "द्रव कुरिअर",
      medicineCourier: "औषध कुरिअर",
      universityCourier: "विद्यापीठ कागदपत्र कुरिअर",
      dangerousGoodsCourier: "धोकादायक माल कुरिअर",
      transportService: "वाहतूक सेवा",

      // Services Descriptions
      domesticCourierDesc:
        "आमच्या देशांतर्गत लवचिक मॉडेलमुळे तुम्हाला सुधारित सेवा पातळी, अधिक लवचिकता आणि वेळ निश्चित वितरणाचा फायदा मिळतो.",
      internationalCourierDesc:
        "आमच्या लॉजिस्टिकल तज्ज्ञतेमुळे आम्ही यूके, सिंगापूर, हॉंगकॉंग, श्रीलंका इत्यादी देशांसाठी आपले स्वतःचे ऑपरेशन्स नेटवर्क तयार केले आहे.",
      customsClearingDesc:
        "आमच्या कस्टम्स क्लिअरिंग परवान्यामुळे तुमचे आयात / निर्यात सुलभ होते.",
      warehousingDesc:
        "आम्ही आमच्या पुरवठा साखळीच्या तज्ज्ञतेसह प्रगत तंत्रज्ञान वापरून संपूर्ण वेअरहाऊसिंग आणि फुलफिलमेंट सोल्यूशन्स पुरवतो.",

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

      // === Operations & Network Section ===
      operationsNetwork: "ऑपरेशन्स आणि नेटवर्क",
      branchesPanIndia: "भारतभर शाखा",
      strongWorkforce: "मजबूत कर्मचारीवर्ग",
      shipmentsPerDay: "दररोज शिपमेंट्स",
      happyCustomers: "आनंदी ग्राहक",
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
      servicesHeader: "الخدمات التي نقدمها", // <-- NEW

      // Dropdowns
      domesticCourier: "توصيل محلي",
      internationalCourier: "توصيل دولي",
      ecommerceCourier: "توصيل التجارة الإلكترونية",
      liquidCourier: "توصيل السوائل",
      medicineCourier: "توصيل الأدوية",
      universityCourier: "توصيل مستندات الجامعة",
      dangerousGoodsCourier: "توصيل المواد الخطرة",
      transportService: "خدمة النقل",

      // Services Descriptions
      domesticCourierDesc:
        "نموذجنا المحلي المرن يضمن حصولك على مستويات خدمة محسنة ومرونة أكبر وتسليم في الوقت المحدد.",
      internationalCourierDesc:
        "لقد مكنت خبرتنا اللوجستية من إنشاء شبكة عمليات خاصة بنا لدول مثل المملكة المتحدة وسنغافورة وهونغ كونغ وسريلانكا.",
      customsClearingDesc:
        "تسهل تراخيص التخليص الجمركي لدينا عملية استيراد / تصدير البضائع الخاصة بك.",
      warehousingDesc:
        "نحن نجمع بين خبرتنا في سلسلة التوريد والتكنولوجيا المتقدمة لتوفير حلول كاملة للتخزين والتنفيذ.",

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

      // === Operations & Network Section ===
      operationsNetwork: "العمليات والشبكة",
      branchesPanIndia: "فروع في جميع أنحاء الهند",
      strongWorkforce: "قوة عاملة قوية",
      shipmentsPerDay: "شحنات يومية",
      happyCustomers: "عملاء سعداء",
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
