import React from 'react'
import Sidebar from './components/Sidebar.jsx'

/* import Homepage from "./pages/Homepage/Homepage.jsx"; */

const SignedUser = () => (
  <div className="App font-spartan font-medium h-screen w-screen flex bg-gray-100">
    <Sidebar />
    {/*     <Routes>   <Route path="/" element={<Homepage />} /> </Routes> */}
  </div>
)
export default SignedUser
