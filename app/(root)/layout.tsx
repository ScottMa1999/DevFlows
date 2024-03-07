import React from "react";

// components
import NavBar from "../../components/shared/navbar/NavBar";
import LeftSideBar from "@/components/shared/leftsidebar/LeftSidebar";
import RightSidebar from "@/components/shared/rightsidebar/RightSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      {/* NavBar */}
      <NavBar />
      <div className="flex">
        {/* LeftSideBar */}
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
        {/* RightSideBar */}
        <RightSidebar />
      </div>
    </main>
  );
};

export default Layout;
