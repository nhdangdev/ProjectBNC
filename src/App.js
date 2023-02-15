import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react'; // Thẻ chỉ để chứa, không sinh ra trong DOM

import { publicRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts';

//  <!-- Library CSS Files -->
import '~/assets/libs/bootstrap-icons/bootstrap-icons.css';
import '~/assets/libs/bootstrap/css/bootstrap.min.css';

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
  );
}

export default App;
