import type { NextPage } from 'next'
import CompanyTraits from '../components/CompanyTraits'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import ProductSection from '../components/ProductSection'

const Home: NextPage = () => {
  return (
    <div className='space-y-4  py-4 '>
      <Header />
      <main className='space-y-15'>
        <HeroSection page='home' />
        <ProductSection />
        <CompanyTraits />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  )
}

export default Home
