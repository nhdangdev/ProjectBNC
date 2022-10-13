import "./Css/grid.css";
// import Header from "@/components/Header";
// import Introductions from "@/components/Introductions";
// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Login from "@/utils/Users/Admin";
import NotFound from "@/components/NotFound";

import React from "react";

//  <!-- Library CSS Files -->
import "../src/assets/libs/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/libs/bootstrap/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Route path="/login" component={Login} /> */}
      {/* <Introductions />
      <About />
      <Contact />
      <Footer /> */}
      <NotFound />
    </div>
  );
}

export default App;
