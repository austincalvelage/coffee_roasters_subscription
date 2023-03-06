import Image from 'next/image'
import Grid from './Grid'
import qualityMobile from '../public/assets/about/mobile/image-quality.jpg'
import qualityTablet from '../public/assets/about/tablet/image-quality.jpg'
import qualityDesktop from '../public/assets/about/desktop/image-quality.jpg'

function Quality(): JSX.Element {
  return (
    <section className=''>
      <Grid classes='rounded-lg relative'>
        <div className='relative z-[1] col-span-full col-start-1 px-3 md:px-7 xl:hidden'>
          <Image src={qualityMobile} alt='coffee bean' className='rounded-lg md:hidden' sizes='100vw' />
          <Image
            src={qualityTablet}
            alt='coffee bean'
            className='hidden w-full rounded-lg md:block md:max-h-[322px] xl:hidden'
          />
        </div>
        <div className='relative bottom-12.5 col-span-full col-start-1 space-y-3 rounded-lg bg-dark-grey-blue px-3 pb-8.5 pt-20 text-center md:bottom-24 md:px-7 md:pt-30 xl:bottom-0 xl:py-0 xl:pt-11 xl:pb-22 xl:text-left'>
          <div className='space-y-3 xl:w-[50%]'>
            <h3 className='font-fraunces text-[28px] font-bold leading-7 text-light-cream md:text-xl xl:text-2xl'>
              Uncompromising quality
            </h3>
            <p className='font-barlow leading-7 text-light-cream/80 '>
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ,
              on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag
              of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
          <div className='absolute right-7 bottom-10 h-[474px] w-[445px]'>
            <Image
              src={qualityDesktop}
              alt='coffee bean'
              sizes='100vw'
              className='hidden h-full w-full rounded-lg xl:block'
            />
          </div>
        </div>
      </Grid>
    </section>
  )
}

export default Quality
