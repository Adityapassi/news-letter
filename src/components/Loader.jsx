import React from "react";

const Loader = () => {
  const loaderStyle = {
    width: "100px",
    height: "100px",
    textAlign: "center",
    display: "block",
    objectFit: "cover",
    margin: "0 auto",
  };

  const loader = {
    height: "100vh",
    display: "flex",
    justifyContetn: "center",
    alignItems: "center",
  };
  return (
    <div className="loader" style={loader}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt=""
        style={loaderStyle}
      />
    </div>
  );
};

export default Loader;
