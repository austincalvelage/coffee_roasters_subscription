import Image from 'next/image'
import Grid from './Grid'
import qualityMobile from '../public/assets/about/mobile/image-quality.jpg'
import qualityTablet from '../public/assets/about/tablet/image-quality.jpg'
import qualityDesktop from '../public/assets/about/desktop/image-quality.jpg'

function Quality(): JSX.Element {
  return (
    <section>
      <Grid classes='bg-[#2C343E] rounded-sm px-3 md:px-6'>
        <div className='relative -top-5 col-span-full col-start-1 lg:col-start-9 lg:row-span-full'>
          <Image
            src={qualityMobile}
            alt='coffee bean'
            className='rounded-xs object-cover md:hidden'
            fill
            sizes='100vw'
          />
          <Image
            src={qualityTablet}
            alt='coffee bean'
            fill
            sizes='100vw'
            className='hidden rounded-xs object-cover md:inline-block lg:hidden'
          />
          <Image
            src={qualityDesktop}
            alt='coffee bean'
            fill
            sizes='100vw'
            className='hidden rounded-xs object-cover lg:inline-block'
          />
        </div>
        <div className='xl:text-leftcol-span-full col-span-full col-start-1 space-y-3 pb-6 text-center text-[#FEFCF7] lg:col-span-6 lg:row-span-full lg:row-start-1 lg:pt-11 '>
          <h3 className='font-fraunce text-3xl font-bold leading-none'>Uncompromising quality</h3>
          <p className='font-barlow'>
            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on
            our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of
            coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee,
            so that brewing is easy and enjoyable.
          </p>
        </div>
      </Grid>
    </section>
  )
}

export default Quality
