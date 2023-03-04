import Image from 'next/legacy/image'
import Link from 'next/link'
import logo from '../public/assets/shared/desktop/logo.svg'
import hamburgerBtn from '../public/assets/shared/mobile/icon-hamburger.svg'
import closeBtn from '../public/assets/shared/mobile/icon-close.svg'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

function Header({}: Props): JSX.Element {
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
    <header className='mb-5 flex justify-between pt-4 md:mb-6 lg:mb-4'>
      <div className='h-full w-20 md:w-30 lg:w-25'>
        <Image src={logo} alt='logo' layout='responsive' />
      </div>
      <div className='md:hidden' onClick={navToggleHandler}>
        {!navToggle && <Image src={hamburgerBtn} width='20' height='20' alt='logo' />}
        {navToggle && <Image src={closeBtn} width='20' height='20' alt='logo' />}
      </div>
      <nav className='hidden gap-4 font-barlow text-xs font-bold tracking-widest text-secondary md:flex'>
        {links.map(({ link, name }, index) => (
          <div key={index} className='text-[#83888F] hover:text-[#333D4B]'>
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
            <div className='space-y-4 bg-white text-center font-fraunces text-2xl text-[#333D4B]'>
              {links.map(({ link, name }, index) => (
                <div key={index}>
                  <Link href={link}>{name}</Link>
                </div>
              ))}
            </div>
            <div className='h-full bg-gradient-to-b from-white to-white/50' />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
