import cn from 'classnames'

interface Props {
  children: React.ReactNode
  classes?: string // Additional classes passed in as prop
  columns?: string // Optionially change amount of columns via passing in tailwind classs
  gap?: string // Optionially change gap size via passing in tailwind classs
}

export default function Grid({
  children,
  classes,
  columns = 'grid-cols-6 md:grid-cols-12',
  gap = 'gap-2',
}: Props): JSX.Element {
  return <div className={cn('grid', classes, columns, gap)}>{children}</div>
}
