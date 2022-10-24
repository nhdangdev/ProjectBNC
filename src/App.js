import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react'; // Thẻ chỉ để chứa, không sinh ra trong DOM
// import "./Css/grid.css";

// import Header from '~/components/Header';
// import Introductions from "~/components/Introductions";
// import About from "~/components/About";
// import Services from "~/components/Services";
// import Contact from "~/components/Contact";
// import Footer from "~/components/Footer";
// import Login from "~/utils/Users/Admin";
// import Register from '~/utils/Users/Customers';
// import NotFound from "~/components/NotFound";

// Test
// import Home from '~/pages/Home';
// import Following from '~/pages/Following';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

//  <!-- Library CSS Files -->
import '../src/assets/libs/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/libs/bootstrap/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
    // {/* <Header />
    //   <Introductions />
    //   <About />
    //   <Services />
    //   <Contact />
    //   <Footer /> */}
    //       {/* <Login /> */}
    //       {/* <Register /> */}
    //       {/* <NotFound /> */}
  );
}

export default App;
