import type { NextPage } from 'next'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import { useState } from 'react'
import OrderForm from '../components/OrderForm'

const Plan: NextPage = () => {
  const [coffeeForm, setCoffeeForm] = useState<string>('')
  const [coffeeType, setCoffeeType] = useState<string>('')
  const [coffeeAmount, setCoffeeAmount] = useState<string>('')
  const [coffeeGrind, setCoffeeGrind] = useState<string>('')
  const [coffeeFrequency, setCoffeeFrequency] = useState<string>('')
  return (
    <div className='space-y-6'>
      <Header />
      <main className='space-y-20'>
        <HeroSection page='plan' />
        <HowItWorks isInverted />
        <OrderForm
          coffeeForm={coffeeForm}
          setCoffeeForm={setCoffeeForm}
          coffeeType={coffeeType}
          setCoffeeType={setCoffeeType}
          coffeeAmount={coffeeAmount}
          setCoffeeAmount={setCoffeeAmount}
          coffeeGrind={coffeeGrind}
          setCoffeeGrind={setCoffeeGrind}
          coffeeFrequency={coffeeFrequency}
          setCoffeeFrequency={setCoffeeFrequency}
        />
        <Footer />
      </main>
    </div>
  )
}

export default Plan
