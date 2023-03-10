import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import cn from 'classnames'

import { ArrowIcon } from './Icons'

interface Props {
  sectionTitle: string
  children: ReactNode
}

export default function SelectionDropDown({ sectionTitle, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, { height }] = useMeasure()
  return (
    <div className=''>
      <div className='flex items-center justify-between pb-4' onClick={() => setIsOpen(!isOpen)}>
        <h3 className='w-3/4 font-fraunces text-lg font-black text-grey-heather md:text-xl'>{sectionTitle}</h3>
        <div>
          <ArrowIcon
            className={cn(
              'cursor-pointer fill-dark-cyan transition-transform duration-500 hover:fill-petrichor',
              isOpen ? 'rotate-0' : 'rotate-180'
            )}
          />
        </div>
      </div>
      <motion.div animate={{ height }} transition={{ type: 'spring', stiffness: 500, damping: 60 }}>
        <div ref={ref}>
          <AnimatePresence mode='popLayout'>
            {isOpen && (
              <motion.div
                className='flex flex-col space-y-2 md:flex-row md:gap-1.5 md:space-y-0'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: { opacity: { duration: 0.1 }, default: { type: 'spring', stiffness: 200 } },
                }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
