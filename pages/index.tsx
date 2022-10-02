import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import hamburgerBtn from "../public/assets/hamburger-btn.svg"

const Home: NextPage = () => {
  return (
    <div className='h-screen container space-y-4 pt-4'>
      <header className='flex justify-between'>
        <Image src={logo} width="165" height="20" alt='logo' />
        <Image src={hamburgerBtn} width="20" height="20" alt='logo' />
      </header>
      <section className=' dark flex justify-center'>
        <div className='bg-image-hero-mb h-[500px] w-[330px] border border-black bg-cover rounded flex flex-col justify-center items-center text-center space-y-3'>
          <h1 className='text-primary text-[40px] leading-10 font-fraunces'>Great coffee made simple.</h1>
          <p className='font-barlow text-secondary leading-7'>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees
            from our best roasters delivered directly to your door, at your schedule.
          </p>
          <button className='bg-[#0E8784] text-lg font-fraunces py-2 px-4 rounded text-primary'>Create your plan</button>
        </div>
      </section>
    </div>
  )
}

export default Home
