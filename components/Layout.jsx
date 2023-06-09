import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
