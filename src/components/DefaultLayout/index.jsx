import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Menu from '../Menu';

function DefaultLayout({ children }) {
  return (
    <>
      <Menu />
      <div>
        <Outlet />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
