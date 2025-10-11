// "use client";
// import React, { useState, useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import "../styles/Login.css";

// export default function Auth() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const services = [
//     {
//       label: "International Shipping",
//       image: "/internaltional.webp"
//     },
//     {
//       label: "Liquid Courier Service",
//       image: "/liquid-sample-courier-service.jpg",
//     },
//     {
//       label: "Medicine Shipping",
//       image: "/medicine.jpg"
//     },
//     {
//       label: "Dangerous Goods Courier Service",
//       image: "/dangerous.webp"
//     },
//     {
//       label: "University Documents Delivery",
//       image: "/University.jpg"
//     },
//     {
//       label: "Corporate Gifting Shipping Service",
//       image: "/Corporate.webp"
//     },
//     {
//       label: "Warehousing & Fulfillment",
//       image: "/Warehousing.jpg"
//     },
//     {
//       label: "Events & Exhibition Logistics",
//       image: "/Exhibition.jpg"
//     },
//     {
//       label: "Custom Clearing Service",
//       image: "/custom.webp"
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % services.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="auth-container flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="auth-card flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 gap-6 max-w-7xl w-full h-[90vh] p-6">
//         {/* LEFT SLIDESHOW */}
//         <div className="auth-left relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden rounded-2xl">
//           <img
//             key={currentSlide}
//             src={services[currentSlide].image}
//             alt={services[currentSlide].label}
//             className="auth-slide w-full h-full object-cover"
//           />
//           <div className="auth-overlay absolute inset-0 bg-black/30"></div>
//           <div className="auth-caption absolute bottom-8 left-6 text-white text-xl font-semibold">
//             {services[currentSlide].label}
//           </div>
//           <div className="auth-dots absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//             {services.map((_, index) => (
//               <span
//                 key={index}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentSlide ? "bg-white" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="auth-right w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
//           <div className="auth-logo mb-6">
//             <img src="/aipex-logo.png" alt="Aipex Logo" className="h-[70px]" />
//           </div>

//           <div className="auth-form-wrapper w-full px-6">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               {/* EMAIL FIELD */}
//               <div className="auth-field relative">
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   className="auth-input peer placeholder-transparent w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-primary"
//                   placeholder="Email"
//                   required
//                 />
//                 <label htmlFor="email" className="auth-label">
//                   Email
//                 </label>
//               </div>

//               {/* PASSWORD FIELD */}
//               <div className="auth-field relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                   className="auth-input peer placeholder-transparent w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-primary"
//                   placeholder="Password"
//                   required
//                 />
//                 <label htmlFor="password" className="auth-label">
//                   Password
//                 </label>
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? "👁️" : "👁️‍🗨️"}
//                 </button>
//               </div>

//               {/* LOGIN BUTTON */}
//               <button
//                 type="submit"
//                 className="auth-button w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition"
//               >
//                 Log in
//               </button>

//               <p className="auth-text text-center text-gray-500 text-sm">
//                 Don’t have an account?{" "}
//                 <a href="#" className="auth-link text-primary font-semibold">
//                   Sign up
//                 </a>
//               </p>

//               <div className="auth-divider text-center text-gray-400 text-sm py-2">
//                 <span>Or continue with</span>
//               </div>

//               {/* SOCIAL BUTTONS */}
//               <div className="auth-socials flex gap-4 justify-center">
//                 <button
//                   type="button"
//                   className="auth-social flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
//                 >
//                   <FcGoogle className="w-6 h-6" /> Google
//                 </button>
//                 <button
//                   type="button"
//                   className="auth-social flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
//                 >
//                   <FaFacebook className="w-6 h-6 text-blue-600" /> Facebook
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/Components/Login.jsx
"use client";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link
import "../styles/Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const services = [
    { label: "International Shipping", image: "/internaltional.webp" },
    {
      label: "Liquid Courier Service",
      image: "/liquid-sample-courier-service.jpg",
    },
    { label: "Medicine Shipping", image: "/medicine.jpg" },
    { label: "Dangerous Goods Courier Service", image: "/dangerous.webp" },
    { label: "University Documents Delivery", image: "/University.jpg" },
    { label: "Corporate Gifting Shipping Service", image: "/Corporate.webp" },
    { label: "Warehousing & Fulfillment", image: "/Warehousing.jpg" },
    { label: "Events & Exhibition Logistics", image: "/Exhibition.jpg" },
    { label: "Custom Clearing Service", image: "/custom.webp" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % services.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="auth-container flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="auth-card flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 gap-6 max-w-7xl w-full h-[90vh] p-6">
        {/* LEFT SLIDE */}
        <div className="auth-left relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            key={currentSlide}
            src={services[currentSlide].image}
            alt={services[currentSlide].label}
            className="auth-slide w-full h-full object-cover"
          />
          <div className="auth-overlay absolute inset-0 bg-black/30"></div>
          <div className="auth-caption absolute bottom-8 left-6 text-white text-xl font-semibold">
            {services[currentSlide].label}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="auth-right w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
          <div className="auth-logo mb-6">
            <img src="/aipex-logo.png" alt="Aipex Logo" className="h-[70px]" />
          </div>

          <div className="auth-form-wrapper w-full px-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* EMAIL */}
              <div className="auth-field relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="auth-input peer placeholder-transparent w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-primary"
                  placeholder="Email"
                  required
                />
                <label htmlFor="email" className="auth-label">
                  Email
                </label>
              </div>

              {/* PASSWORD */}
              <div className="auth-field relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="auth-input peer placeholder-transparent w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-primary"
                  placeholder="Password"
                  required
                />
                <label htmlFor="password" className="auth-label">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="auth-button w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition"
              >
                Log in
              </button>

              {/* ✅ SIGNUP LINK */}
              <p className="auth-text text-center text-gray-500 text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="auth-link text-primary font-semibold"
                >
                  Sign up
                </Link>
              </p>

              <div className="auth-divider text-center text-gray-400 text-sm py-2">
                <span>Or continue with</span>
              </div>

              <div className="auth-socials flex gap-4 justify-center">
                <button
                  type="button"
                  className="auth-social flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
                >
                  <FcGoogle className="w-6 h-6" /> Google
                </button>
                <button
                  type="button"
                  className="auth-social flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
                >
                  <FaFacebook className="w-6 h-6 text-blue-600" /> Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
