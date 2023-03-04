import Image from 'next/legacy/image'
import Link from 'next/link'
import logo from '../public/assets/shared/desktop/logoLight.svg'
import Grid from './Grid'

function Footer(): JSX.Element {
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
    name: string
    link: string
    image: string
  }[] = [
    {
      name: 'Facebook',
      image: '/assets/shared/desktop/icon-facebook.svg',
      link: '#',
    },
    {
      name: 'Twitter',
      image: '/assets/shared/desktop/icon-twitter.svg',
      link: '#',
    },
    {
      name: 'Instagram',
      image: '/assets/shared/desktop/icon-instagram.svg',
      link: '#',
    },
  ]

  return (
    <footer className='bg-[#2C343E] py-6'>
      <Grid classes='space-y-4 xl:space-y-0'>
        <div className='col-span-4 col-start-2 md:col-start-5 xl:col-span-2 xl:col-start-2'>
          <Image src={logo} alt='logo' layout='responsive' />
        </div>
        <nav className='col-span-full col-start-1 flex flex-col items-center space-y-3 font-barlow text-xs font-bold tracking-widest text-secondary md:flex-row md:justify-center md:space-y-0 xl:col-span-4 xl:col-start-5 xl:justify-start'>
          {links.map(({ link, name }, index) => (
            <div key={index}>
              <Link href={link} className='px-2 py-1'>
                {name.toUpperCase()}
              </Link>
            </div>
          ))}
        </nav>
        <div className='col-span-full col-start-1 flex items-center justify-center gap-3 xl:col-span-1 xl:col-start-11'>
          {socialLinks.map(({ name, image, link }, index) => (
            <div key={index} className='h-3 w-3'>
              <Link href={link}>
                <Image src={image} alt={name} layout='responsive' width={40} height={40} />
              </Link>
            </div>
          ))}
        </div>
      </Grid>
    </footer>
  )
}

export default Footer
