import React from "react";
import { Sora } from "@next/font/google";
import Nav from "./Molecules/Nav";
import Header from "./Molecules/Header";
import TopLeftImg from "./Molecules/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Nav />
      <Header />
      {/* <TopLeftImg /> */}
      <div className="bg-primary/60 h-full w-full">
      {children}
      </div>
    </div>
  );
};

export default Layout;
