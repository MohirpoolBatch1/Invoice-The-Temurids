import React from 'react'
import {Routes, Route} from 'react-router-dom'
import InvoiceItemPage from './pages/InvoiceItemPage/InvoiceItemPage.jsx'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import datas from './data.json'

const SignedUser = () => (
  <div className="App font-spartan font-medium h-screen w-screen flex bg-gray-100">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      {datas.map((data, index) => (
        <Route
          key={index}
          path={`/invoice/${data.id}`}
          element={<InvoiceItemPage id={data.id} />}
        />
      ))}
    </Routes>
  </div>
)
export default SignedUser
