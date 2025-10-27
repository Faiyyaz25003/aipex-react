// // import Login from './pages/Login'
// // import Signup from './pages/Signup'

// // const App = () => {
// //   return (
// //     <div>
// //       {/* <Login/> */}
// //       <Signup/>
// //     </div>
// //   )
// // }

// // export default App

// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'

import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Benifit from './pages/Benifit'
import Operation from './pages/Operation'
import Service from './pages/Services'
import Courier from "./pages/Courier";
import Contact from "./pages/Contact";
import Tracking from './pages/Tracking'
import Scroll from './pages/Scroll'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Benifit />
      <Operation />
      <Service />
      <Courier />
      <Scroll/>
      <Tracking />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

