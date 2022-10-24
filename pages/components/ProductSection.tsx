import Image from "next/image";
import Grid from "./Grid";

function ProductSection(): JSX.Element {
  return (
    <section>
      <Grid classes="relative space-y-2 md:space-y-0">
        <h2 className="[#333D4B]/5 col-span-full col-start-1 bg-gradient-to-b from-[#83888F]/50 to-white bg-clip-text text-center font-fraunces text-[40px] font-bold text-transparent md:from-[#83888F]/30 md:text-[96px] xl:from-[#83888F]/20 xl:text-[150px] 2xl:text-[225px]">
          our collection
        </h2>
        <div className="relative col-span-full col-start-1 flex flex-col space-y-3 md:-top-9 md:flex-row md:justify-center xl:-top-13 xl:col-span-3 xl:flex-col xl:items-center xl:space-y-9 2xl:-top-18">
          <div className="relative h-19 md:h-24 md:w-2/5 xl:w-full">
            <Image
              src="/assets/home/desktop/image-gran-espresso.png"
              alt="Gran Espresso"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="space-y-2 text-center text-[#333D4B] md:w-2/5 md:max-w-[300px] md:text-left xl:w-full xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Gran Espresso</h3>
            <p className="font-barlow">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>
        <div className="relative col-span-full col-start-1 flex flex-col space-y-3 md:-top-9 md:flex-row md:justify-center xl:-top-13 xl:col-span-3 xl:flex-col xl:items-center xl:space-y-9 2xl:-top-18">
          <div className="relative h-19 md:h-24 md:w-2/5 xl:w-full">
            <Image
              src="/assets/home/desktop/image-planalto.png"
              alt="Planalto"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="space-y-2 text-center text-[#333D4B] md:w-2/5 md:max-w-[300px] md:text-left xl:w-full xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Planalto</h3>
            <p className="font-barlow">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>
        <div className="relative col-span-full col-start-1 flex flex-col space-y-3 md:-top-9 md:flex-row md:justify-center xl:-top-13 xl:col-span-3 xl:flex-col xl:items-center xl:space-y-9 2xl:-top-18">
          <div className="relative h-19 md:h-24 md:w-2/5 xl:w-full">
            <Image
              src="/assets/home/desktop/image-piccollo.png"
              alt="Piccollo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="space-y-2 text-center text-[#333D4B] md:w-2/5 md:max-w-[300px] md:text-left xl:w-full xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Piccollo</h3>
            <p className="font-barlow">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>
        <div className="relative col-span-full col-start-1 flex flex-col space-y-3 md:-top-9 md:flex-row md:justify-center xl:-top-13 xl:col-span-3 xl:flex-col xl:items-center xl:space-y-9 2xl:-top-18">
          <div className="relative h-19 md:h-24 md:w-2/5 xl:w-full">
            <Image
              src="/assets/home/desktop/image-danche.png"
              alt="Danche"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="space-y-2 text-center text-[#333D4B] md:w-2/5 md:max-w-[300px] md:text-left xl:w-full xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Danche</h3>
            <p className="font-barlow">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </Grid>
    </section>
  );
}

export default ProductSection;
