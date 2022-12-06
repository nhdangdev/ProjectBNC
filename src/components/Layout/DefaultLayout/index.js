/* eslint-disable react/prop-types */
import React from 'react';
import Header from '~/components/Header';
import SubHeader from './SubHeader';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div>
        <SubHeader />
        <div>{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
