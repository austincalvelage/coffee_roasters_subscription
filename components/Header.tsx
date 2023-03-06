import Image from 'next/legacy/image'
import Link from 'next/link'
import logo from '../public/assets/shared/desktop/logo.svg'
import hamburgerBtn from '../public/assets/shared/mobile/icon-hamburger.svg'
import closeBtn from '../public/assets/shared/mobile/icon-close.svg'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header(): JSX.Element {
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

  const [navToggle, setNavToggle] = useState(false)

  function navToggleHandler() {
    setNavToggle((prevState) => !prevState)
  }

  return (
    <header className='mb-5 flex justify-between bg-light-cream pt-4 md:mb-6 lg:mb-4'>
      <div className='h-full w-20 md:w-30 lg:w-25'>
        <Image src={logo} alt='logo' layout='responsive' />
      </div>
      <div className='md:hidden' onClick={navToggleHandler}>
        {!navToggle && <Image src={hamburgerBtn} width='20' height='20' alt='logo' />}
        {navToggle && <Image src={closeBtn} width='20' height='20' alt='logo' />}
      </div>
      <nav className='hidden gap-4 font-barlow text-sm font-black md:flex'>
        {links.map(({ link, name }, index) => (
          <div key={index} className='flex items-center text-grey-heather hover:text-dark-grey-blue'>
            <Link href={link}>{name.toUpperCase()}</Link>
          </div>
        ))}
      </nav>
      <AnimatePresence>
        {navToggle && (
          <motion.nav
            className='absolute left-0 top-12 z-10 h-screen w-screen'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
          >
            <div className='space-y-4 bg-light-cream pt-5 text-center font-fraunces text-lg text-dark-grey-blue'>
              {links.map(({ link, name }, index) => (
                <div key={index}>
                  <Link href={link}>{name}</Link>
                </div>
              ))}
            </div>
            <div className='h-full bg-gradient-to-b from-light-cream to-light-cream/50' />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
