import React from 'react';
import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import Navbar from '../components/Navbar/index';
import Registration from '../pages/Registration/index';
import Dashboard from '../pages/Dashboard/index';
import Terms from '../pages/Terms/index';
import PersonalProfile from '../pages/PersonalProfile/index';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import FavoriteTracks from '../pages/FavoriteTracks/index';
import Playlist from '../pages/Playlist/index';
import Categories from '../pages/Categories/index';
import OutletFrame from '../components/OutletFrame/OutletFrame';


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="reset" element={<ForgotPassword />} />
      <Route path="registration" element={<Registration />} />
      <Route path="/" element={<OutletFrame />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="terms" element={<Terms />} />
        <Route path="profile" element={<PersonalProfile />} />
        <Route path="favorites" element={<FavoriteTracks />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default Router;
