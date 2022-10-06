import Image from "next/image";
import logo from "../../public/assets/shared/desktop/logo.svg";
import hamburgerBtn from "../../public/assets/shared/mobile/icon-hamburger.svg";
import Link from "next/link";

function Header(): JSX.Element {
  return (
    <header className="mb-5 flex justify-between md:mb-6 lg:mb-4">
      <div className="h-full w-20 md:w-30 lg:w-25">
        <Image src={logo} alt="logo" layout="responsive" />
      </div>
      <div className="md:hidden">
        <Image src={hamburgerBtn} width="20" height="20" alt="logo" />
      </div>
      <nav className="hidden gap-4 font-barlow text-xs font-bold tracking-widest text-secondary md:flex ">
        <div>
          <Link href="/">HOME</Link>
        </div>
        <div>
          <Link href="/about">ABOUT</Link>
        </div>
        <div>
          <Link href="/plan">PLAN</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
