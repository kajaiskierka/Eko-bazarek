import { NavItem } from "../Header/NavItem";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

export const Footer = () => {
  // const socialMedia = [
  //   { name: "facebook", icon: "facebook.png", link: null },
  //   { name: "instagram", icon: "instagram.png", link: null },
  //   { name: "linkedin", icon: "linkedin.png", link: null },
  //   { name: "twitter", icon: "twitter.png", link: null },
  //   { name: "youtube", icon: "youtube.png", link: null },
  // ];
  return (
    <footer
      className="flex flex-col items-center bg-[#412F22]  text-center text-white
         justify-center h-[514px] "
    >
      <div className="my-5 ">
        <ul className="flex flex-row my-[100px] text-center">
          <NavItem to="/about-us">O nas</NavItem>
          <NavItem to="/products">Produkty</NavItem>
          <NavItem to="/contact">Kontakt</NavItem>
          <NavItem to="/terms">Warunki użytkowania</NavItem>
          <NavItem to="/policy">Polityka prywatności</NavItem>
        </ul>
      </div>
      {/* <ul className="flex flex-row mb-4">
        {socialMedia.map((socialMedia, index) => (
          <li key={index} className="mx-2">
            <img
              src={`assets/${socialMedia.icon}`}
              alt={socialMedia.name}
              className="h-6 w-6"s
            />
          </li>
        ))}
      </ul> */}
      <div className="flex flex-row h-[36px]">
        <ul className="flex flex-row mx-2">
          <img src={facebook} alt="iconFb" className="h-[36px] w-[36px]" />
          <img src={instagram} alt="iconIg" className="h-[36px] w-[36px]" />
          <img src={linkedin} alt="iconLi" className="h-[36px] w-[36px]" />
          <img src={twitter} alt="iconTt" className="h-[36px] w-[36px]" />
          <img src={youtube} alt="iconYt" className="h-[36px] w-[36px]" />
        </ul>
      </div>

      <div className="my-[16px]" text-center>
        ©EkoBazarek Store Powered by Kajko, App icons by{" "}
        <a className="underline" href="https://icons8.com/" target="_blank">
          icons8
        </a>
      </div>
    </footer>
  );
};
