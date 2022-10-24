import Image from "next/image";
import Grid from "./Grid";

function CompanyTraits(): JSX.Element {
  const traits: {
    image: string;
    trait: string;
    description: string;
  }[] = [
    {
      image: "/assets/home/desktop/icon-gift.svg",
      trait: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      image: "/assets/home/desktop/icon-truck.svg",
      trait: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];
  return (
    <section className="relative">
      <Grid
        classes="text-[#FEFCF7] text-center pt-6 rounded-sm z-30 px-3 md:pt-7 xl:px-10"
        gap="gap-3.5"
      >
        <h2 className="col-span-full col-start-1 pb-3 font-fraunces text-3xl font-bold md:text-[32px] xl:text-[40px]">
          Why choose us?
        </h2>
        <p className="col-span-full col-start-1 pb-8 font-barlow text-[15px] leading-loose md:col-span-8 md:col-start-3 md:pb-6">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="col-span-full col-start-1 flex flex-col items-center rounded-sm bg-[#0E8784] px-3 pt-9 md:col-span-10 md:col-start-2 md:flex-row md:justify-center md:gap-10 md:px-3 md:py-5 xl:col-span-4 xl:flex-col">
          <div className="w-9 pb-7 md:pb-0">
            <Image
              src="/assets/home/desktop/icon-coffee-bean.svg"
              alt="coffee bean"
              layout="responsive"
              width={454}
              height={356}
            />
          </div>
          <div className="space-y-3 pb-7 text-center text-[#FEFCF7] md:w-3/5 md:pb-0 md:text-left xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Best quality</h3>
            <p className="font-barlow leading-7">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="col-span-full col-start-1 flex flex-col items-center rounded-sm bg-[#0E8784] px-3 pt-9 md:col-span-10 md:col-start-2 md:flex-row md:justify-center md:gap-10 md:px-3 md:py-5 xl:col-span-4 xl:flex-col">
          <div className="w-9 pb-7 md:pb-0">
            <Image
              src="/assets/home/desktop/icon-coffee-bean.svg"
              alt="coffee bean"
              layout="responsive"
              width={454}
              height={356}
            />
          </div>
          <div className="space-y-3 pb-7 text-center text-[#FEFCF7] md:w-3/5 md:pb-0 md:text-left xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Best quality</h3>
            <p className="font-barlow leading-7">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="col-span-full col-start-1 flex flex-col items-center rounded-sm bg-[#0E8784] px-3 pt-9 md:col-span-10 md:col-start-2 md:flex-row md:justify-center md:gap-10 md:px-3 md:py-5 xl:col-span-4 xl:flex-col">
          <div className="w-9 pb-7 md:pb-0">
            <Image
              src="/assets/home/desktop/icon-coffee-bean.svg"
              alt="coffee bean"
              layout="responsive"
              width={454}
              height={356}
            />
          </div>
          <div className="space-y-3 pb-7 text-center text-[#FEFCF7] md:w-3/5 md:pb-0 md:text-left xl:text-center">
            <h3 className="font-fraunces text-2xl font-bold">Best quality</h3>
            <p className="font-barlow leading-7">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
      </Grid>
      <div className="absolute inset-0 -z-10 h-[900px] rounded-sm bg-[#2C343E] md:h-[600px]" />
    </section>
  );
}

export default CompanyTraits;
