import type { NextPage } from 'next'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import OurCommitment from '../components/OurCommitment'
import Quality from '../components/Quality'
import Footer from '../components/Footer'
import OurHeadquarters from '../components/OurHeadquarters'
import { useState } from 'react'

const About: NextPage = () => {
  const [userOrder, setUserOrder] = useState()
  return (
    <div className='space-y-6'>
      <Header />
      <main className='space-y-20'>
        <HeroSection page='about' />
        <OurCommitment />
        <Quality />
        <OurHeadquarters />
        <Footer />
      </main>
    </div>
  )
}

export default About
