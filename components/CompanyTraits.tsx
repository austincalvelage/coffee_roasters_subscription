import Grid from './Grid'
import { CoffeeBeanIcon, GiftIcon, TruckIcon } from './Icons'

function CompanyTraits(): JSX.Element {
  return (
    <section className='relative'>
      <Grid classes='text-light-cream text-center pt-6 px-3 md:pt-7 xl:px-10' gap='gap-3.5'>
        <div className='col-span-full col-start-1 my-7 space-y-3 md:col-span-8 md:col-start-3'>
          <h2 className='font-fraunces text-lg font-black md:text-xl xl:text-2xl'>Why choose us?</h2>
          <p className='font-barlow'>
            A large part of our role is choosing which particular coffees will be featured in our range. This means
            working closely with the best coffee growers to give you a more impactful experience on every level.
          </p>
        </div>
        <div className='col-span-full col-start-1 flex flex-col items-center space-y-8 rounded-lg bg-[#0E8784] px-4 pt-9 pb-7 md:col-span-10 md:col-start-2 md:min-h-[208px] md:flex-row md:gap-10 md:space-y-0 md:px-5 md:py-5 xl:col-span-4 xl:flex-col'>
          <div>
            <CoffeeBeanIcon />
          </div>
          <div className='space-y-3 text-center text-light-cream  md:pb-0 md:text-left xl:text-center'>
            <h3 className='font-fraunces text-lg font-black'>Best quality</h3>
            <p className='font-barlow'>
              Discover an endless variety of the world’s best artisan coffee from each of our roasters.
            </p>
          </div>
        </div>
        <div className='col-span-full col-start-1 flex flex-col items-center space-y-8 rounded-lg bg-[#0E8784] px-4 pt-9 pb-7 md:col-span-10 md:col-start-2 md:min-h-[208px] md:flex-row md:justify-center md:gap-10 md:space-y-0 md:px-5 md:py-5 xl:col-span-4 xl:flex-col'>
          <div>
            <GiftIcon />
          </div>
          <div className='space-y-3 text-center text-light-cream  md:pb-0 md:text-left xl:text-center'>
            <h3 className='font-fraunces text-lg font-black'>Exclusive benefits</h3>
            <p className='font-barlow'>
              Special offers and swag when you subscribe, including 30% off your first shipment.
            </p>
          </div>
        </div>
        <div className='col-span-full col-start-1 flex flex-col items-center space-y-8 rounded-lg bg-[#0E8784] px-4 pt-9 pb-7 md:col-span-10 md:col-start-2 md:min-h-[208px] md:flex-row md:justify-center md:gap-10 md:space-y-0 md:px-5 md:py-5 xl:col-span-4 xl:flex-col'>
          <div>
            <TruckIcon />
          </div>
          <div className='space-y-3 text-center text-light-cream  md:pb-0 md:text-left xl:text-center'>
            <h3 className='font-fraunces text-lg font-black'>Free shipping</h3>
            <p className='font-barlow'>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
          </div>
        </div>
      </Grid>
      <div className='absolute inset-0 z-[-1] h-[900px] rounded-lg bg-dark-grey-blue md:h-[600px]' />
    </section>
  )
}

export default CompanyTraits
