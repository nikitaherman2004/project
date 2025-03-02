import React from "react";
import Header from "./Header/Header";
type layoutProps = {
  children: React.ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  return <div className="main-container">
    <Header />
    {children}
  </div>;
};


