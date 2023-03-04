import type { NextPage } from 'next'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Plan: NextPage = () => {
  return (
    <div className='space-y-4'>
      <Header />
      <HeroSection page='plan' />
    </div>
  )
}

export default Plan
