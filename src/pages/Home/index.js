import React from 'react';
import './style.scss';
// import Header from '~/components/Header';
import Introductions from '~/components/Introductions';
import About from '~/components/About';
// import Portfolio from '~/components/Portfolio';
import Services from '~/components/Services';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

function Home() {
  return (
    <div>
      <div>
        {/* <div className="wrapper">
      <div className="container"> */}
        {/* <h4>Home Pages</h4> */}
        <Introductions />
        <About />
        {/* <Portfolio /> */}
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
