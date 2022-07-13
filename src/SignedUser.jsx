import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import NotFound from './pages/NotFoud/NotFound.jsx'
import InvoiceItemPage from './pages/InvoiceItemPage/InvoiceItemPage.jsx'
import {bgColor} from './constants'

const SignedUser = () => (
  <div
<<<<<<< HEAD
    className={`App font-spartan font-medium h-screen w-screen flex  bg-[${bgColor}]`}
=======
    className={`App font-spartan font-medium h-screen w-screen flex bg-[#F2F2F2] bg-[${bgColor}]`}
>>>>>>> 6d91b1a (feat(IT-9)-filter-by-status-isFinished)
  >
    <InvoiceRoutes />
  </div>
)

const InvoiceRoutes = () => (
  <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/invoice/:invoiceId" element={<InvoiceItemPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)

export default SignedUser
