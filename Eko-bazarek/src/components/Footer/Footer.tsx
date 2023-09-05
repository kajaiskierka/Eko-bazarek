import { NavItem } from "../Header/NavItem";

export const Footer = () => {
  return (
    <footer
      className="bg-[#412F22] my-[200px] text-center text-white
        flex flex-row justify-center h-[514px] "
    >
        
        
   



      <ul className="flex flex-row my-[200px] text-center">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about-us">O nas</NavItem>
        <NavItem to="/products">Produkty</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>

      <div className="my-[16px]">
      ©EkoBazarek Store Powered by Kajko, App icons by{" "}
      <a className="underline" href="https://icons8.com/" target="_blank">
        icons8
      </a>
      </div>
    </footer>
  );
};
