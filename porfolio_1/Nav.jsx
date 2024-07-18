import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { RxSun } from "react-icons/rx";
import { Link } from "react-scroll";

function Nav({ links }) {
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
    <div className="hidden md:flex">
      <div className="flex gap-6 items-center justify-center font-medium">
        <div className="flex space-x-6">
          {links.map((item) => (
            <Link 
            spy={true}
            smooth={true}
            to={item.path}
            offset={-50}
            duration={500}
            className="hover:text-blue-600 cursor-pointer">

              {item.name}

            </Link>
          ))}
        </div>

        <div className="text-xl">
          {theme === "dark" ? (
            <FaMoon onClick={() => setTheme("light")} />
          ) : (
            <RxSun onClick={() => setTheme("dark")} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
