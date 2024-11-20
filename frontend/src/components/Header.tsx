import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <h1 className="m-auto group text-4xl font-bold text-white hover:text-amber-500">
        Taba
        <span className="italic text-teal-500 group-hover:text-white">Pay</span>
      </h1>
      <h1 className="m-auto text-4xl font-bold text-white"> Header </h1>
    </header>
  );
};

export default Header;