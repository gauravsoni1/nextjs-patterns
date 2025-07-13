"use client";

import Image from "next/image";
import { useState } from "react";
import UserProfileIcon from "./UserProfileIcon";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement search functionality here
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image style={{width: "auto"}} src="/lion.png" alt="Logo" width={35} height={35} />
      </div>
      <form onSubmit={handleSearchSubmit} className="flex-grow mx-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full p-2 rounded"
        />
      </form>
      <UserProfileIcon />
    </header>
  );
};

export default Header;