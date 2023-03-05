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
        'h-7 w-[217px] rounded-md font-fraunces text-light-cream',
        isInactive ? 'bg-fall-chill' : 'bg-dark-cyan hover:bg-petrichor',
        className
      )}
    >
      {children}
    </button>
  )
}
