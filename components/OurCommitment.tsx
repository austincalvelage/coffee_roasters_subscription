import Image from 'next/image'
import Grid from './Grid'
import commitmentMobile from '../public/assets/about/mobile/image-commitment.jpg'
import commitmentTablet from '../public/assets/about/tablet/image-commitment.jpg'
import commitmentDesktop from '../public/assets/about/desktop/image-commitment.jpg'

export default function CompanyTraits(): JSX.Element {
  return (
    <section>
      <Grid classes='space-y-6'>
        <div className='relative col-span-full col-start-1 md:col-span-5'>
          <Image src={commitmentMobile} alt='coffee bean' className='inline-block rounded-lg md:hidden' sizes='100vw' />
          <Image src={commitmentTablet} alt='coffee bean' className='hidden rounded-lg md:inline-block xl:hidden' />
          <Image
            src={commitmentDesktop}
            alt='coffee bean'
            className='hidden rounded-lg xl:inline-block'
            sizes='100vw'
          />
        </div>
        <div className='col-span-full col-start-1 space-y-3 self-center text-center md:col-start-7 md:text-left'>
          <h3 className='font-fraunces text-xl font-black text-dark-grey-blue xl:text-2xl'>Our commitment</h3>
          <p className='font-barlow text-dark-grey-blue'>
            We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for
            you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the
            specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and
            opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global
            community of farmers through with well above fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each
            lot to highlight tasting profiles distinctive to their native growing region.
          </p>
        </div>
      </Grid>
    </section>
  )
}
