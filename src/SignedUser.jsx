import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import NotFound from './pages/NotFoud/NotFound.jsx'

const SignedUser = () => (
  <div className="App font-spartan font-medium h-screen w-screen flex bg-gray-100">
    <InvoiceRoutes />
  </div>
)

const InvoiceRoutes = () => (
  <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/invoice/:invoiceId" element={<InvoiceItemPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)

export default SignedUser
