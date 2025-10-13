
import React, { useState, useEffect } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Singup.css";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    password: "",

    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    { label: "International Shipping", image: "/internaltional.webp" },
    { label: "Liquid Courier Service", image: "/liquid-sample-courier-service.jpg" },
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
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your Full Name";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password.match(/[^a-zA-Z0-9].*[^a-zA-Z0-9]/))
      newErrors.password = "Password must include at least 2 special characters";
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
        <div className="h-[620px]">
          <div className="auth-logo">
            <img src="/aipex-logo.png" alt="Aipex Logo" />
          </div>

          <div className="auth-form-wrapper w-full px-6">
            <h2 className="auth-heading font-bold text-primary">Register</h2>

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

              {/* Email and Phone in One Line */}
              <div className="grid grid-cols-2 gap-4 mt-4">
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

                {/* Phone */}
                <div className="relative auth-field">
                  <input
                    type="number"
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
              </div>

              {/* Password & Company in one row */}
              <div className="grid grid-cols-2 gap-4 mt-4">
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
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </span>
                  {errors.password && (
                    <p className="auth-error">{errors.password}</p>
                  )}
                </div>
              </div>

              {/* Checkbox */}
              <div className="auth-checkbox mt-4">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <label className="auth-checkbox-label">
                  I agree to the{" "}
                  <span className="text-blue-600 cursor-pointer">Terms</span>{" "}
                  and{" "}
                  <span className="text-primary cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>
              {errors.agree && <p className="auth-error">{errors.agree}</p>}

              {/* Submit */}
              <button type="submit" className="auth-submit bg-primary mt-4">
                Create Account
              </button>

              {/* Login Link */}
              <p className="auth-link-text mt-2">
                Already have an account?{" "}
                <Link to="/" className="auth-link text-primary font-semibold">
                  Login
                </Link>
              </p>

              {/* Divider */}
              <div className="auth-divider">
                <div className="auth-divider-line"></div>
                <span className="auth-divider-text">Or continue with</span>
                <div className="auth-divider-line"></div>
              </div>

              {/* Social Buttons */}
              <div className="auth-socials flex gap-4 justify-center mt-4">
                <button className="auth-social flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Google
                </button>
                <button className="auth-social flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
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
