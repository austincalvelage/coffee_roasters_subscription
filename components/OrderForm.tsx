import Button from './Button'
import DropDownOption from './DropDownOption'
import Grid from './Grid'
import SelectionDropDown from './SelectionDropDown'
import cn from 'classnames'

interface Props {
  coffeeForm: string
  coffeeType: string
  coffeeAmount: string
  coffeeGrind: string
  coffeeFrequency: string
  setCoffeeForm: React.Dispatch<React.SetStateAction<string>>
  setCoffeeType: React.Dispatch<React.SetStateAction<string>>
  setCoffeeAmount: React.Dispatch<React.SetStateAction<string>>
  setCoffeeGrind: React.Dispatch<React.SetStateAction<string>>
  setCoffeeFrequency: React.Dispatch<React.SetStateAction<string>>
}

export default function OrderForm({
  coffeeForm,
  coffeeType,
  coffeeAmount,
  coffeeGrind,
  coffeeFrequency,
  setCoffeeForm,
  setCoffeeType,
  setCoffeeAmount,
  setCoffeeGrind,
  setCoffeeFrequency,
}: Props) {
  return (
    <Grid classes='xl:px-5 space-y-6'>
      <div className='col-span-3 col-start-1 hidden space-y-2 font-fraunces text-lg font-black xl:block'>
        <div className={cn('flex gap-3', coffeeForm === '' && 'text-[#83888F]')}>
          <span className={cn('text-dark-cyan', coffeeForm === '' && 'text-[#83888F]')}>01</span>
          Preferences
        </div>
        <hr className='text-[#83888F]' />
        <div className={cn('flex gap-3', coffeeType === '' && 'text-[#83888F]')}>
          <span className={cn('text-dark-cyan', coffeeType === '' && 'text-[#83888F]')}>02</span> Bean Type
        </div>
        <hr className='text-[#83888F]' />
        <div className={cn('flex gap-3', coffeeAmount === '' && 'text-[#83888F]')}>
          <span className={cn('text-dark-cyan', coffeeAmount === '' && 'text-[#83888F]')}>03</span> Quantity
        </div>
        <hr className='text-[#83888F]' />
        <div className={cn('flex gap-3', coffeeGrind === '' && 'text-[#83888F]')}>
          <span className={cn('text-dark-cyan', coffeeGrind === '' && 'text-[#83888F]')}>04</span> Grind Option
        </div>
        <hr className='text-[#83888F]' />
        <div className={cn('flex gap-3', coffeeFrequency === '' && 'text-[#83888F]')}>
          <span className={cn('text-dark-cyan', coffeeFrequency === '' && 'text-[#83888F]')}>05</span> Deliveries
        </div>
      </div>
      <div className='col-span-full col-start-1 space-y-11 xl:col-span-full xl:col-start-5'>
        <SelectionDropDown sectionTitle='How do you drink your coffee?'>
          <DropDownOption
            option='Capsule'
            description='Compatible with Nespresso systems and similar brewers'
            setSelection={setCoffeeForm}
            selection={coffeeForm}
          />
          <DropDownOption
            option='Filter'
            description='For pour over or drip methods like Aeropress, Chemex, and V60'
            setSelection={setCoffeeForm}
            selection={coffeeForm}
          />
          <DropDownOption
            option='Espresso'
            description='Dense and finely ground beans for an intense, flavorful experience'
            setSelection={setCoffeeForm}
            selection={coffeeForm}
          />
        </SelectionDropDown>
        <SelectionDropDown sectionTitle='What type of coffee?'>
          <DropDownOption
            option='Single Origin'
            description='Distinct, high quality coffee from a specific family-owned farm'
            setSelection={setCoffeeType}
            selection={coffeeType}
          />
          <DropDownOption
            option='Decaf'
            description='Just like regular coffee, except the caffeine has been removed'
            setSelection={setCoffeeType}
            selection={coffeeType}
          />
          <DropDownOption
            option='Blended'
            description='Combination of two or three dark roasted beans of organic coffees'
            setSelection={setCoffeeType}
            selection={coffeeType}
          />
        </SelectionDropDown>
        <SelectionDropDown sectionTitle='How much would you like?'>
          <DropDownOption
            option='250g'
            description='Perfect for the solo drinker. Yields about 12 delicious cups.'
            setSelection={setCoffeeAmount}
            selection={coffeeAmount}
          />
          <DropDownOption
            option='500g'
            description='Perfect option for a couple. Yields about 40 delectable cups.'
            setSelection={setCoffeeAmount}
            selection={coffeeAmount}
          />
          <DropDownOption
            option='1000g'
            description='Perfect for offices and events. Yields about 90 delightful cups.'
            setSelection={setCoffeeAmount}
            selection={coffeeAmount}
          />
        </SelectionDropDown>
        <SelectionDropDown sectionTitle='Want us to grind them?'>
          <DropDownOption
            option='Whole Bean'
            description='Best choice if you cherish the full sensory experience'
            setSelection={setCoffeeGrind}
            selection={coffeeGrind}
          />
          <DropDownOption
            option='Filter'
            description='For drip or pour-over coffee methods such as V60 or Aeropress'
            setSelection={setCoffeeGrind}
            selection={coffeeGrind}
          />
          <DropDownOption
            option='Cafetiére'
            description='Course ground beans specially suited for french press coffee'
            setSelection={setCoffeeGrind}
            selection={coffeeGrind}
          />
        </SelectionDropDown>
        <SelectionDropDown sectionTitle='How often should we deliver?'>
          <DropDownOption
            option='Every Week'
            description='$7.20 per shipment. Includes free first-class shipping.'
            setSelection={setCoffeeFrequency}
            selection={coffeeFrequency}
          />
          <DropDownOption
            option='Every 2 weeks'
            description='$9.60 per shipment. Includes free priority shipping.'
            setSelection={setCoffeeFrequency}
            selection={coffeeFrequency}
          />
          <DropDownOption
            option='Every month'
            description='$12.00 per shipment. Includes free priority shipping.'
            setSelection={setCoffeeFrequency}
            selection={coffeeFrequency}
          />
        </SelectionDropDown>
      </div>
      <div className='col-span-full col-start-1 space-y-1 rounded-lg bg-dark-grey-blue px-3 py-4 md:px-8 xl:col-span-full xl:col-start-5'>
        <h4 className='font-barlow text-grey-heather'>ORDER SUMMARY</h4>
        <p className='text-center font-fraunces text-lg font-black leading-10 text-light-cream md:text-left'>
          “I drink my coffee as
          <span className='text-dark-cyan'>{coffeeForm === '' ? '_____' : ` ${coffeeForm}`}</span>, with a
          <span className='text-dark-cyan'>{coffeeType === '' ? '_____' : ` ${coffeeType}`}</span> type of bean.
          <span className='text-dark-cyan'>{coffeeAmount === '' ? '_____' : ` ${coffeeAmount}`}</span> ground ala
          <span className='text-dark-cyan'>{coffeeGrind === '' ? '_____' : ` ${coffeeGrind}`}</span>, sent to me
          <span className='text-dark-cyan'>{coffeeFrequency === '' ? '_____' : ` ${coffeeFrequency}`}</span>.”
        </p>
      </div>
      <div className='col-span-full col-start-1 flex justify-center xl:justify-end'>
        <Button>Place Order</Button>
      </div>
    </Grid>
  )
}
