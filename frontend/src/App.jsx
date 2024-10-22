import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pharmacies from './pages/Pharmacies'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyOrders from './pages/MyOrders'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pharmacies' element={<Pharmacies />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/orders' element={<Orders />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
