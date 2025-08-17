import React from "react";

type NavbarProps = {
  links: string[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex gap-6">
        {links.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
