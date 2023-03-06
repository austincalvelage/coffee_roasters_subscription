import type { NextPage } from 'next'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const Plan: NextPage = () => {
  return (
    <div className='space-y-6'>
      <Header />
      <main className='space-y-20'>
        <HeroSection page='plan' />

        <Footer />
      </main>
    </div>
  )
}

export default Plan
