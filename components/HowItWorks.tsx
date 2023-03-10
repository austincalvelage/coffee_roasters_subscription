import Grid from './Grid'
import Button from './Button'
import cn from 'classnames'

interface Props {
  isInverted?: boolean
}
export default function HowItWorks({ isInverted }: Props): JSX.Element {
  return (
    <section
      className={cn('rounded-lg', !isInverted ? 'bg-light-cream' : 'bg-dark-grey-blue py-10 md:pb-8 md:pt-11 xl:py-13')}
    >
      <Grid classes='space-y-5 px-3 md:px-5 xl:px-10 relative'>
        {!isInverted && (
          <div className='col-span-full col-start-1'>
            <h2 className='text-center font-fraunces text-lg font-black text-dark-grey-blue md:text-left'>
              How it works
            </h2>
          </div>
        )}

        <Grid classes='col-start-1 col-span-full relative'>
          <div
            className={cn(
              'relative z-10 col-start-1 hidden h-4 w-4 place-content-start rounded-full border border-dark-cyan md:block',
              isInverted ? 'bg-dark-grey-blue' : 'bg-light-cream'
            )}
          />
          <div className='absolute left-0 right-0 top-2 col-span-5 col-start-1 hidden h-px bg-pale-orange md:block' />
          <div
            className={cn(
              'relative z-10 col-start-5 hidden h-4 w-4 place-content-start rounded-full border border-dark-cyan md:block',
              isInverted ? 'bg-dark-grey-blue' : 'bg-light-cream'
            )}
          />
          <div className='absolute right-0 left-0 top-2 col-span-5 col-start-4 hidden h-px bg-pale-orange md:block' />
          <div
            className={cn(
              'relative right-2 z-10 col-start-9 hidden h-4 w-4 place-content-start rounded-full border border-dark-cyan md:block',
              isInverted ? 'bg-dark-grey-blue' : 'bg-light-cream'
            )}
          />
        </Grid>
        <div className='col-span-full col-start-1 space-y-3 md:col-span-4'>
          <h4 className='text-center font-fraunces text-3xl font-black text-pale-orange md:text-left'>01</h4>
          <h3
            className={cn(
              'text-center font-fraunces text-[28px] font-black  md:w-[156px] md:break-words md:text-left',
              isInverted ? 'text-light-cream' : 'text-dark-grey-blue'
            )}
          >
            Pick your coffee
          </h3>
          <p
            className={cn(
              'text-center font-barlow md:text-left',
              isInverted ? 'text-light-cream' : 'text-dark-grey-blue'
            )}
          >
            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices
            for them. There are new coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className='col-span-full col-start-1 space-y-3 md:col-span-4 md:col-start-5'>
          <h4 className='text-center font-fraunces text-3xl font-black text-pale-orange md:text-left'>02</h4>
          <h3
            className={cn(
              'text-center font-fraunces text-[28px] font-black text-dark-grey-blue md:w-[156px] md:break-words md:text-left',
              isInverted ? 'text-light-cream' : 'text-dark-grey-blue'
            )}
          >
            Choose the frequency
          </h3>
          <p
            className={cn(
              'text-center font-barlow leading-7 md:text-left',
              isInverted ? 'text-light-cream' : 'text-dark-grey-blue'
            )}
          >
            Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>
        <div className='col-span-full col-start-1 space-y-3 md:col-span-4 md:col-start-9'>
          <h4 className='text-center font-fraunces text-3xl font-black text-pale-orange md:text-left'>03</h4>
          <h3
            className={cn(
              'text-center font-fraunces text-[28px] font-black text-dark-grey-blue md:w-[156px] md:break-words md:text-left',
              isInverted ? 'text-light-cream' : 'text-dark-grey-blue'
            )}
          >
            Receive and enjoy
          </h3>
          <p
            className={cn(
              'text-center font-barlow leading-7 md:text-left',
              isInverted ? 'text-light-cream' : 'text-dark-grey-blue'
            )}
          >
            We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
        {!isInverted && (
          <Button className='col-span-4 col-start-2 md:col-span-3 md:col-start-1'>Create your plan</Button>
        )}
      </Grid>
    </section>
  )
}
