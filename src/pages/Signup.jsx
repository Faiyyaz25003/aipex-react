// import React, { useState, useEffect } from "react";
// import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../styles/Singup.css";

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     company: "",
//     agree: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const services = [
//     { label: "International Shipping", image: "/internaltional.webp" },
//     {
//       label: "Liquid Courier Service",
//       image: "/liquid-sample-courier-service.jpg",
//     },
//     { label: "Medicine Shipping", image: "/medicine.jpg" },
//     { label: "Dangerous Goods Courier Service", image: "/dangerous.webp" },
//     { label: "University Documents Delivery", image: "/University.jpg" },
//   ];

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentSlide((prev) => (prev + 1) % services.length),
//       2000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim())
//       newErrors.fullName = "Please enter your Full Name";
//     if (formData.fullName.length > 30)
//       newErrors.fullName = "Max 30 characters allowed";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (formData.email.length > 250)
//       newErrors.email = "Max 250 characters allowed";
//     if (!formData.phone) newErrors.phone = "Phone number is required";
//     if (!formData.password.match(/[^a-zA-Z0-9].*[^a-zA-Z0-9]/))
//       newErrors.password =
//         "Password must include at least 2 special characters";
//     if (!formData.company) newErrors.company = "Please enter your Company Name";
//     if (!formData.agree) newErrors.agree = "You must agree to the Terms";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Account Created Successfully!");
//     }
//   };

//   return (
//     <div className="auth-container bg-medium-gray">
//       <div className="auth-card bg-light-gray ">
//         {/* LEFT SLIDE */}
//         <div className="auth-left">
//           <img
//             key={currentSlide}
//             src={services[currentSlide].image}
//             alt={services[currentSlide].label}
//             className="auth-slide"
//           />
//           <div className="auth-overlay"></div>
//           <div className="auth-caption text-light">
//             {services[currentSlide].label}
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="auth-right">
//           <div className="auth-logo">
//             <img src="/aipex-logo.png" alt="Aipex Logo" />
//           </div>

//           <h2 className="auth-heading">Sign Up</h2>

//           <form onSubmit={handleSubmit} className="auth-form">
//             {/* Full Name */}
//             <div className="relative auth-field">
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className={`peer auth-input ${
//                   errors.fullName ? "border-red-500" : ""
//                 }`}
//                 placeholder=" "
//               />
//               <label className="floating-label">Full Name</label>
//               {errors.fullName && (
//                 <p className="auth-error">{errors.fullName}</p>
//               )}
//             </div>

//             {/* Email & Phone */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative auth-field">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`peer auth-input ${
//                     errors.email ? "border-red-500" : ""
//                   }`}
//                   placeholder=" "
//                 />
//                 <label className="floating-label">Email</label>
//                 {errors.email && <p className="auth-error">{errors.email}</p>}
//               </div>

//               <div className="relative auth-field">
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`peer auth-input ${
//                     errors.phone ? "border-red-500" : ""
//                   }`}
//                   placeholder=" "
//                 />
//                 <label className="floating-label">Phone</label>
//                 {errors.phone && <p className="auth-error">{errors.phone}</p>}
//               </div>
//             </div>

//             {/* Password & Company */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative auth-field">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`peer auth-input ${
//                     errors.password ? "border-red-500" : ""
//                   }`}
//                   placeholder=" "
//                 />
//                 <label className="floating-label">Password</label>
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//                 {errors.password && (
//                   <p className="auth-error">{errors.password}</p>
//                 )}
//               </div>

//               <div className="relative auth-field">
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className={`peer auth-input ${
//                     errors.company ? "border-red-500" : ""
//                   }`}
//                   placeholder=" "
//                 />
//                 <label className="floating-label">Company Name</label>
//                 {errors.company && (
//                   <p className="auth-error">{errors.company}</p>
//                 )}
//               </div>
//             </div>

//             {/* Checkbox */}
//             <div className="auth-checkbox">
//               <input
//                 type="checkbox"
//                 name="agree"
//                 checked={formData.agree}
//                 onChange={handleChange}
//                 className="w-4 h-4"
//               />
//               <label className="auth-checkbox-label">
//                 I agree to the{" "}
//                 <span className="text-blue-600 cursor-pointer">Terms</span> and{" "}
//                 <span className="text-red-600 cursor-pointer">
//                   Privacy Policy
//                 </span>
//               </label>
//             </div>
//             {errors.agree && <p className="auth-error">{errors.agree}</p>}

//             {/* Submit */}
//             <button type="submit" className="auth-submit">
//               Create Account
//             </button>

//             {/* Login Link */}
//             <p className="auth-link-text">
//               Already have an account?{" "}
//               <Link to="/" className="auth-link">
//                 Login
//               </Link>
//             </p>

//             {/* Divider */}
//             <div className="auth-divider">
//               <hr />
//               <span>Or Sign up with</span>
//               <hr />
//             </div>

//             {/* Social Buttons */}
//             <div className="auth-socials flex gap-4 justify-center mt-4">
//               <button className="auth-social flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
//                 <FaFacebook className="text-2xl text-blue-600" /> Facebook
//               </button>
//               <button className="auth-social flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
//                 <FaGoogle className="text-2xl text-red-500" /> Google
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Singup.css";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    { label: "International Shipping", image: "/internaltional.webp" },
    {
      label: "Liquid Courier Service",
      image: "/liquid-sample-courier-service.jpg",
    },
    { label: "Medicine Shipping", image: "/medicine.jpg" },
    { label: "Dangerous Goods Courier Service", image: "/dangerous.webp" },
    { label: "University Documents Delivery", image: "/University.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % services.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Please enter your Full Name";
    if (formData.fullName.length > 30)
      newErrors.fullName = "Max 30 characters allowed";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.email.length > 250)
      newErrors.email = "Max 250 characters allowed";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password.match(/[^a-zA-Z0-9].*[^a-zA-Z0-9]/))
      newErrors.password =
        "Password must include at least 2 special characters";
    if (!formData.company) newErrors.company = "Please enter your Company Name";
    if (!formData.agree) newErrors.agree = "You must agree to the Terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account Created Successfully!");
    }
  };

  return (
    <div className="auth-container bg-medium-gray">
      <div className="auth-card bg-light-gray">
        {/* LEFT SLIDE */}
        <div className="auth-left">
          <img
            key={currentSlide}
            src={services[currentSlide].image}
            alt={services[currentSlide].label}
            className="auth-slide"
          />
          <div className="auth-overlay"></div>
          <div className="auth-caption text-light">
            {services[currentSlide].label}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="auth-right">
          <div className="auth-logo">
            <img src="/aipex-logo.png" alt="Aipex Logo" />
          </div>

          <h2 className="auth-heading">Sign Up</h2>

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Full Name */}
            <div className="relative auth-field">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`peer auth-input ${
                  errors.fullName ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              <label className="floating-label">Full Name</label>
              {errors.fullName && (
                <p className="auth-error">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative auth-field">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`peer auth-input ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              <label className="floating-label">Email</label>
              {errors.email && <p className="auth-error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="relative auth-field">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`peer auth-input ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              <label className="floating-label">Phone</label>
              {errors.phone && <p className="auth-error">{errors.phone}</p>}
            </div>

            {/* Password & Company in one row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Password */}
              <div className="relative auth-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`peer auth-input ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder=" "
                />
                <label className="floating-label">Password</label>
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <p className="auth-error">{errors.password}</p>
                )}
              </div>

              {/* Company */}
              <div className="relative auth-field">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`peer auth-input ${
                    errors.company ? "border-red-500" : ""
                  }`}
                  placeholder=" "
                />
                <label className="floating-label">Company Name</label>
                {errors.company && (
                  <p className="auth-error">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Checkbox */}
            <div className="auth-checkbox">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="auth-checkbox-label">
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">Terms</span> and{" "}
                <span className="text-red-600 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
            {errors.agree && <p className="auth-error">{errors.agree}</p>}

            {/* Submit */}
            <button type="submit" className="auth-submit">
              Create Account
            </button>

            {/* Login Link */}
            <p className="auth-link-text">
              Already have an account?{" "}
              <Link to="/" className="auth-link">
                Login
              </Link>
            </p>

            {/* Divider */}
            <div className="auth-divider">
              <hr />
              <span>Or Sign up with</span>
              <hr />
            </div>

            {/* Social Buttons */}
            <div className="auth-socials flex gap-4 justify-center mt-4">
              <button className="auth-social flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
                <FaFacebook className="text-2xl text-blue-600" /> Facebook
              </button>
              <button className="auth-social flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
                <FaGoogle className="text-2xl text-red-500" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
