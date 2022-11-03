/* eslint-disable react/prop-types */

import React from 'react';
import Header from '~/components/Header';
import Search from './Search';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Search />
        <div>
          <h1>Index cua DefaultLayout</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
