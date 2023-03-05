import Image from 'next/legacy/image'

export default function CoffeeSelection() {
  const coffee: {
    image: string
    name: string
    description: string
    id: number
  }[] = [
    {
      id: 1,
      image: '/../public/assets/home/desktop/image-gran-espresso.png',
      name: 'Gran Espresso',
      description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
    },
    {
      id: 2,
      image: '/../public/assets/home/desktop/image-planalto.png',
      name: 'Planalto',
      description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    },
    {
      id: 3,
      image: '/../public/assets/home/desktop/image-piccollo.png',
      name: 'Piccollo',
      description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    },
    {
      id: 4,
      image: '/../public/assets/home/desktop/image-danche.png',
      name: 'Danche',
      description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    },
  ]
  return (
    <>
      {coffee.map(({ image, name, description, id }) => (
        <div
          key={id}
          className='flex flex-col items-center justify-center text-center md:flex-row md:items-start md:text-left xl:flex-col xl:items-center xl:text-center'
        >
          <div className='h-full w-[200px] md:w-[255px]'>
            <Image src={image} alt='coffee beans' layout='responsive' width={454} height={356} />
          </div>
          <div className='w-2/3 space-y-2 text-dark-grey-blue md:w-2/5 xl:w-[255px]'>
            <h3 className='font-fraunces text-2xl font-black'>{name}</h3>
            <p className='font-barlow'>{description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
