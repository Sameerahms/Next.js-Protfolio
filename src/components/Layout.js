import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full h-full inline-block bg-light z-0 p-32 text-dark dark:text-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-4
      2xl:mt-36 xl:mt-20 lg:mt-12 md:mt-25 sm:mt-10 xs:mt-20`}
    >
      {children}
    </div>
  );
};

export default Layout;
