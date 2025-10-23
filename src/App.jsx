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
import Header from './pages/Header'
import Benifit from './pages/Benifit'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Benifit/>
    </div>
  )
}

export default App
