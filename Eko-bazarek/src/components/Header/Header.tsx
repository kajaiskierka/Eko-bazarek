import { NavItem } from "./NavItem";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Logo from "./logo-main.png";

export const Header = () => {
  return (
    <header
      className="bg-[#46AA42] text-white
     flex flex-row justify-center h-[64px]"
    >
      <div className="flex flex-row h-[24px]">
        <img src={Logo} alt="Logo EkoBazarek" className="h-[42px] w-[42px]" />
        <h2>EkoBazarek</h2>
      </div>
      <ul className="flex flex-row">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about-us">O nas</NavItem>
        <NavItem to="/products">Produkty</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>

      <div className="h-[24px] w-[24px] text-white flex flex-row  ">
        <ul className="flex flex-row ">
          <MagnifyingGlassIcon></MagnifyingGlassIcon>
          <SparklesIcon></SparklesIcon>
          <UserIcon></UserIcon>
        </ul>
      </div>
      {/* <button className="bg-white-200">
        <MagnifyingGlassIcon className= "w-5 h-5m inline-block"/> */}
      {/* </button> */}
    </header>
  );
};
