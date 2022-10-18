import React from "react";
// import "./Css/grid.css";

// import Header from "@/components/Header";
// import Introductions from "@/components/Introductions";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Login from "@/utils/Users/Admin";
// import NotFound from "@/components/NotFound";
import CustomerRegister from "@/utils/Users/Customers";

//  <!-- Library CSS Files -->
import "../src/assets/libs/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/libs/bootstrap/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Route path="/login" component={Login} /> */}
      {/* 
      <Header />
      <Introductions />
      <About />
      <Services />
      <Contact />
      <Footer /> */}
      {/* <Login /> */}
      <CustomerRegister />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
