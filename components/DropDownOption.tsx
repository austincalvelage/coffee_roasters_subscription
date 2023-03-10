import { motion } from 'framer-motion'
import cn from 'classnames'

interface Props {
  option: string
  description: string
  selection: string
  setSelection: React.Dispatch<React.SetStateAction<string>>
}

export default function DropDownOption({ option, description, setSelection, selection }: Props) {
  function handleSelection(event: React.SyntheticEvent) {
    setSelection(event.currentTarget.id)
  }
  return (
    <div
      onClick={handleSelection}
      id={option}
      className={cn(
        'px h-18 cursor-pointer space-y-1 rounded-lg p-3 hover:bg-pale-orange hover:text-dark-grey-blue md:h-[250px] md:w-1/3',
        selection === option ? 'bg-dark-cyan text-light-cream' : 'bg-[#F4F1EB] text-dark-grey-blue'
      )}
    >
      <h4 className={cn('font-fraunces text-lg font-black')}>{option}</h4>
      <p className={cn('font-barlow')}>{description}</p>
    </div>
  )
}
