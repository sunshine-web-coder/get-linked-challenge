import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menuLink } from "./data";
import hamburgerImg from "../../assets/hamburger.png"
import style from "./Header.module.scss"

export default function Header() {
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
        <div className="hidden lg:block">
          <nav className="flex items-center">
            <ul className="flex items-center text-base text-white gap-[56px]">
              {menuLink.map((navLink, i) => (
                <li key={i}>
                  <Link to={navLink.slug}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
            <div className="ml-[121px]">
              <Link className="w-[172px] flex items-center justify-center text-white text-base font-normal h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded" to="">Register</Link>
            </div>
          </nav>
        </div>
        <div className={style.hamburger}>
          <img className="w-7 md:w-10" src={hamburgerImg} alt="" />
        </div>
      </div>
    </div>
  );
}
