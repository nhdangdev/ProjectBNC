import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import SubHeader from './SubHeader';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <SubHeader />
      <div>{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
