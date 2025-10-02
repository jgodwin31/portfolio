import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-400">JG</div>
      <ul className="flex space-x-6">
        {["Home", "About", "Resume", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
