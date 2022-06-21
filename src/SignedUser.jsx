import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import NotFound from './pages/NotFoud/NotFound.jsx'
import FormWindow from './components/FormWindow/FormWindow.jsx'
import Overlay from './components/FormWindow/Overlay.jsx'

const SignedUser = () => (
  <div className="App relative font-spartan font-medium h-screen w-screen flex bg-gray-100">
    <InvoiceRoutes />
    <FormWindow />
    <Overlay />
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
