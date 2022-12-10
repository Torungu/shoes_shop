import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss'
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Login from './pages/login/Login'
import Profile from './pages/profile/profile'
import Register from './pages/register/Register'
import Carts from './pages/carts/Carts'
import Search from './pages/search/Search'
import UserTemplate from './templates/userTemplate/UserTemplate';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path='' element={<HomeTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path='Home' element={< Home />}></Route>
        <Route path='Detail' element={< Detail />}></Route>
        <Route path='Profile' element={<Profile />}></Route >
        <Route path='Login' element={< Login />}></Route >
        <Route path='Register' element={<Register />}></Route >
        <Route path='Carts' element={< Carts />}></Route >
        <Route path='Search' element={< Search />}></Route >
        <Route path='*' element={< Navigate />}></Route >
      </Route>
      <Route path='user' element={<UserTemplate />}>
        <Route index element={<Login />}></Route>
        <Route path='Register' element={<Register />}></Route >
        {/* Go /user/khong co link => ve lai user */}
        <Route path='*' element={< Navigate to='/user' />}></Route >
      </Route>
    </Routes>
  </BrowserRouter>
);