import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container px-4 mx-auto sm:px-6 max-w-7xl">{children}</div>
  );
};

export default Container;
