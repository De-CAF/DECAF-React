import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HomeSection from "views/IndexSections/HomeSection.js";
import Footer from "components/Footer/Footer.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <HomeSection />
        <div className="main">
        </div>
        <Footer />
      </div>
    </>
  );
}
