import React from 'react';
import './style.scss';

import Introductions from '~/components/Introductions';
import About from '~/components/About';
import Services from '~/components/Services';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

function Home() {
  return (
    <div>
      <Introductions />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
