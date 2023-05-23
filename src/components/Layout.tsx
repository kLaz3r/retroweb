import React from "react";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
