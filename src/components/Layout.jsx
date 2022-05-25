import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        alignItems: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100vw",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
