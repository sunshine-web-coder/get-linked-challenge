import { Link } from "react-router-dom";
import { menuLink } from "./data";
import hamburgerImg from "../../assets/hamburger.png"
import closeImg from "../../assets/close.png"
import style from "./Header.module.scss"
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenMenu = () => {
    setIsOpen(true);
  };
  
  const toggleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-[16px] border-b border-white border-opacity-20 pt-8 pb-4">
      <div className="custom_container flex justify-between items-center">
        <Link to="/">
          <div>
            <span className="text-white text-xl md:text-3xl font-bold clash_display">
              get
            </span>
            <span className="text-fuchsia-500 text-xl md:text-3xl font-bold clash_display">
              linked
            </span>
          </div>
        </Link>
        <div className="">
          <nav className={`flex ${style.navMenu} ${isOpen ? "block lg:hidden" : "hidden lg:flex"}`}>
            <div className={`lg:hidden flex justify-end`} onClick={toggleCloseMenu}>
              <img className="w-[23px] h-[23px]" src={closeImg} alt="" />
            </div>
            <ul className={`flex items-start lg:items-center text-base text-white gap-[30px] lg:gap-[56px] ${style.ulMenu}`}>
              {menuLink.map((navLink, i) => (
                <li key={i} onClick={toggleCloseMenu}>
                  <Link to={navLink.slug}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
            <div className="ml-[0px] lg:ml-[121px]">
              <Link to="/register" className="w-[172px] flex items-center justify-center text-white text-base font-normal h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded" onClick={toggleCloseMenu}>Register</Link>
            </div>
          </nav>
        </div>
        <div className={`lg:hidden block ${style.hamburger}`} onClick={toggleOpenMenu}>
          <img className="w-7 md:w-10" src={hamburgerImg} alt="" />
        </div>
      </div>
    </div>
  );
}
