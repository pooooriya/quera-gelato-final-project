import React from "react";
import Header from "./header";
import Footer from "./footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-slate-100 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
