import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function DefaultLayout({ children }) {
  return (
    <>
      <Menu />
      <Main>
        <Outlet />
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
