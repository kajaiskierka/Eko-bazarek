import { NavItem } from "./NavItem";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Logo from "./logo-main.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header
      className="bg-[#46AA42] text-white flex flex-row justify-between items-center w-full h-[64px]"
    >
      <div className="flex flex-row items-center">
        <img src={Logo} alt="Logo EkoBazarek" className="h-[42px] ml-4 mr-2" />
        <h2>EkoBazarek</h2>
      </div>
      <ul className="flex flex-row">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about-us">O nas</NavItem>
        <NavItem to="/products">Produkty</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>

      <div className=" text-white flex flex-row mx-4  ">
        <button className="flex items-center justify-center w-[140px] h-[24px] mr-4">
          <MagnifyingGlassIcon className="p-3 m-2"></MagnifyingGlassIcon>
          <SparklesIcon className="p-3 m-2"></SparklesIcon>
        </button>
          <Link className=" text-white flex items-center justify-center w-6 h-6 " 
          to="/profile">
          <UserIcon className=""></UserIcon>
          </Link>
        
      </div>
      {/* <button className="bg-white-200">
        <MagnifyingGlassIcon className= "w-5 h-5m inline-block"/> */}
      {/* </button> */}
    </header>
  );
};
