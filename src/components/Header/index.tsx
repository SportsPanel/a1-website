import React, { useState } from "react";
import { navLinks } from "../../constants";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

const Header: React.FC<any> = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "instant", block: "nearest" });
    }
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black px-10 py-4 z-20">
        <div className="flex flex-wrap flex-row items-center justify-between mx-auto max-w-screen-xl">
          <h1 className="text-primary font-bold text-3xl cursor-pointer">
            A1 Sports
          </h1>
          <ul className="flex-row font-normal hidden sm:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="block py-2 pr-4 pl-3 duration-200 text-white hover:text-gray text-xl"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4 bg-black p-5">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="font-poppins text-white font-medium cursor-pointer text-[16px]"
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
