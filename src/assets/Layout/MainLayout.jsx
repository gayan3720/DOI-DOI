import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
