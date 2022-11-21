/* eslint-disable react/prop-types */

import React from 'react';
import Header from '~/components/Header';
import OnTop from './OnTop';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <OnTop />
        <div>
          <h1>Index cua DefaultLayout</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
