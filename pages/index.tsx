import type { NextPage } from "next";
import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";
import hamburgerBtn from "../public/assets/shared/mobile/icon-hamburger.svg";
import HeroSection from "./components/HeroSection";

const Home: NextPage = () => {
  return (
    <div className="h-screen space-y-4 px-3 pt-4 md:px-5 lg:px-10">
      <header className="mb-5 flex justify-between md:mb-6 lg:mb-4">
        <div className="h-full w-20 md:w-30 lg:w-25">
          <Image src={logo} alt="logo" layout="responsive" />
        </div>
        <div className="md:hidden">
          <Image src={hamburgerBtn} width="20" height="20" alt="logo" />
        </div>
        <nav className="hidden gap-4 font-barlow text-xs font-bold tracking-widest text-secondary md:flex ">
          <div>HOME</div>
          <div>ABOUT US</div>
          <div>CREATE YOUR PLAN</div>
        </nav>
      </header>
      <HeroSection />
    </div>
  );
};

export default Home;
