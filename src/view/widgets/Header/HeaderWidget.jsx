import React from "react";

const HeaderWidget = (
  { title = '' }
) => {
  return (
    <nav className="navbar shadow"
      style={{ justifyContent: "center" }}>

      <h2>{title}</h2>
      
    </nav>
  );
};

export default HeaderWidget;
