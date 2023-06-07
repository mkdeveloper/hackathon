import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1440px] w-full mx-auto lg:px-20 px-8 mt-10 mb-28">
      {children}
    </section>
  );
};

export default Wrapper;
