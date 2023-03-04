import { ReactNode } from 'react'
import cn from 'classnames'

interface Props {
  children: ReactNode
  isInactive?: boolean
  className?: string
}

export default function Button({ children, isInactive, className }: Props) {
  return (
    <button
      className={cn(
        'rounded py-2 px-4 font-fraunces text-lg text-[#FEFCF7]',
        isInactive ? 'bg-[#E2DEDB]' : 'bg-[#0E8784] hover:bg-[#66D2CF]',
        className
      )}
    >
      {children}
    </button>
  )
}
