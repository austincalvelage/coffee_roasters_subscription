import Image from "next/image";

function ProductSection() {
  const coffee: {
    image: string;
    name: string;
    description: string;
    id: number;
  }[] = [
    {
      id: 1,
      image: "/assets/home/desktop/image-gran-espresso.png",
      name: "Gran Espresso",
      description:
        "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
      id: 2,
      image: "/assets/home/desktop/image-planalto.png",
      name: "Planalto",
      description:
        "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    },
    {
      id: 3,
      image: "/assets/home/desktop/image-piccollo.png",
      name: "Piccollo",
      description:
        "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    },
    {
      id: 4,
      image: "/assets/home/desktop/image-danche.png",
      name: "Danche",
      description:
        "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="[#333D4B]/5 bg-gradient-to-b from-[#83888F]/50 to-white bg-clip-text pb-4 text-center font-fraunces text-[40px] font-bold text-transparent md:from-[#83888F]/30 md:pb-0 md:text-[96px] xl:from-[#83888F]/10 xl:text-[150px]">
        our collection
      </h2>
      <div className="flex max-w-[1111px] flex-col justify-center space-y-6 px-2 lg:space-y-0 xl:flex-row xl:justify-center">
        {coffee.map(({ image, name, description, id }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center space-y-3 text-center md:relative md:-top-8 md:flex-row md:items-start xl:-top-12 xl:flex-col"
          >
            <div className="w-2/5 md:w-[255px]">
              <Image
                src={image}
                alt="coffee beans"
                layout="responsive"
                width={454}
                height={356}
              />
            </div>
            <div className="space-y-2 text-[#333D4B] md:w-[282px] md:text-left lg:w-[255px] lg:text-center">
              <h3 className="font-fraunces text-2xl font-bold">{name}</h3>
              <p className="font-barlow">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
