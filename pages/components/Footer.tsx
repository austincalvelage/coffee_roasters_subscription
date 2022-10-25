import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/shared/desktop/logoLight.svg";
import Grid from "./Grid";

import facebookLogo from "../../public/assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../../public/assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "../../public/assets/shared/desktop/icon-instagram.svg";

type Props = {};

function Footer({}: Props): JSX.Element {
  const links: {
    name: string;
    link: string;
  }[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Create Your Plan",
      link: "/plan",
    },
  ];
  const socialLinks = [facebookLogo, twitterLogo, instagramLogo];

  return (
    <footer className="bg-[#2C343E] py-6">
      <Grid classes="space-y-4 xl:space-y-0">
        <div className="col-span-4 col-start-2 md:col-start-5 xl:col-span-2 xl:col-start-2">
          <Image src={logo} alt="logo" layout="responsive" />
        </div>
        <nav className="col-span-full col-start-1 flex flex-col items-center space-y-3 font-barlow text-xs font-bold tracking-widest text-secondary md:flex-row md:justify-center md:space-y-0 xl:col-span-4 xl:col-start-5 xl:justify-start">
          {links.map(({ link, name }, index) => (
            <div key={index}>
              <Link href={link}>
                <a className="px-2 py-1">{name.toUpperCase()}</a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="col-span-full col-start-1 flex items-center justify-center gap-3 xl:col-span-1 xl:col-start-11">
          {socialLinks.map((socialLink, index) => (
            <div key={index}>
              <Link href="#">
                <a
                  className="bg-contain bg-no-repeat px-2 py-1 xl:px-1 xl:py-0"
                  style={{ backgroundImage: `url(${socialLink.src})` }}
                />
              </Link>
            </div>
          ))}
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
