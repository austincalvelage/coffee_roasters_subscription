import Image from 'next/image'
import Grid from './Grid'
import comitmentMobile from '../public/assets/about/mobile/image-commitment.jpg'
import comitmentTablet from '../public/assets/about/tablet/image-commitment.jpg'
import comitmentDesktop from '../public/assets/about/desktop/image-commitment.jpg'

function CompanyTraits(): JSX.Element {
  return (
    <section>
      <Grid>
        <div className='relative col-span-full col-start-1 md:col-span-5'>
          <Image src={comitmentMobile} alt='coffee bean' className='rounded-sm md:hidden' />
          <Image src={comitmentTablet} alt='coffee bean' className='hidden rounded-sm md:inline-block lg:hidden' />
          <Image src={comitmentDesktop} alt='coffee bean' className='hidden rounded-sm lg:inline-block' />
        </div>
        <div className='col-span-full col-start-1 space-y-3 self-center text-center md:col-start-7 md:text-left'>
          <h3 className='font-fraunces text-4xl font-bold'>Our commitment</h3>
          <p className='font-barlow text-[#333D4B]'>
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

export default CompanyTraits
