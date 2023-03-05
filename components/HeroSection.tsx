import cn from 'classnames'
import Button from './Button'

type Props = {
  page: string
}

export default function HeroSection({ page }: Props): JSX.Element {
  function determineBackgroundImage() {
    if (page === 'home') {
      return 'h-[500px] bg-image-hero-home-mb md:bg-image-hero-home-tb lg:bg-image-hero-home-dk lg:h-[600px]'
    } else if (page === 'about') {
      return 'h-[400px] bg-center bg-image-hero-about-mb md:bg-image-hero-about-tb lg:bg-image-hero-about-dk lg:bg-contain lg:h-[450px]'
    } else if (page === 'plan') {
      return 'h-[400px] bg-image-hero-plan-mb md:bg-image-hero-plan-tb lg:bg-image-hero-plan-dk lg:h-[450px]'
    }
  }

  function determinePrimaryText() {
    if (page === 'home') {
      return (
        <>
          <h2>Great coffee</h2>
          <h2>made simple.</h2>
        </>
      )
    } else if (page === 'about') {
      return <h2>About Us</h2>
    } else if (page === 'plan') {
      return <h2>Create a plan</h2>
    }
  }

  function determineSecondaryText() {
    if (page === 'home') {
      return (
        <>
          Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best
          roasters delivered directly to your door, at your schedule.
        </>
      )
    } else if (page === 'about') {
      return (
        <>
          Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the
          world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment. Our
          commitment
        </>
      )
    } else if (page === 'plan') {
      return (
        <>
          Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from
          around the globe delivered fresh to your door.
        </>
      )
    }
  }

  return (
    <section className='flex justify-center'>
      <div
        className={cn(
          'flex w-full flex-col justify-center rounded-lg bg-cover bg-no-repeat md:items-start md:px-5 lg:px-10',
          determineBackgroundImage()
        )}
      >
        <div className='space-y-7 text-center md:w-1/2 md:text-left lg:w-3/5 xl:w-1/2 xl:max-w-[700px]'>
          <div className='text- space-y-4 text-light-cream'>
            <div className='md:text-5xl font-fraunces text-2xl leading-10 lg:text-3xl'>{determinePrimaryText()}</div>
            <p className='px-3 font-barlow md:px-0 lg:w-4/5'>{determineSecondaryText()}</p>
          </div>
          {page === 'home' && <Button>Create your plan</Button>}
        </div>
      </div>
    </section>
  )
}
