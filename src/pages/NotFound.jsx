import React from "react";
import NotFoundImg from "../../public/images/not found.png";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <img src={NotFoundImg} alt="Not Found" />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
