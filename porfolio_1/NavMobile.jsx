import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxMoon } from "react-icons/rx";
import { RxSun } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

function NavMobile({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="sm:hidden">
      <div className="flex items-center gap-3">
        {/* darkmode */}
        <div>
          {theme === "dark" ? 
          
          (
            <RxMoon className="text-xl" onClick={() => setTheme("light")} />
          ) : 
          
          (
            <RxSun className="text-xl" onClick={() => setTheme("dark")} />
          )}

        </div>

        {/* menus toggle */}
        <div className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* mobile menus */}
      <div
        className={`${
          isOpen ? "right-0" : "right-full"
        } fixed top-16 right-0 h-[80vh] w-full bg-gray-100 flex justify-center items-center transition-all duration-300 dark:bg-slate-900 dark:text-white shadow-md`}
      >
        <div className="flex flex-col space-y-8">
          {links.map((link) => (

            <Link
              smooth={true}
              offset={-50}
              spy={true}
              duration={500}
              to={link.path}
              className="cursor-pointer text-2xl hover:text-blue-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
