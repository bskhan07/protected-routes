import React from 'react'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Order from './Order/Order'
import Header from './Header/Header'
import { useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import Logout from './Login/Logout'
const App = () => {
  const { isAuth } = useSelector((state) => state.auth)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={
          <ProtectedRoute path='/profile' isAuth={isAuth}>
            <Profile />
          </ProtectedRoute>} />
        <Route path='/order' element={
          <ProtectedRoute path='/order' isAuth={isAuth}>
            <Order />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App