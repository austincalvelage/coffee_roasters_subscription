import Image from 'next/legacy/image'
import Link from 'next/link'
import logo from '../public/assets/shared/desktop/logoLight.svg'
import Grid from './Grid'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './Icons'

export default function Footer(): JSX.Element {
  const links: {
    name: string
    link: string
  }[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Create Your Plan',
      link: '/plan',
    },
  ]

  const socialLinks: {
    link: string
    icon: JSX.Element
  }[] = [
    {
      icon: <FacebookIcon />,
      link: '#',
    },
    {
      icon: <TwitterIcon />,
      link: '#',
    },
    {
      icon: <InstagramIcon />,
      link: '#',
    },
  ]

  return (
    <footer className='bg-dark-grey-blue py-4'>
      <Grid classes='space-y-4 xl:space-y-0'>
        <div className='col-span-4 col-start-2 md:col-start-5 xl:col-span-2 xl:col-start-2'>
          <Image src={logo} alt='logo' layout='responsive' />
        </div>
        <nav className='text-secondary col-span-full col-start-1 flex flex-col items-center space-y-3 font-barlow text-sm font-black md:flex-row md:justify-center md:space-y-0 xl:col-span-4 xl:col-start-5 xl:justify-start'>
          {links.map(({ link, name }, index) => (
            <div key={index} className='text-grey-heather hover:text-light-cream'>
              <Link href={link} className='px-2 py-1'>
                {name.toUpperCase()}
              </Link>
            </div>
          ))}
        </nav>
        <div className='col-span-full col-start-1 flex items-center justify-center gap-3 xl:col-span-1 xl:col-start-11'>
          {socialLinks.map(({ icon, link }, index) => (
            <div key={index}>
              <Link href={link}>{icon}</Link>
            </div>
          ))}
        </div>
      </Grid>
    </footer>
  )
}
