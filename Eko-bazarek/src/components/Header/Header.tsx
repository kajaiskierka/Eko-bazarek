import { NavItem } from "./NavItem";


export const Header = () => {
  return (
    <header className="bg-[#46AA42] text-white
     flex flex-row justify-center h-[64px]">
      <ul className="flex flex-row">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about-us">O nas</NavItem>
        <NavItem to="/products">Produkty</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>
      <button className ="bg-white-200">
        {/* <MagnifyingGlassIcon className= "w-5 h-5m inline-block"/> */}

      </button>
    </header>
  );
};
